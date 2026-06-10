---
layout: '../../layouts/BlogPost.astro'
title: 'The Conspiracy of Single-Page Applications, Part 3: Managed Databases'
description: 'JavaScript running on the server should have made us own more of our systems. Instead, managed databases trained builders to outsource data before they understood it.'
pubDate: 'March 29, 2026'
---

If single-page applications trained the browser to pretend it was a separate application, managed databases trained developers to treat persistence like a rented mystery.

And I think those two things are more connected than people admit.

Once frontend/backend separation became normal, the backend stopped feeling like an application you owned and started feeling like a collection of services you assembled.

So auth became a service.
Storage became a service.
Queues became a service.
The database became a service.

Not because developers suddenly became incapable of understanding databases.
But because the ecosystem learned to market ordinary engineering work as operationally scary enough to outsource by reflex.

That is the third conspiracy.

JavaScript finally got to run outside the browser, and instead of using that moment to reunite application logic, data modeling, and deployment under one roof, the ecosystem used it to multiply vendors.

A language that could have owned more of the stack got trained to rent more of the stack.

## Managed databases are the auth-as-a-service of persistence

The sales pattern is almost identical.

Take something important.
Emphasize the hard parts.
Mention security, scale, backups, HA, branches, replicas, failover, egress, and all the ways things could go wrong.
Then position the rented version as the responsible version.

I understand why this works.
Databases are serious.
Data loss is serious.
Restore procedures are serious.

But serious work and automatic outsourcing are not the same thing.

A young product with one ordinary web app, one PostgreSQL database, and one modest amount of traffic is not necessarily helped by being socially trained to treat the database as a managed artifact they should barely touch.

Very often, that move does not remove complexity.
It relocates complexity into pricing, vendor dependence, restore assumptions, and migration pain.

That is why [The PlanetScale CEO Said I Don't Value My Time. Here's My $22/Month Server Running 4 Apps.](/blog/planetscale-ceo-22-dollar-server) and [Free Credits And Usage-Based Pricing Are The Softest Kind Of Lock-In](/blog/free-credits-are-not-generosity) mattered to me. Those posts were never just about cost. They were about who gets to define what "sensible engineering" means.

## The promise is convenience. The reality is a pricing and dependence model.

To be fair, managed databases offer real convenience.
Provisioning is easier.
Dashboards are polished.
Replication stories are prepackaged.
Some operational sharp edges really do go away.

But those benefits are not free.
And they are not neutral.

The pricing pages tell on the model if you read them carefully.

