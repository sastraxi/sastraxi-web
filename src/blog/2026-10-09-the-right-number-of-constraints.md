---
title: The right number of constraints
description: Knowing when to stop planning and start building comes down to one question — are you under-constrained, over-constrained, or just right?
draft: true
---

One important skill in software development is determining whether you have the right number of constraints.

This is not a new concept. I want to take the idea of planning in software development as an example.

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

My pitch — or at least the way I've been thinking about this lately — is that confidence is a proxy for your constraints.

If you hit a massive blocker, you know that you are over-constrained, and you need to stop and think about things. On the other hand, there's being under-constrained, and I think this is where most projects live. They leave the health of the project to the health of the conversation between those that are implementing it and those that are trying to understand and build a certain experience for people. If it's an API, that's other developers. If it's a website, it's its users — basically the end users of the product being built.

The question is: does this keep fitting what we need to get out of this project, what we've aimed to do, based on the business context? That's the framing we've got. We've got these constraints, and the decision a developer has as they develop something is whether they are under-constrained, over-constrained, or perfectly well-constrained.

## The stream in the middle

There's kind of a stream in the middle of this that's probably different for every single implementer, based on their experience, their skill level, and basically any number of factors.

If you're not inside of that comfort zone in the middle — if we're over-constrained — we can't get anything done. We don't have a server to run it on. We haven't gotten a security audit back, and we can't proceed with the rest of the project. Infrastructure hasn't been provisioned. Anything can come up: the library we were using doesn't quite support our use case, or the code we're adding is increasing the blast radius to the point where we have to put our hands up and say, "Oh my God, the scope is blowing up, and we no longer think we'll be able to get it done in time."

In every case, your actual development of the software is constrained by the context you're developing it in.

## "I think I see it now"

At the start of a project, you might be completely under-constrained, because you don't know exactly what you're trying to do — and obviously you don't start developing right at the start of the project. As you define things, conversing with the product manager and the designer, there's a point where you think, "Oh my God, I think I see it now."

It's at that point that you've found all the constraints you need to actually build the application. You have enough confidence in the code you're putting in, enough understanding of the codebase, and enough understanding of the project. That's where you have the right number of constraints, and that's where you go.

<div class="ed-note">

You end the planning half here with "That is the traditional table setting." I've used it as the bridge into the next section instead of keeping it as a closing line. You also ask "How do we decide in waterfall?" but never answer it for waterfall in particular. You could add a sentence here: in waterfall, you're betting that you can find every constraint up front.

</div>

## Prompting is the same game

That's the traditional setting. What I want to get into next is that I believe prompting an LLM is a similar endeavour. At every moment, you need to get into that stream between over- and under-constraint for the problem you're trying to solve.

I'm talking about prompt steering. To get at the information, you're basically beaming a light into a massive multidimensional quartz crystal, and the light is refracting. You have to figure out exactly what you're trying to light up: a certain part of this massive language model brain, for lack of a better way of saying it. You need to figure out exactly where in that model your target is.

<div class="ed-note">

**Trailing off here.** Your last two sentences, verbatim:

"That's what you're trying to do: you're trying to carve out the code that lives there after you constrain it to a certain number of choices. Using that effectively has a lot to do with managing and leading a project effectively."

The second sentence is the thesis that ties the post together. Prompting well and leading a project well are the same skill. The first sentence still needs work. This is where your next dictation should pick up.

</div>
