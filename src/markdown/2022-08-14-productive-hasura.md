---
slug: "/blog/productive-hasura"
date: "2022-08-14"
title: "How to be productive with Hasura"
status: "draft"
---

Hasura is the best of the “appliance” apps that expose your SQL database over GraphQL. It’s well-suited to the developer who thinks schema-first and has many options for integrating custom code alongside the built-in resolvers.

This article aims to guide the reader through building a backend application with Hasura acting as the primary interface for the frontend. To do so, we’ll consider some of the ways Hasura would fall short of being a production-ready solution on its own and explore some of the paths-of-least resistance towards achieving our goal. 

## Principles
* Schema-first design
* Single source of truth
* Avoid reinventing the wheel
* High performance

## Initial setup
The most straightforward and powerful way to use Hasura is to create an HTTP server using your preferred programming language and paradigm. This server will cooperate with Hasura, providing the custom logic that we extends the basic CRUD functionality of our GraphQL appliance. 

In configuring Hasura, I suggest the following:
* Add an admin secret, unless your API is meant to be completely open and is somehow resistant to vanpinions on the ion"></a>
While Hasura is opinionated on authorization (using its own RLS-like domain specific langauge based on JSON), it has few opinions on exactly how you identify your users. Assuming you’re building an app that requires login, let’s consider a two different ways we could authenticate users, starting with a simpler but less-flexible approach. 

### Firebase Auth (JWT)
When you want…
Downsides are a lack of connected login providers and 

### Local Auth (JWT or Cookie-based)
Creating an auth endpoint on your server is a powerful way to authenticate users on. A timeout can be specified (and perhaps even extracted from the JWT, if used) to increase performance, if this has been identified as an issue during profiling. 

It’s probably best to just call the x-hasura-role “user”.

> ### Aside: queries and mutations as “admin”
> You’ll notice there is a default admin role on each table. Queries made through the console 

## Authorization (read)
Basically, start by creating permissions for the “user” role on each table. A good practice is to first create this role for each table with a deny all approach. (TODO: can Hasura do this for us?). 

These authorization primitives work the same way for subscriptions as they do for queries. 

## Authorization (write)
### Constraining insert values
We can add custom permauthorizations in your database, e.g. if we were building a blog, we might gate changes to an article row by the presence of a tuple in the article_author table that matches the article and the currently logged-in user’s id.

We can even restrict the domain of values allowed for a given field, e.g. allowing users to use the built in update mutation for 

### Actions and “backend-only” mutations
In some cases, the expressivity of the Hasura permissions system will not be enough for your needs. You may need to prevent the creation, deletion, or update of database rows based on custom logic. For example, you might want to make a call to a third party API to

In these cases, we can tell Hasura to block access to built-in queries and mutations from regular clients by marking them as backend-only. These “documents” can then only be used by Hasura sessions that were made using the “admin secret” and not regular clients passing in a JWT or cookie.

In addition, you may want to create an action to avoid a roundtrip between the frontend and backend in case you need to run a mutation after another query (or mutation), but do not need 

## The Hasura event system
The right way to do a lot of things when using Hasura as the main interface for your backend app is to think about things in terms of events.

## GraphQL code generation
This section relates less to Hasura specifically and more to GraphQL as a whole.

- pre-defined queries at "compile time"
- typed document node
- urql
- if you might need to 

## Allowlists and rate limiting
Blah blah blah