[PlanetScale's startup messaging](https://planetscale.com/startups) promises no hidden costs and pay-as-you-go. Their [pricing docs](https://planetscale.com/docs/postgres/pricing) make clear that branches are billed separately and network egress beyond included amounts is billed per GB.

[Supabase's pricing](https://supabase.com/pricing) sounds straightforward until you read the [billing docs](https://supabase.com/docs/guides/platform/billing-on-supabase), the [compute docs](https://supabase.com/docs/guides/platform/manage-your-usage/compute), and the [spend cap docs](https://supabase.com/docs/guides/platform/spend-cap), and realize that the legibility people imagine is often much blurrier in practice.

[Neon's pricing](https://neon.com/pricing) packages the story as free to start and usage-based as you grow, while its [startup program](https://neon.com/blog/startup-program) makes it clear that the largest credit story is for companies already in the venture pipeline.

[Railway](https://docs.railway.com/pricing) and [Vercel](https://vercel.com/pricing) extend the same emotional pattern more broadly. Credit, subsidy, startup perks, then on-demand billing once the experiment becomes your life.

This is why I keep saying the issue is not that managed pricing always spikes.
The issue is that it introduces forecasting risk and dependency at exactly the stage where most founders should be optimizing for legibility.

An owned box has a floor you can understand.
A rented service often has a floor, a metering logic, a soft subsidy, and a future you are expected not to think too hard about.

![Managed database dependency map](/post-images/spa-conspiracy-managed-db-dependency-map.png)

## Once you outsource the database, you start outsourcing confidence too

This is the part people do not say out loud.

A lot of developers do not just rent infrastructure.
They rent confidence.

They stop learning the restore process because they assume the platform has it handled.
They stop understanding connection limits because the platform is abstracting the cluster.
They stop thinking clearly about backup frequency, cost envelopes, and migration exits because the dashboard is so comforting.

Then when something goes wrong, they do not have less anxiety.
They have less leverage.

That is why I have always found the self-hosting vs managed debate to be framed too shallowly.
People talk about effort as if the question is simply "do you want to work hard or not?"

The better question is:

**where do you want the unavoidable complexity to live?**

Do you want it in operational literacy you can build over time?
Or do you want it in vendor behavior, pricing surprises, support latency, and migration deadlines you do not control?

That tradeoff is often hidden beneath the polished friendliness of managed infrastructure marketing.

## The irony is that JavaScript should have made this easier, not harder

This is where the bigger series argument matters.

When JavaScript became a serious server-side language, it should have made full-stack ownership easier.
Same language.
Same team.
Same app.
Same mental model.

Instead, the ecosystem drifted toward service shopping.

Part of that is cultural.
The JavaScript ecosystem has a fragmentation instinct.
I said as much in [Every Few Months The JavaScript Ecosystem Pretends It Just Invented Rails](/blog/javascript-ecosystem-amnesia). When a coherent full-stack framework gets strong, it reduces how many things you need to buy, integrate, and mentally finance. That is good for developers. It is not always good for the surrounding tool market.

Managed databases fit perfectly into that surrounding market.
They let application concerns leave the application.
They let cost move out of the codebase and into a dashboard.
They let dependency feel like maturity.

And because the browser/server split had already trained people to think in services, this move felt normal.

It should not have.

## Sails and Slipway point in the opposite direction

This is why Sails and Slipway matter so much in this conversation.
Not just because they are cheaper.
Because they reassert ownership.

With [Sails.js](https://sailsjs.com/), the application still feels like an application.
Models are yours.
Policies are yours.
Actions are yours.
Sessions are yours.
The database story can still be yours too.

With [Slipway](https://docs.sailscasts.com/slipway/), the deployment and database layer stay close to the app instead of drifting into five vendors and a support queue. You get Dockerized deploys, backups, observability, and a calmer self-hosted production story without pretending you need a platform tax before you have product certainty.

And the part that really matters for this series is [Dock](https://docs.sailscasts.com/slipway/), because Dock brings us right back to the migration question.

I argued in [Migration Files Are Useless](/blog/migration-files-are-useless) that migration-file culture often creates three sources of truth:

- the model,
- the migration history,
- the live database.

That drift is one reason developers grew to love systems with looser schema pressure.
It is one reason MongoDB felt liberating to so many teams. You did not have to perform migration liturgy every time you wanted the model to evolve.

So let us say something a lot of relational-database discussions refuse to say.

One reason MongoDB became beloved was that developers do not actually enjoy migration friction.
They do not enjoy ceremony for its own sake.
They do not enjoy a giant stack of historical SQL paperwork just to make the current schema legible.

That emotional truth matters.

What Dock and schema diff do is bring some of that desired ease back to relational work without giving up the power of PostgreSQL.

The model expresses intended truth.
Source control captures reviewed truth.
The live database expresses current truth.
Then the system computes the difference.

That is a much saner relationship with the database than either blind migration worship or fully schemaless drift.

![Model truth to live database diagram](/post-images/spa-conspiracy-model-truth-to-live-db.png)

## Predictability is underrated developer experience

This is the line I wish more people would take seriously.

Predictability is developer experience.

A [Hetzner cloud server](https://docs.hetzner.com/cloud/billing/faq) with a monthly cap and clear traffic policy gives you a cost model you can reason about.
A self-hosted PostgreSQL instance on that box gives you a database you can back up, restore, inspect, and migrate without asking a startup's pricing team for permission.

That is not caveman infrastructure.
That is legibility.

And legibility matters more than the ecosystem likes to admit, especially for builders working under real cost constraints.
That is why [The DID Problem](/blog/the-did-problem) and [Build Globally, Price Locally](/blog/build-globally-price-locally) keep coming back to the same theme. Good engineering for many founders is not just about shipping the feature. It is about shipping the feature inside a cost and ownership model that the business can survive.

Even [Werner Vogels' frugal architecture framing](https://www.infoq.com/news/2023/12/frugal-architect-werner-vogels/) points in this direction. Cost is a non-functional requirement.
And [DHH's cloud exit write-up](https://world.hey.com/dhh/our-cloud-exit-savings-will-now-top-ten-million-over-five-years-c7d9b5bd) says the quiet part out loud: the cloud story can become a complexity tax rather than a simplification story.

The same is true for managed databases.

## To be fair, managed databases are not always the wrong choice

There are situations where a managed database is the sane decision.

If you have strict compliance requirements, global replicas, difficult HA demands, multi-region failover expectations, or a team whose attention is truly more expensive than the managed premium, then yes, buying that service can be wise.

If you are at a stage where database operations are genuinely a bottleneck and you have the revenue to match the comfort, fine.

I am not trying to turn self-hosting into a religion.

I am trying to stop managed database usage from masquerading as the only modern or responsible default.

For many young products, it is not.

For many young products, the more honest move is:

- one box,
- one Postgres,
- known backups,
- known restores,
- known deployment path,
- known migration logic,
- known monthly cost.

That is not less serious.
It is often more serious because it forces comprehension.

![Pricing and credits funnel](/post-images/spa-conspiracy-managed-db-pricing-funnel.png)

## The real rule of thumb

Do not rent your database by reflex.

Understand what kind of product you are building.
Understand what level of operational burden you truly have.
Understand whether the convenience you are buying is worth the pricing model, the lock-in, and the loss of intimacy with one of the most important parts of your system.

If a managed database is solving a real high-order problem for you, use it knowingly.

If it is mostly solving fear, fashion, or the false feeling that renting is automatically more mature than owning, pause.

The rule of thumb is simple:

**Own the database by default until the real operational burden proves you should stop.**

JavaScript running on the server should have made that easier, not harder.
