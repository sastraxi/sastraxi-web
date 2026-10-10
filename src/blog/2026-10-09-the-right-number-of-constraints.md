---
title: The right number of constraints
description: Knowing when to stop planning and start building comes down to one question — are you under-constrained, over-constrained, or just right?
draft: true
---

<div class="ed-note">

Dashed left border = Claude's words. Remove before publishing.

</div>

One important skill in software development is determining whether you have the right number of constraints. This is not a new concept. I want to take the idea of planning in software development as an example.

## From planning to action

There are all sorts of different ways of managing a software development project — waterfall, agile, Shape Up — but the key thing in all of them is when we decide to transition from planning to action. Waterfall is the idealized version, right? It has probably never once happened. You do all the planning, then you execute to the spec, and you only have one decision point: have we figured it all out?

The agile I've seen is a continuous planning process between the trifecta of a designer, a product manager, and an engineering lead. It's the classic "building the airplane while we're flying it." The engineering lead is going to be executing as well, so they have a question they have to ask themselves: "Am I ready to start programming something?" It's an undefined spot in this entire process.

How do they decide this? When do we decide that we should stop executing and go back to planning, because something has gone wrong or we no longer have confidence in our plan?

## Confidence is a proxy for constraints

My pitch — or at least the way I've been thinking about this lately — is that confidence is a proxy for your constraints. If you hit a massive blocker, you know that you are over-constrained, and you need to stop and think about things. On the other hand, there's being under-constrained, and I think this is where most projects live. The decision a developer has as they develop something is whether they are under-constrained, over-constrained, or perfectly well-constrained.

## The stream in the middle

There's kind of a stream in the middle of this that's probably different for every single implementer. If you're not inside of that comfort zone — if we're over-constrained — we can't get anything done. We don't have a server to run it on. We haven't gotten a security audit back, and we can't proceed with the rest of the project. Infrastructure hasn't been provisioned. Anything can come up: the library we were using doesn't quite support our use case, or the code we're adding is increasing the blast radius to the point where we have to put our hands up and say, "Oh my God, the scope is blowing up, and we no longer think we'll be able to get it done in time." In every case, your actual development of the software is constrained by the context you're developing it in.

## Brute force?

One of the best developers I've worked with put it this way: "I'm just trying to prune my decision tree to get to the right one." That's how he thinks about constraints. He knows it's bullshit to try to brute-force the answer.

I think every programmer has felt this: they get impatient, they just start programming, and they realize they underthought the architecture. Now granted, I think the opposite is usually more true — that they've overthought their architecture — but that's just the pendulum swing of correction, right? You start by not understanding, then you go "Oh my God, everything's so complicated," and then you try to create a complicated solution. What we're really all trying to do is create the simplest possible solution that's maintainable.

## "I think I see it now"

At the start of a project, you might be completely under-constrained, because you don't know exactly what you're trying to do — and obviously you don't start developing right at the start of the project. As you define things, conversing with the product manager and the designer, there's a point where you think, "Oh my God, I think I see it now."

It's at that point that you've found all the constraints you need to actually build the application. You have enough confidence in the code you're putting in, enough understanding of the codebase, and enough understanding of the project. That's where you have the right number of constraints, and that's where you go.

<div class="ed-new">

## Constraints prune the tree

Every constraint cuts branches off the tree, and not all of them are technical. A security audit, an unprovisioned server, and a library that doesn't fit sit on the same list as the hours in a day, the people you can get into a room this week, and the appetite we set for a phase: Shape Up's word for how much time we're willing to spend.

Some of those are facts. Others represent someone's will: a deadline chosen because it sounded right, a requirement nobody can trace back to a user, a "we don't do it that way here." They prune just as hard, but they can be challenged. When you hit a wall, find out which kind it is before you accept it.

## A constraint is a gift

Under-constrained, you don't need more information so much as fewer options. An appetite gives you that. "Build the best version of this" becomes "build the best version of this in six weeks," and most of the tree falls away. The hours in a day do the same: you can't try everything, so you have to choose.

</div>

## The same skill, somewhere else

I believe prompting an LLM is a similar endeavour: you're navigating a space by pruning branches. The model is trying to rationalize the world based on what you've told it, so if you argue with it for three or four messages before deciding the code was fine after all, that detour is still part of its world. It would be like reading a textbook that did that. When you over-constrain a project, you pull the cord and say, "Hey, something's wrong." If you over-constrain an LLM, you can go back to before it got constrained in that way.

<div class="ed-new">

Go looking for constraints: in the code, on the calendar, in the room. Challenge the ones that are only someone's will. The rest you'll meet either way.

</div>
