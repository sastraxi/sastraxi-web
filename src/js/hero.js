/* Animated "hacker" hero — decorative, aria-hidden.
   Progressive enhancement: if it can't run (no JS, reduced motion), the static
   ASCII banner in the markup stays visible instead. */
(function () {
  "use strict";

  var canvas = document.getElementById("hero");
  if (!canvas || !canvas.getContext) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Honour reduced-motion: keep the static ASCII fallback, don't animate.
  if (reduce) return;

  // Reveal the canvas / hide the static fallback.
  document.body.classList.add("js-hero");

  var ctx = canvas.getContext("2d");
  var GLYPHS = "01<>[]{}/\\|=+*-_.:abcdefABCDEF$#%&".split("");
  var FONT = 14; // px, logical
  var dpr = Math.max(1, window.devicePixelRatio || 1);
  var cols = 0;
  var drops = [];
  var width = 0;
  var height = 0;

  function accent() {
    var c = getComputedStyle(document.documentElement).getPropertyValue(
      "--accent"
    );
    return (c || "#00ff9c").trim();
  }
  function bg() {
    var c = getComputedStyle(document.documentElement).getPropertyValue("--bg");
    return (c || "#0a0a0a").trim();
  }

  function resize() {
    width = canvas.clientWidth || canvas.offsetWidth || 900;
    height = parseInt(getComputedStyle(canvas).height, 10) || 160;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = FONT + "px monospace";
    ctx.textBaseline = "top";

    cols = Math.max(1, Math.floor(width / FONT));
    drops = [];
    for (var i = 0; i < cols; i++) {
      drops[i] = Math.floor((Math.random() * height) / FONT) * -1;
    }
    // paint an initial background so the first frames aren't transparent
    ctx.fillStyle = bg();
    ctx.fillRect(0, 0, width, height);
  }

  function rand(arr) {
    return arr[(Math.random() * arr.length) | 0];
  }

  var last = 0;
  var STEP = 1000 / 18; // ~18fps is plenty for this effect

  function frame(now) {
    if (now - last >= STEP) {
      last = now;

      // translucent fade to leave fading trails
      ctx.fillStyle = bg() + ""; // ensure string
      ctx.globalAlpha = 0.12;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;

      var a = accent();
      for (var i = 0; i < cols; i++) {
        var x = i * FONT;
        var y = drops[i] * FONT;

        // bright leading glyph
        ctx.fillStyle = a;
        ctx.fillText(rand(GLYPHS), x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    }
    requestAnimationFrame(frame);
  }

  resize();
  var t;
  window.addEventListener("resize", function () {
    clearTimeout(t);
    t = setTimeout(resize, 150);
  });
  requestAnimationFrame(frame);
})();
