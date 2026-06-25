---
layout: '../../layouts/BlogPost.astro'
title: 'Delete Your Staging Environment And Push Straight To Production'
description: 'Staging was supposed to reduce risk. In many teams it became risk inventory. The serious path is small changes, automated safety, production observability, and fewer fake gates.'
pubDate: 'June 25, 2026'
heroImage: /covers/delete-your-staging-environment.png
---

Every software team eventually discovers a dangerous middle state: the work looks finished, the ticket looks done, the demo looks good, but the customer still cannot use it.

The pull request has been reviewed. CI is green. The staging link has been dropped in Slack. The product manager has clicked through the happy path. The designer has approved the screen. Someone has moved the card to Done because, from the team's point of view, the work feels done enough to stop thinking about it.

That wait can be QA, the next release train, a broken staging environment, another team using the same shared environment, or the person who is allowed to press the production button sitting in a meeting.

Nothing dramatic happens during that waiting period, which is why teams underestimate it. But the waiting period is not empty. Context decays. Risk accumulates. Other work stacks on top of the change. The team slowly converts a small deployment into a larger one, then treats the larger deployment as the safer option.

The Twelve-Factor App's [dev/prod parity](https://12factor.net/dev-prod-parity) names the first wound: the time gap. Code can spend days, weeks, or months between development and production, while the people, tools, and backing services around it drift.

DORA's research on [working in small batches](https://dora.dev/capabilities/working-in-small-batches/) makes the same point from the delivery side: large handoffs delay feedback for weeks or months, while small batches make learning cheap enough to act on.

DORA's research on [trunk-based development](https://dora.dev/capabilities/trunk-based-development/) is blunt about the source-control version of this: long-lived branches create bigger merges, stabilizing work, code freezes, and more chances for bugs or regressions.

A long-lived feature branch and a long-lived staging change look different in the process chart, but they age in the same way. Both create a separate version of the product. The team keeps making decisions inside a version that customers cannot touch, production cannot validate, and the business cannot benefit from. By the time the work finally reaches production, the question is no longer "does this change work?" It is "what else changed while we were waiting?"

That is the state I mean when I say delete your staging environment and push straight to production. Not because production needs less care, but because finished work should not spend days aging in a place customers cannot reach.

That sentence can sound like a Friday evening payments incident waiting to happen. It is not an argument for skipping tests, review, automation, or blast-radius control. It is an argument against staging environments that no longer reduce risk. They store it.

Staging was supposed to help teams rehearse dangerous work before customers saw it. In many teams, it has become a holding pen for work that is already written, already reviewed, already approved by everyone who can approve it, and still not creating value. A holding pen does not make software safer. It delays the moment when the system meets reality.

## The Gate Is Not The Safety

Some products need pre-production environments. A bank core migration, a medical workflow, a hardware integration, a regulated reporting system, a payroll run, a card issuing integration, or a high-risk data migration should not be treated like a copy change on a landing page.

Some work needs rehearsal. Some work needs load testing. Some work needs a production-shaped environment where the team can test the deployment path, data shape, permissions, infrastructure, and operational handoffs before the real event.

In [applying The Algorithm to software work](/blog/i-applied-elon-musks-the-algorithm-to-vibe-coding/), the order matters: question the requirement before you optimize the process around it. A mandatory staging gate is a requirement. If it cannot prove that it reduces risk better than small batches, automated checks, progressive rollout, and fast recovery, the requirement should be deleted.

The staging environment worth deleting is the one that every change must pass through because the organization cannot send merged code to production without another holding area. In that kind of company, staging is no longer a technical tool. It is a ritual. A small typo fix, a feature hidden behind a flag, a backend refactor, a migration, a designer's spacing change, and a payments bug fix all sit in the same queue because the process treats all risk as identical.

That is how a team ends up with a strange form of theater: everyone behaves as if moving code from a branch to staging has made the work safer, even when staging does not have production data, production traffic, production secrets, production queues, production third-party behavior, production browser weirdness, or production business consequences. The gate looks serious, so the organization treats the gate as evidence.

