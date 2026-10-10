---
title: The right number of constraints
description: Every constraint prunes your decision tree. Execute when you have the right number of them.
---

An important skill in software development is determining whether you have the right number of constraints. [This is](https://sookocheff.com/post/architecture/innovation-with-constraints/)[^sookocheff] [not a](https://spin.atomicobject.com/constraints-good-custom-software/)[^kelch] [new idea](https://dev.to/mjodeh/the-hidden-cost-of-starting-development-too-early-1hgj)[^jodeh].

Every way of running a project — e.g. waterfall, agile — has moments where we transition from planning to action. Waterfall, at least the idealized version, has exactly one decision point: have we figured _everything_ out? The "agile" pratcies I've seen are much more haphazard with these moments, determined by the engineering lead who is planning alongside a designer and a product manager while also executing.

A seasoned engineer asks "what's defined enough to implement?" constantly. This runs in reverse too: when do we need to stop and go back to planning, because we no longer have confidence we can execute?

I've been toying with the idea that this confidence is a proxy for the project's constraints. Too few, and you're lost: too much is possible, so nothing is obvious, and I think this is where most projects spend most of their time. With too many constraints, you've hit a wall: the library doesn't quite support your use case, or the blast radius grows until you're putting your hands up and pulling the "scope is blowing up" cord.

Somewhere in the middle there's a space of low turbulence where execution feels close to effortless.

## Under-thinking, over-thinking

One of the best developers I've worked with put it this way: "I'm just trying to prune my decision tree to get to the right one." He knows it's bullshit to try to brute-force the answer.

I think every programmer has experienced this: impatient, they just start programming, only to realize later that they underthought the architecture. Granted, I think the opposite is usually more true — that we _overthink_ our architectures — but that's just the pendulum swing of correction, right? A developer new to a project or a technology begins by not understanding it, then passes through the cloud of "everything's so complicated! The solution must be as well!"

Ultimately, what we're all trying to do is create the simplest possible solution that's maintainable. That solution is a lot easier to arrive at when you've spent the right amount of time narrowing down the solution space.

## Constraints prune the decision tree

Every constraint cuts branches off the tree (closes off parts of the solution space). A security audit "speed bump", missing infrastructure, a teammate still wrapping up another project. What can you do _now_ with what you've got? Which branches do you suspect will ultimately be fruitless? How likely is each path to lead you to an eventual "leaf" that fits your specifications?

Some of those are objective truths about the solution space. Others represent someone's will: a deadline chosen because it sounded right, a requirement nobody can trace back to a user, a "we don't do it that way here." They prune just as hard, but they can be challenged. When you hit a wall, find out which kind it is before you accept it.

When you're under-constrained, you don't need _more_ information so much as _fewer options_. Shape Up's [appetite](https://basecamp.com/shapeup/1.2-chapter-03#setting-the-appetite) gives you that, as does the number of hours in a day. Maybe there's prior art to look at, or development principles to adhere to.

## Constraints are a gift

Take a third-party provider. Choosing one up front prunes a huge part of the tree, and that's exactly why companies go all-in on a cloud platform: there's a golden path, and most of the decisions are already made. But the same choice can turn into a wall the moment the provider doesn't quite support what you need. Same constraint, different moment. This is what a proof of concept is for: a bit of knowledge up front tells you whether you're pruning toward a leaf or toward a dead end.

If it's a dead end, congratulations: you just pruned a branch.

## Aside: Parametric memory as a space

Prompting an LLM feels similar to me: a conversation navigates the model's learned knowledge space, pruning branches every time you send a message.

The model is trying to rationalize the world based on what you've told it, so if you argue with it for three or four messages before deciding "that code was fine after all", that detour is still part of its world (imagine a textbook that argued with itself for three pages, then said "never mind!").

The fix for LLMs is to rewind the conversation: go back to before the bad constraint went in, and navigate again from there. In the real world, undoing decisions is much more costly and full of friction.

## The slipstream

Some time after a project kicks off, there's a moment where you think, "I see it now." You've found the constraints you need: clarity on the user journeys you need to support, a forgotten spike document from years before, the limits of the technologies you've chosen, the relevant sharp edges of your existing codebase, and a stable business context. That's the right number of constraints, and the right time to start developing.

Make a practice of checking in during execution. If you're lost, go find more constraints. If you've hit a wall, find out whose it is.

[^sookocheff]: Kevin Sookocheff, [Innovation with Constraints](https://sookocheff.com/post/architecture/innovation-with-constraints/), 2019.
[^kelch]: Dan Kelch, [Constraints Are Necessary When Building Custom Software](https://spin.atomicobject.com/constraints-good-custom-software/), Atomic Object, 2021.
[^jodeh]: Mohammad Jodeh, [The Hidden Cost of Starting Development Too Early](https://dev.to/mjodeh/the-hidden-cost-of-starting-development-too-early-1hgj), DEV Community.
