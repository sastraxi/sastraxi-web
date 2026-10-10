---
title: The right number of constraints
description: Knowing when to stop planning and start building comes down to one question — are you under-constrained, over-constrained, or just right?
draft: true
---

<div class="ed-note">

Draft 2. Text with a dashed line on its left, or a dashed underline, is mine. Everything else is your dictation, cleaned up. Remove this box and the `ed-new` wrappers before publishing.

</div>

One important skill in software development is determining whether you have the right number of constraints. This is not a new concept. I want to take the idea of planning in software development as an example.

## From planning to action

There are many different types of planning:

- traditional waterfall
- agile
- Shape Up

There are all sorts of different ways of managing a software development project, but the key thing in all of them is when we decide to transition from planning to action. Each has a different number of these transitions.

Some, like waterfall, go straight from planning. Waterfall is the idealized version, right? It has probably never once happened. You go through and do all the planning, and then you execute to the spec that you built. You only have one decision point, and that's: have we figured it all out?

## The agile I've seen

I'm talking about the agile that I've seen, which I have no idea how it compares to the agile out there and the agile that others have seen. The agile I've seen is about project kickoffs and planning sessions between the trifecta of a designer, a product manager, and an engineering lead. Once the problem has been defined — or they'll help define the problem sometimes, but usually that's the product manager's job — they go between them to figure out how to start. They then come up with the plan as they go. It's the classic "building the airplane while we're flying it."

In any case, what I'm trying to say is that they have kind of a continuous planning process, and it's split between those that execute and those that plan. It doesn't have to be, but it often is. The engineering lead is going to be executing as well, so that engineering lead has a question they have to ask themselves: "Am I ready to start programming something?" It's an undefined spot in this entire process, and this person has to contend with when it's time to move on to actually developing the software.

How do they decide this? How do we decide in waterfall? When do we decide that we should stop executing and go back to planning, because something has gone wrong or we no longer have confidence in our plan?

## Confidence is a proxy for constraints

My pitch — or at least the way I've been thinking about this lately — is that confidence is a proxy for your constraints. If you hit a massive blocker, you know that you are over-constrained, and you need to stop and think about things.

On the other hand, there's being under-constrained, and I think this is where most projects live. They leave the health of the project to the health of the conversation between those that are implementing it and those that are trying to understand and build a certain experience for people. If it's an API, that's other developers. If it's a website, it's its users — basically the end users of the product being built.

The question is: does this keep fitting what we need to get out of this project, what we've aimed to do, based on the business context? That's the framing we've got. We've got these constraints, and the decision a developer has as they develop something is whether they are under-constrained, over-constrained, or perfectly well-constrained.

## The stream in the middle

There's kind of a stream in the middle of this that's probably different for every single implementer, based on their experience, their skill level, and basically any number of factors.

If you're not inside of that comfort zone in the middle — if we're over-constrained — we can't get anything done. We don't have a server to run it on. We haven't gotten a security audit back, and we can't proceed with the rest of the project. Infrastructure hasn't been provisioned. Anything can come up: the library we were using doesn't quite support our use case, or the code we're adding is increasing the blast radius to the point where we have to put our hands up and say, "Oh my God, the scope is blowing up, and we no longer think we'll be able to get it done in time." In every case, your actual development of the software is constrained by the context you're developing it in.

## Pruning the tree

One of the best developers I've worked with always describes meetings the same way: "I'm just trying to prune my decision tree to get to the right one." That's how he thinks about constraints. He knows it's bullshit to try to brute-force the answer.

I think every programmer has felt this: they get impatient, they just start programming, and they realize they underthought the architecture. Now granted, I think the opposite is usually more true — that they've overthought their architecture — but that's just the pendulum swing of correction, right? You start by not understanding, then you go "Oh my God, everything's so complicated," and then you try to create a complicated solution. What we're really all trying to do is create the simplest possible solution that's maintainable.

## "I think I see it now"

At the start of a project, you might be completely under-constrained, because you don't know exactly what you're trying to do — and obviously you don't start developing right at the start of the project. As you define things, conversing with the product manager and the designer, there's a point where you think, "Oh my God, I think I see it now."

It's at that point that you've found all the constraints you need to actually build the application. You have enough confidence in the code you're putting in, enough understanding of the codebase, and enough understanding of the project. That's where you have the right number of constraints, and that's where you go.

<div class="ed-new">

## Not every constraint is a fact

Constraints aren't only technical. The appetite we set for a project or a phase is one: that's Shape Up's word for how much time we're willing to spend before we stop. So is the number of hours in a day, and the number of people you can get into a room this week. A security audit, an unprovisioned server, and a missing library feature all sit on the same list as a date somebody picked.

Some of these are facts about the world. Others represent someone's will: a deadline chosen because it sounded right, a requirement nobody can trace back to a user, a "we don't do it that way here." Those can be challenged. Sometimes challenging one is the fastest way out of being over-constrained, and you only find it if you've learned to see it as a constraint rather than as the weather.

It works the other way too. When you're under-constrained, a constraint is a gift. An appetite turns "build the best version of this" into "build the best version of this in six weeks," and that alone prunes most of the tree.

</div>

## The same skill, somewhere else

I believe prompting an LLM is a similar endeavour. At every moment, you need to get into that stream between over- and under-constraint for the problem you're trying to solve. It's about steering the LLM, and about looking things up through it. It's about being a good pilot, essentially. You're trying to navigate the space, and the way you do that is by pruning branches<span class="ed-new"> — the same decision tree, in a different room</span>.

Here's my superstition. The model is trying to rationalize the world that exists based on what you've told it. It's generating tokens based on that, so if something appeared in the text, that's the ground truth for the model. You put something in the text, and it's like: okay, what text comes after this, in a document that has that text in it? So if you're wrong as a user, and you argue with it for three or four messages before deciding the code was fine after all, you've gone down a path that doesn't make sense anymore. It would be like reading a textbook that did that.

When you over-constrain a project, you pull the cord and say, "Hey, something's wrong. We're not going to hit our delivery." If you over-constrain an LLM, you can go back to before it got constrained in that way. That's why forking and rewinding are so useful: all we really need is the answer from another place, given at the same high level we're operating at.

<div class="ed-new">

That's not the only difference between the two. Time moves differently: a wrong turn on a project costs weeks, and in a conversation it costs minutes. There's one human involved instead of a dozen. Changing course doesn't mean interrupting everyone to get them into a meeting and figure out what's next. But you're asking the same question in both places: too few constraints, too many, or the right number?

</div>

<div class="ed-note">

You called this a superstition, and there's support for it. Laban et al. (2025), "LLMs Get Lost In Multi-Turn Conversation," found that models do worse when a task arrives over many turns, and recommended starting fresh with the context consolidated. It could be one linked sentence if you want it. Check the paper before quoting any numbers.

</div>

<div class="ed-new">

Go looking for constraints: in the code, on the calendar, in the room. Challenge the ones that are only someone's will. The rest you'll meet either way.

</div>