But the gate is not the safety. The delivery system is.

If staging helps you produce evidence about a specific risk, keep it. If staging is where work waits until the next human ceremony, it is hiding the real problem: merged code cannot move straight to production, tests miss too much, deploys are hard to roll back, observability is weak, and production is still where the first useful signal arrives.

## Almost Shipped Is Not Shipped

The most misleading phrase in many software teams is "it is on staging."

It sounds close to shipped. It gives the product team something to click, the engineering manager something to report, and the founder something to feel better about. It can even look like progress on the board. But customers cannot use "on staging." Revenue does not recognize "on staging." Production incidents are not prevented by the emotional comfort of "on staging." The system is either serving users or it is not.

This does not mean every piece of work should be visible to every user the moment it lands. Deploy is not the same thing as release. A team can deploy code to production while keeping a feature hidden behind a flag, a percentage rollout, an internal account allowlist, a tenant switch, or a business-rule gate. Production can hold finished technical work safely before the business decides how and when to expose it.

Staging often confuses those two ideas. It treats "not ready to release" as "not ready to deploy." Once that happens, the deployment pipeline becomes a product decision queue. Engineers wait for product approval before production receives a harmless hidden change. Product waits for QA before a reversible change reaches the real system. QA waits for a stable shared environment. Everyone waits for everyone else, and the company calls that a process.

The better model is stricter and faster: code that cannot safely exist in production should not be merged; code that can safely exist in production should not be kept out of production for ceremony. That forces the team to name what safety actually requires.

Safety may require a test, a reviewer, a migration plan, a feature flag, a canary rollout, or a manual exploratory pass by someone with product taste and domain knowledge. It rarely requires every change to sit in a shared staging environment for two days so the process can record another checkpoint.

## The Problem Is Inventory

Software teams love talking about velocity and hate talking about inventory.

A change sitting in staging is inventory. It is work already paid for but not yet producing value. It is code somebody must remember. It is risk that has not been resolved. It is context that can go stale. It is a possible merge conflict with tomorrow's work. It is a promise that has not yet met the customer.

One waiting change is easy to ignore. Ten waiting changes become a queue everyone has to manage.

One feature is waiting for QA. One bug fix is waiting because staging is down. One migration is waiting because the release manager is out. One frontend change is waiting because another team deployed an incompatible backend branch to the shared environment. One payment fix is waiting because the sandbox provider behaves nothing like the production provider. One small refactor is waiting because the company releases on Thursdays.

By Thursday, the release is no longer one change. It is a bundle of unrelated work.

When that bundle breaks production, the team has to debug the bundle. Was it the migration, the queue worker, the config change, the UI flag, the new webhook path, the "safe" refactor, or the tiny hotfix someone added because the release was already happening anyway? The organization created the ambiguity through delay, then treats the ambiguity as proof that deployment is dangerous.

Deployment is not the only risk in that story. Batch size adds risk. Waiting adds risk. Shared mutable environments add risk. Manual coordination adds risk. The more work you hold back, the more unknown you send to production in one moment.

The practical move is smaller deploys, shorter waits, stronger observability, and a recovery path the team has actually practiced.

## Production-Shaped Is Not Production

Most staging environments are not production. They are production-shaped.

Software does not only fail because code is wrong. It fails because the code meets a real environment with real history. Production is where the neat story meets the messy one: real traffic, real data, real latency, customer impatience, concurrency, fraud attempts, browser extensions, time zones, third-party behavior, support pressure, and business consequence all arrive together.

A staging environment can simulate parts of that world, and sometimes that simulation is useful. But it cannot produce the same signal production produces.

