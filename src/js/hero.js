/* Hexdump hero — a live hex/ASCII view of a byte field that evolves under a
   Conway-coupled cellular automaton (ping-pong buffers).

   - Each cell is a byte (0-255). "Alive" = value > 127 (high bit set).
   - Moore neighbourhood, toroidal wrap, B3/S23 on the high bit; values diffuse
     toward the neighbour average, dead cells cool toward 0.
   - ASCII column: value <= 32 renders as a space, otherwise String.fromCharCode.
   - Seeded with text so frame 0 is readable, then it dissolves into the soup.
     When the field nearly dies out it reseeds, so the message keeps reforming.

   Decorative + aria-hidden; the static hexdump in the markup is the no-JS
   fallback. Under prefers-reduced-motion we don't animate at all — the static
   hexdump stays. */
(function () {
  "use strict";

  var canvas = document.getElementById("hero");
  if (!canvas || !canvas.getContext) return;

  // Honour reduced motion: leave the static hexdump fallback in place.
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  document.body.classList.add("js-hero");
  var ctx = canvas.getContext("2d");

  var GEN_PER_SEC = 0.5;
  var STEP_MS = 1000 / GEN_PER_SEC;

  var FONT = 13; // px (logical)
  var LINE = 17; // px line height
  var OFFSET_DIGITS = 6;
  var LIFE_DENSITY = 0.16; // fraction of cells seeded alive
  var REVIVE_AT = 0.015; // reseed when alive fraction drops below this
  var dpr = Math.max(1, window.devicePixelRatio || 1);
  var MONO = "ui-monospace, Menlo, Consolas, monospace";

  var SEED =
    "cameron gorrie // principal engineer @ float :: toronto :: " +
    "i love to learn and i love solving problems :: ";

  var cols = 0;
  var rows = 0;
  var bufA;
  var bufB;
  var charW = 8;
  var topPad = 0;
  var leftPad = 0;
  var col = { bg: "#0a0a0a", dim: "#8a8a8a", base: "rgba(0,255,156,.32)", hot: "#00ff9c" };

  function cssVar(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name);
    return (v || fallback).trim();
  }

  function toRGB(c) {
    c = c.trim();
    if (c.charAt(0) === "#") {
      if (c.length === 4) {
        c = "#" + c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
      }
      return [
        parseInt(c.substr(1, 2), 16),
        parseInt(c.substr(3, 2), 16),
        parseInt(c.substr(5, 2), 16),
      ];
    }
    var m = c.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    return m ? [+m[1], +m[2], +m[3]] : [0, 255, 156];
  }

  function readColors() {
    var a = toRGB(cssVar("--accent", "#00ff9c"));
    col.bg = cssVar("--bg", "#0a0a0a");
    col.dim = cssVar("--fg-dim", "#8a8a8a");
    col.base = "rgba(" + a[0] + "," + a[1] + "," + a[2] + ",0.32)";
    col.hot = "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")";
  }

  function seed(buf) {
    for (var i = 0; i < buf.length; i++) {
      var b = SEED.charCodeAt(i % SEED.length);
      if (Math.random() < LIFE_DENSITY) b |= 0x80; // inject life to fuel the CA
      buf[i] = b;
    }
  }

  function setup() {
    var cssW = canvas.clientWidth || 720;
    var cssH = parseInt(getComputedStyle(canvas).height, 10) || 260;

    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = FONT + "px " + MONO;
    ctx.textBaseline = "top";
    charW = ctx.measureText("0").width || 8;

    rows = Math.max(4, Math.floor(cssH / LINE));
    // line = leftpad(1) + offset + 2 spaces + hex(3c-1) + " |" + ascii(c) + "|"
    cols = Math.max(4, Math.floor((cssW / charW - OFFSET_DIGITS - 10) / 4));

    topPad = Math.max(0, (cssH - rows * LINE) / 2);
    leftPad = charW;

    readColors();
    bufA = new Uint8Array(cols * rows);
    bufB = new Uint8Array(cols * rows);
    seed(bufA);
    render(bufA);
  }

  function step(src, dst) {
    var alive = 0;
    for (var r = 0; r < rows; r++) {
      var up = ((r - 1 + rows) % rows) * cols;
      var mid = r * cols;
      var dn = ((r + 1) % rows) * cols;
      for (var c = 0; c < cols; c++) {
        var l = (c - 1 + cols) % cols;
        var rt = (c + 1) % cols;
        var n0 = src[up + l], n1 = src[up + c], n2 = src[up + rt];
        var n3 = src[mid + l], n5 = src[mid + rt];
        var n6 = src[dn + l], n7 = src[dn + c], n8 = src[dn + rt];
        var sum = n0 + n1 + n2 + n3 + n5 + n6 + n7 + n8;
        var live =
          (n0 > 127) + (n1 > 127) + (n2 > 127) + (n3 > 127) +
          (n5 > 127) + (n6 > 127) + (n7 > 127) + (n8 > 127);
        var avg = sum >> 3;
        var b = src[mid + c];
        var nv;
        if (b > 127) {
          nv = live === 2 || live === 3 ? 160 + (avg & 63) : (b >> 1);
        } else {
          nv = live === 3 ? 144 + (avg & 63) : Math.floor(b * 0.7);
        }
        // Spontaneous generation: a 00 cell may spark into a random character,
        // likelier the more 00s surround it (all eight 00 => 10% chance).
        if (b === 0) {
          var zeros =
            (n0 === 0) + (n1 === 0) + (n2 === 0) + (n3 === 0) +
            (n5 === 0) + (n6 === 0) + (n7 === 0) + (n8 === 0);
          if (Math.random() < 0.1 * (zeros / 8)) nv = 33 + ((Math.random() * 223) | 0);
        }
        dst[mid + c] = nv;
        if (nv > 127) alive++;
      }
    }
    if (alive < REVIVE_AT * cols * rows) seed(dst);
  }

  function hex2(b) {
    return (b < 16 ? "0" : "") + b.toString(16);
  }

  function render(buf) {
    ctx.fillStyle = col.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var hexX = leftPad + (OFFSET_DIGITS + 2) * charW;
    var hexLen = cols * 3 - 1;
    var asciiX = hexX + (hexLen + 6) * charW;

    for (var r = 0; r < rows; r++) {
      var y = topPad + r * LINE;
      var base = r * cols;

      // offset gutter
      var off = (base & 0xffffff).toString(16);
      while (off.length < OFFSET_DIGITS) off = "0" + off;
      ctx.fillStyle = col.dim;
      ctx.fillText(off, leftPad, y);

      // hex + ascii base pass (dim)
      var hexStr = "";
      var asciiStr = "";
      for (var c = 0; c < cols; c++) {
        var b = buf[base + c];
        hexStr += hex2(b) + (c < cols - 1 ? " " : "");
        asciiStr += b <= 32 ? " " : String.fromCharCode(b);
      }
      ctx.fillStyle = col.base;
      ctx.fillText(hexStr, hexX, y);
      ctx.fillText(asciiStr, asciiX, y);

      // overdraw living cells, bright
      ctx.fillStyle = col.hot;
      for (c = 0; c < cols; c++) {
        var v = buf[base + c];
        if (v > 127) {
          ctx.fillText(hex2(v), hexX + c * 3 * charW, y);
          ctx.fillText(String.fromCharCode(v), asciiX + c * charW, y);
        }
      }
    }
  }

  var last = 0;
  var cur, nxt;
  function frame(now) {
    if (now - last >= STEP_MS) {
      last = now;
      cur = bufA;
      nxt = bufB;
      step(cur, nxt);
      render(nxt);
      bufA = nxt;
      bufB = cur;
    }
    requestAnimationFrame(frame);
  }

  setup();
  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(setup, 150);
  });
  requestAnimationFrame(frame);
})();