The Twelve-Factor App argues for [dev/prod parity](https://12factor.net/dev-prod-parity) because environment gaps are not cosmetic. Time gaps, personnel gaps, and tools gaps change behavior. Different backing services, different data, and different operational assumptions create the kind of incompatibility where code passes before production and fails inside it.

Every experienced engineer has seen this in ordinary forms. Staging has smaller machines, cleaner data, fake users, weaker traffic, test secrets, different queues, different cache behavior, softer rate limits, and observability nobody checks at 2 a.m.

The [payment sandbox](https://docs.stripe.com/testing) approves cards production would reject. The email sandbox accepts payloads the real provider silently rewrites. The webhook simulator sends the happy shape, while the real integration sends the weird payload from a customer who changed settings three years ago.

That is the uncomfortable question for any team that treats staging as faux production: if the same code worked there, why did it break the moment it reached production? Usually because staging did not test production. It tested a smaller, cleaner story about production: the sandbox path, the friendly email payload, and the simulator's happy webhook, not the behavior the team was about to rely on.

Environment variables are a common hiding place. A team starts with reasonable intent: copy the production configuration shape into staging, remove the real secrets, point a few services at sandbox providers, and give QA somewhere safe to click around.

Six months later, nobody is quite sure why staging has a different Redis URL pattern, why the worker reads one payment webhook secret while the web process reads another, why the frontend points at the new API but the scheduled job still talks to the old sandbox, or why production has a stricter content security policy than the environment everyone used for approval.

Configuration is part of the system. When every environment has its own copy-pasted [env vars](https://12factor.net/config), feature flags, provider credentials, callback URLs, queue names, bucket names, and one-off exceptions, the team has created another codebase without calling it one.

There is no compiler for scattered environment state. There is usually no reviewer. There is often no test that says staging and production differ only where they are supposed to differ.

So the team tests the application and misses the deployment. The code worked in staging because staging had the friendly variable, the old secret, the looser policy, the fake provider, or the fallback setting that production no longer has. Then people blame the absence of enough testing, even though the failure was caused by the thing the testing environment quietly normalized.

Make configuration boring: validate environment variables at boot, fail loudly when required configuration is missing, centralize secrets properly, keep environment differences intentional, and run smoke checks that prove the deployed artifact can talk to the services production needs.

If direct production deploys scare a team because configuration is scattered and surprising, staging is not the cure. The cure is to stop treating configuration drift as an acceptable side effect of having more environments.

State makes the problem heavier. The Twelve-Factor App calls databases, queues, caches, SMTP providers, metrics systems, and binary asset services like S3 [backing services](https://12factor.net/backing-services). The application is not only the code running in a container. It is the code plus the resources attached to that deploy.

Production has the real database, real object storage, real queues, real cache patterns, real search indexes, real cron history, real failed jobs, real uploads, real deleted files, real permissions, real old rows, and real customers who have been using the system in ways nobody documented. Staging has a smaller copy, a seed script, a sanitized dump, or a database that was restored three weeks ago and then quietly mutated by QA.

State has memory. A migration that works on a staging database with 20,000 neat rows can lock or punish a production table with 200 million uneven rows, old indexes, stale statistics, long-running transactions, and strange historical data.

GitLab's docs on [avoiding downtime in migrations](https://docs.gitlab.com/development/database/avoiding_downtime_in_migrations/) make the point directly: avoiding downtime often means splitting destructive database work across releases and using background migrations for large tables rather than pretending one rehearsal proves the production path.

File storage has the same trap. A staging bucket with twelve friendly images is not the same thing as a production bucket with years of uploads, generated thumbnails, object metadata, lifecycle rules, CDN behavior, signed URLs, regional settings, object ownership rules, and permission policies. In Amazon S3, buckets, objects, keys, versions, policies, and regions are not decorative details. They shape system behavior.

Even when the storage service is strongly consistent for object reads and writes, that does not mean your application workflow is automatically atomic. S3 documents [strong read-after-write consistency for object operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html), but it also notes that concurrent writes to the same key use last-writer-wins behavior and that there is no atomic update across multiple keys unless you build that coordination yourself.

If your feature writes a database row, uploads a file, creates a thumbnail, pushes a job, updates a search index, and sends a webhook, staging is rarely proving the whole chain under production pressure.

That is why "we have a staging database" can become another comforting sentence. Which database? With what data volume? With what indexes? With what anonymization side effects? With what retention rules? With what extensions? With what read replicas? With what locks? With what backup and restore path? With what object bucket? With what queue backlog? With what cache churn? With what search index lag?

If the team cannot answer those questions, staging is a partial model of production, not a certificate of safety.

Direct-to-production does not make state casual. It forces state changes to become production-safe: backward-compatible database migrations, expand-and-contract schema changes, idempotent jobs, resumable backfills, careful object-key design, smoke checks for storage permissions, canaries for read/write paths, and observability around the stateful resources the change touches.

That beats clicking through a stale copy of production.

Werner Vogels made a related point years ago in an [ACM Queue interview about Amazon](https://queue.acm.org/detail.cfm?id=1142065). At Amazon's scale, testing is not simply a matter of creating another copy of Amazon with the same machines, customers, data, data centers, and traffic. Most teams are not Amazon, but the lesson travels: some failures only appear under real traffic.

The better "testing in production" argument is not "skip testing." Honeycomb's argument for [testing in production](https://www.honeycomb.io/blog/testing-in-production) starts from a practical problem: complex systems produce failures pre-production cannot show. Pre-production checks can catch known risks. Production observability helps you discover the unknown ones.

If a team uses staging to avoid building observability, staging has become a way to stay blind for longer.

## What The Best Teams Actually Changed

The industry moved toward faster delivery because large, delayed releases kept creating avoidable risk.

DORA's research on [trunk-based development](https://dora.dev/capabilities/trunk-based-development/) is useful here because it connects the shape of source control to delivery performance. High-performing teams keep branches short-lived, integrate into trunk frequently, and avoid long-running divergence.

DORA's work on [working in small batches](https://dora.dev/capabilities/working-in-small-batches/) makes the same operational point from another angle: smaller changes make feedback faster and problems easier to isolate.

Staging queues often recreate the problem of long-lived branches. Even if the code has merged, the organization has not integrated the change into the product customers use. It has moved the waiting from Git to an environment.

A long-running feature branch is not only bad because Git might produce a painful merge conflict. It is bad because the branch becomes a private copy of the product. The team keeps making decisions against code the rest of the product has already moved away from. The longer it lives, the more expensive integration becomes. Every rebase is a reminder that `main` kept moving.

A shared staging queue can create the same private copy with a more respectable name. The code is no longer on someone's laptop, so it feels integrated. But if it is not in production, not receiving real traffic, not watched by production alarms, and not subject to real customer behavior, it is still outside the deployed product. The team has only moved divergence from Git into the deployment process.

[GitHub Flow](https://githubflow.github.io/) expressed a similar instinct in a simple workflow: keep `main` deployable, branch for focused work, review, merge, and deploy. Risk should be managed through small changes and a fast path to production, not through a permanent holding area where code goes stale.

Etsy's old Code as Craft writing on the [quantum of deployment](https://www.etsy.com/codeascraft/quantum-of-deployment/) is another useful artifact from this movement. Etsy made deploys smaller and more routine because a deployment that happens rarely becomes an event, and events attract fear, ceremony, and batch size. A deployment that happens often can become an ordinary engineering operation.

Amazon pushed the lesson from another direction. The famous "you build it, you run it" idea put service teams closer to the consequence of their changes.

The AWS Builders Library article on [automating safe, hands-off deployments](https://aws.amazon.com/builders-library/automating-safe-hands-off-deployments/) is careful about pre-production validation, but its deeper lesson is that safety comes from automation, progressive rollout, bake time, alarms, and automatic rollback. The safety is designed into the delivery system.

The pattern was not fewer checks for its own sake. It was replacing late approvals with checks that run close to the change.

DORA's guidance on [streamlining change approval](https://dora.dev/capabilities/streamlining-change-approval/) is blunt about this. External approval boards and heavy manual approval processes tend to slow delivery without improving stability. Peer review, automated checks, and clearly owned changes produce better evidence than a committee that sees the change late and approves with less context than the people who reviewed it.

The lesson is smaller units of change, better signals, and recovery paths owned by the people shipping the work.

## Direct To Production Still Needs A System

Direct-to-production fails when the team has no tests, no review, no rollback plan, no metrics, and no ownership. That is just an incident with a shorter lead time.

The direct path is more demanding than the staging-heavy version because it removes the place where the team hides uncertainty. If you want to delete staging as a mandatory gate, you have to build a delivery system that can survive the shorter path.

Start with the branch that ships. `main` is the branch the deployment pipeline points at, so the team has to keep it deployable. That means required checks, useful tests, review standards, static analysis where it helps, migration discipline, and refusing to merge work that cannot safely exist in production.

Make changes smaller. A pull request should carry one idea where possible. If the business change is large, the technical path should still be sliced. Create the table before using it. Write the new path behind the old one. Add the flag before exposing the feature. Backfill in a controlled job. Read from both places before switching. Remove the old path after the new path is boring. The old release model delays risk. The better model reduces the size of each risk.

Separate deploy from release. [Feature flags](https://martinfowler.com/articles/feature-toggles.html) let production receive code before the business exposes behavior. But flags must be managed with discipline. A feature flag that lives forever becomes another branch, except now the branch is inside your runtime. Use flags for real rollout control and remove them when the decision is over.

Design migrations for production, not demos. A migration that locks critical tables, assumes empty queues, requires perfect timing across old and new code, or cannot be rolled forward safely is not made safe because it sat in staging. Database changes need expand-and-contract thinking, backward compatibility, backfills that can be paused, and clear recovery paths.

Treat observability as part of the feature. Logs, metrics, traces, dashboards, alerts, and business counters are not decorations after shipping. They are how the team knows whether production accepted the change. If a team cannot answer "what will we watch when this deploy goes out?" it is not ready to remove the gate.

Make ownership clear. The person or team that ships the change should know how to watch it, how to respond, how to roll forward, and when to page someone else. A release manager who moves bundles of other people's changes into production is often coordinating work they cannot debug. Ownership belongs closer to the people who understand the change.

Let incidents teach. If every production problem [turns into blame](/blog/do-you-want-it-done-or-checked-off/), people will protect themselves with more gates, larger buffers, and slower feedback. A team that wants fast production delivery has to discuss failure without blaming the person who touched the change last.

## Manual QA Should Not Be A Waiting Room

One of the worst things engineering teams do is turn QA into a human staging environment.

Good QA is not someone clicking through every obvious thing after engineers have mentally left the work. Good QA is judgment, exploration, domain memory, and the ability to notice that a change technically works but makes no sense for the user who will meet it under pressure.

That kind of QA is valuable, and it should be used where the risk calls for it. But when every tiny change waits for the same manual checklist, QA becomes a queueing department. The work piles up, testers are blamed for being slow, engineers stop owning obvious quality, and the company uses human attention to compensate for weak automation.

The better arrangement is sharper. Automate what should never require human judgment again. Let engineers own the quality of their own changes. Bring QA earlier for ambiguous product behavior, risky flows, migration rehearsals, accessibility concerns, and domain-specific edge cases. Use staging or preview environments when a human needs a place to inspect a real risk. Do not turn QA into the last checkbox for every deploy.

If a copy change cannot ship until QA opens staging and nods, the team has not built a release path for low-risk work. It is sending spelling fixes and payment changes through the same queue, then wondering why the queue is slow.

## Redundant Testing Is Not Discipline

Staging also makes teams repeat low-value checks in multiple places and call the repetition discipline.

The same happy path gets tested locally, then in a pull request preview, then in staging, then again after the release branch is cut, then again after production deploys. Nobody wants to say the third pass is not teaching the team much, because repetition looks responsible. But repeated testing is not automatically better testing.

There is a difference between layered evidence and duplicated ceremony. A unit test can prove a calculation. An integration test can prove that two parts of the system speak the same contract. A browser test can prove a critical flow still works. A manual product review can catch judgment problems automation will miss. A canary can prove that production accepts the change under real conditions. Each layer should teach something different.

Redundant staging checks become waste when each pass teaches the same shallow fact: the happy path worked one more time in an environment that is still not production. The team spends human attention confirming what automation should already know, then has less attention left for the questions that actually require judgment.

This is painful in small teams. A founder, QA person, designer, or senior engineer ends up clicking through the same flow again and again because the process has no memory. The organization feels safer because more people touched the change. But touch is not evidence. Evidence is knowing which risk a check was designed to reduce and whether that check is the cheapest reliable way to reduce it.

The better question is not "has this been tested in staging?" The better question is "what new thing did this test teach us?" If the answer is nothing, the test is a ritual. Keep the checks that create new information. Delete the ones that only create the comfort of having checked again.

## The Useful Version Of Staging

The useful version of staging answers a question production should not answer first.

Can the migration complete on production-shaped data within the window? Can the new queue worker survive realistic throughput? Can the team rehearse the cutover before the bank partner opens the real switch? Can the incident runbook be practiced?

Can support and operations see the workflow before customers call them? Can the deployment artifact move through the same path it will use in production? Can a high-risk integration be tested against a provider environment that is meaningfully close to the real one?

The [Kuda Nerve story](https://africanengineer.com/i/kuda) is a useful example from African banking. When Kuda built its homegrown core banking system, the team did not treat rehearsal as a waste of time. They load-tested. They built an environment that mirrored the planned production setup. They chased Redis connection issues under serious concurrency. They used the environment to discover the kind of risk that mattered.

Then, when the environment originally meant for production refused to behave before launch, the tested staging environment became production.

That is the standard. The useful environment is not merely called staging. It is disciplined enough to be promoted, similar enough to teach, and connected enough to the real deployment path that its results mean something.

If your staging environment cannot be promoted, cannot run the same artifact, cannot reproduce the risk you care about, and cannot teach you something production would otherwise teach painfully, then it may still be useful for demos, but it should not be treated as a safety gate.

Do not ask "do we have staging?" Ask "what evidence does this environment produce that we cannot get faster, cheaper, or more reliably another way?"

## Where Git Vibe Fits

[Git Vibe](https://github.com/sailscastshq/git-vibe) is my workflow for the AI era, after using Git Flow for almost half a decade.

I have written [the longer backstory of that shift](/blog/git-flow-worked-until-agents/): Git Flow gave me one hot lane and one stable lane, and for a long time that felt right. Agents changed the economics of that arrangement. When more work can happen in parallel, the cost of one shared holding branch becomes harder to ignore.

Git Vibe is not only a branch naming preference. It is an opinion about where the current state of the work should live in a software team. `main` is the only long-lived branch. Work happens in short `feat/*` branches. Issues create focused lanes. Worktrees keep parallel work out of the main checkout.

There is no `develop` branch pretending to be almost-main, no release branch becoming a second product, no hotfix branch pattern that quietly admits the normal process is too slow for reality.

Every long-lived coordination object becomes a place where state can drift. A `develop` branch lets the team say the work is integrated when it is not deployable. A permanent staging environment lets the team say the work is shipped when it is not serving customers. A release branch lets the team batch unreleased work until release day. Git Vibe makes the desired path boring: open a focused lane, do the work, merge back into `main`, and keep the shipping branch ready.

The branch is a work surface, not a second product. The issue gives the work a name. The `feat/*` branch gives the change isolation while it is being shaped. The work ends back on the branch that ships, not at an indefinite stop called "ready for release."

This matters more when AI agents are part of the team. Agents make it easier to produce more changes in parallel, which means they can also produce more inventory. If the workflow does not force small lanes and a clean return to the code path that ships, the team can end up with too many half-finished branches, preview links, and changes that looked productive in isolation.

Git Vibe does not slow everything down with more ceremony. It makes the safe path simple. Keep the permanent branch count low. Keep work scoped. Keep the base branch meaningful. Finish the lane instead of letting it become another place to hide.

Production is the live product. `main` is the current code. Everything else has to explain its role.

## What Happens When You Delete The Gate

Deleting staging as a mandatory gate does not remove the weak parts of the delivery system. It makes them visible.

If tests are weak, code review is performative, migrations lock tables, nobody owns deployment, or observability is decorative, the shorter path will reveal it. If your team has been using a shared staging environment to absorb the consequences of sloppy change management, production will expose that quickly.

A bottleneck often protects the organization from seeing the weakness behind it. Remove the bottleneck and the weakness becomes visible.

The transition does not have to be dramatic. Start with the lowest-risk classes of change: copy changes, hidden features, internal-only improvements, reversible UI work, and small backend changes after review and CI. Watch what breaks. Improve the pipeline. Add the missing checks. Improve the rollback path. Put real dashboards next to the deploy. Then move the boundary.

## Keep The Discipline

Keep automated tests that catch the risks you understand. Keep code review that improves judgment instead of approving the existence of a diff. Keep preview environments when designers, product managers, customers, or QA need to inspect a change before release. Keep staging for rehearsals where the environment produces real evidence.

Keep load tests. Keep security checks. Keep canaries. Keep feature flags. Keep alarms. Keep runbooks. Keep postmortems. Keep the judgment to know that some systems need more ceremony than others.

Delete the mandatory waiting room, not the discipline.

Staging can be safety. It can also be inventory. In many companies, it is where work goes because merged code cannot ship yet, tests miss too much, rollback is unclear, and nobody knows how to watch production without panic.

## What To Ask Before Deleting Staging

I do not think every team should wake up tomorrow, delete every environment, and throw unreviewed code at customers.

The harder question is: what exactly is our staging environment protecting us from, and is it doing that better than small batches, trunk-based development, automated checks, feature flags, progressive rollout, observability, and clear ownership would?

If the answer is yes, keep it. Use it seriously. Make it production-shaped enough to matter. Run the same artifact. Rehearse the dangerous work. Let it produce evidence.

If the answer is no, delete the ritual.

The goal is not to have fewer environments. The goal is to have fewer lies between the team and reality.

Push straight to production means making each deploy small, observable, reversible, and normal enough that shipping stops becoming a special event.

## Talks Worth Watching

- [10+ Deploys Per Day: Dev and Ops Cooperation at Flickr](https://www.youtube.com/watch?v=NUyCM4pcu1w): The classic deployment-culture talk. Watch it for small deploys, shared ownership, and the shift from release events to release flow.
- [I Test In Production by Charity Majors](https://www.youtube.com/watch?v=b2oota_FhGY): The clearest companion to the production-shaped argument. Some questions only show up under real traffic, real users, and real operational pressure.
- [Continuous Delivery with Jez Humble](https://www.youtube.com/watch?v=IBghnXBz3_w): The pipeline side of the argument. Keep software releasable through automated checks, feedback, and deployable artifacts.
- [Optimising Continuous Delivery by Dave Farley](https://www.youtube.com/watch?v=gDgAVqkFYWs): Useful for the small-batch argument. Waiting less is not the same thing as checking less.
- [Velocity Culture by Jon Jenkins](https://www.youtube.com/watch?v=dxk8b9rSKOo): Amazon's deployment culture from the inside. Good context for ownership, operational feedback, and why deploys should become ordinary.
- [Feature Branches & Toggles in a Post-GitHub World by Sam Newman](https://www.youtube.com/watch?v=lqRQYEHAtpk): Watch this for deploy/release separation, feature toggles, and the hidden cost of long-lived branches.
- [How Continuous Delivery and Lean Management Make Your DevOps Amazeballs by Nicole Forsgren](https://www.youtube.com/watch?v=opEKZpAOhIk): Research-backed context for why delivery speed and stability are not opposites.
- [Our Journey from Gitflow to Trunk Based Development](https://www.youtube.com/watch?v=DDkjBqlks40): A practical migration story from Git Flow-style branch management to trunk-based work. This maps cleanly to the Git Vibe section.
