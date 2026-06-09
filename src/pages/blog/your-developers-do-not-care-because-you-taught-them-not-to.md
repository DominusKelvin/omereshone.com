---
layout: '../../layouts/BlogPost.astro'
title: 'Your Developers Do Not Care Because You Taught Them Not To'
description: 'When managers treat estimates like sacred deadlines, engineers learn to protect themselves instead of the product. The problem is not that people do not care. The problem is often a culture that punishes truth and rewards checked boxes.'
pubDate: 'June 9, 2026'
---

Sometimes management makes it hard for developers to tell the truth.

That is the part people do not want to say out loud.

It is easier to complain that engineers are lazy, entitled, slow, unserious, overpaid, under-skilled, distracted by remote work, spoiled by startup money, or secretly waiting for a foreign job.

Those things may be true in some cases. Of course some people are unserious. Of course some employees are only there for the salary. Of course some developers talk a bigger game than they can play.

That explanation is too convenient.

It lets the system escape inspection.

A much harder question remains:

> What kind of company turns people who once cared into people who only want to survive the next deadline?

Someone once told me that in the African ecosystem, it is easier to see a ghost than to see an employee who cares.

That line is funny because it feels true enough to sting.

But I do not think it is the deepest truth.

The deeper truth is that many companies have built cultures where caring is punished, truth is expensive, and the safest professional strategy is to check the box, say "done," and move on before anybody asks too many questions.

So let us ask a better question.

Do you want something checked off as done?

Or do you want it to be truly done?

Because those are not the same thing.

## Done is not a checkbox

A checkbox is easy.

A Jira ticket can be moved.

A pull request can be merged.

A Slack update can say "shipped."

A sprint report can look green.

A manager can tell another manager that the team delivered.

Everybody can clap in the meeting and still leave the product worse than they found it.

That is the danger.

Modern software teams have become very good at producing the appearance of progress. The rituals are everywhere. Standups. Boards. Burndown charts. Status reports. Roadmaps. Quarterly goals. Sprint commitments. Velocity. OKRs. Targets. Release dates.

None of those things are evil by themselves.

The problem begins when management starts worshipping the symbol more than the reality.

The symbol says the feature shipped.

The reality says customers are confused.

The symbol says the deadline was met.

The reality says the code is brittle, the tests are shallow, the edge cases are waiting quietly, and the next engineer will pay the debt with interest.

The symbol says the team is productive.

The reality says everybody is tired, nobody trusts the timeline, and the only people still telling the truth are slowly learning to stop.

This is how companies manufacture apathy.

Not always through wickedness. Often through incentives.

If you reward checked boxes, people will check boxes.

If you reward honest risk communication, people will communicate risk.

If you punish bad news, bad news will not disappear. It will arrive late.

And late truth is always more expensive than early truth.

## Estimates are not vows

One of the most dangerous management habits in software is quietly converting an estimate into a promise.

A developer says, "This may take about two weeks."

Management hears, "This will be done in two weeks."

The client hears, "Delivery is confirmed for Friday."

The sales team hears, "You can announce it."

The founder hears, "This is now part of our board update."

Then the work begins, and reality does what reality does.

The API behaves differently than expected.

The old code is more fragile than anybody remembered.

The third-party service has undocumented behavior.

The data model needs to change.

The happy path works, but the real customer path is messier.

The first implementation proves the original solution was wrong.

Now the engineer has to tell the truth.

And this is where culture is revealed.

In a healthy culture, the manager asks:

What changed?

What did we learn?

What scope can we cut?

What risk are we carrying?

What is the smallest honest version we can ship?

Do we still want the date, or do we want the original scope?

In an unhealthy culture, the manager asks:

Why did you miss the deadline?

That question sounds like accountability, but very often it is just ignorance with authority.

It assumes the original estimate was a sacred object. It assumes uncertainty is failure. It assumes discovery is incompetence. It assumes software work should behave like factory work even when the team is doing something novel.

DHH has been unusually blunt about this. In [Software estimates have never worked and never will](https://world.hey.com/dhh/software-estimates-have-never-worked-and-never-will-a41a9c71), he argues that the kinds of software worth building are often novel enough that nobody knows exactly what the solution should look like before the work begins.

That is not an excuse for chaos.

It is a demand for honesty.

The lie is not that engineers estimate poorly. The lie is pretending that estimates become more truthful when managers shout at them.

## Deadlines are sometimes real

Let me be careful here.

Deadlines are not always nonsense.

Some deadlines are real.

If a regulation takes effect on July 1, that is real.

If payroll must run on Friday, that is real.

If your runway ends in three months, that is real.

If a conference demo happens on a fixed date, that is real.

If a customer contract has penalties attached to a delivery date, that is real.

The issue is not deadlines.

The issue is fake deadlines wearing the moral weight of real ones.

A real deadline should force tradeoffs.

A fake deadline often prevents them.

That difference matters.

When the date is real, scope has to become negotiable. Quality cannot be the thing you silently sacrifice because the manager wants to keep both the date and the fantasy.

This is one of the strongest ideas in Basecamp's [Shape Up](https://basecamp.com/shapeup/1.2-chapter-03): fixed time, variable scope. Shape Up distinguishes appetite from estimate. Instead of asking engineers to predict the future with fake precision, the company decides how much time a problem is worth, shapes the work, and lets the team cut scope intelligently inside that boundary.

That is a more honest relationship with time.

It says:

We have six weeks.

We want the best version of this problem that fits six weeks.

If something must give, scope gives.

Not truth.

Not quality.

Not the dignity of the people doing the work.

Jason Fried and DHH have repeated this instinct for years. In the REWORK essay [Planning is Guessing](https://signalvnoise.com/svn3/planning-is-guessing/), Fried makes the obvious point many companies still resist: a plan is a guess written down.

That does not mean planning is useless.

It means a plan should remain humble in the presence of new information.

The problem with many management cultures is that they do not treat plans as guesses. They treat them as contracts written by people who did not yet understand the work.

Then they act betrayed when reality refuses to sign.

## The deadline is not the villain. The system is.

Bad managers think the problem is pressure.

Good managers understand the problem is unmanaged pressure.

Pressure can focus a team.

Pressure can clarify tradeoffs.

Pressure can prevent perfectionism.

Pressure can force people to stop adding decorative complexity and ask what truly matters.

But pressure without truth turns into theater.

The team performs confidence.

The manager performs control.

The roadmap performs certainty.

The deadline performs strategy.

Then everyone acts shocked when the product performs badly.

This is why W. Edwards Deming still matters. His [14 Points for Management](https://deming.org/explore/fourteen-points) were written for quality, but they read like a rebuke to many software companies. He told managers to drive out fear, improve the system, eliminate slogans and numerical targets that create adversarial relationships, and remove barriers that rob people of pride in workmanship.

That last phrase matters.

Pride of workmanship.

A developer who cares wants to be proud of the work.

They want the feature to make sense.

They want the code to survive contact with reality.

They want the customer not to suffer.

They want the next engineer not to curse their name.

But pride of workmanship requires room for truth.

If every honest concern is treated as negativity, people will stop bringing concerns.

If every risk is treated as an excuse, people will stop naming risk.

If every missed estimate becomes a public flogging, estimates will get padded, progress will get hidden, and managers will receive increasingly fictional reports from increasingly careful employees.

Deming put it even more sharply in one of his quotes collected by the Deming Institute: [where there is fear, you get wrong figures](https://deming.org/quotes/where-ever-theres-fear-you-get-wrong-figures-3/).

That is exactly what happens in software teams.

Fear does not produce accuracy.

Fear produces compliance.

And compliance can look very productive until the bill arrives.

## The employee who "does not care" may be making a rational decision

I know founders do not like hearing this.

I know because I am a founder.

Founders want employees to care like owners. We want people to feel the mission in their bones. We want them to move with urgency, notice problems, protect quality, think beyond their ticket, and act like the product matters.

That desire is not wrong.

But it becomes childish when founders ignore the system around the desire.

You cannot ask people to care deeply while teaching them that caring deeply is professionally dangerous.

What happens when an engineer cares?

They ask why.

They challenge unclear requirements.

They say the timeline is wrong.

They ask for more time to pay down a dangerous piece of debt.

They point out that the feature as designed will not solve the customer's actual problem.

They slow down a little because they are thinking beyond the happy path.

They write tests that nobody sees.

They improve an abstraction that would otherwise hurt the team later.

They refuse to call something done simply because it passed the demo.

Now ask yourself: how does your company treat that person?

Are they seen as serious?

Or are they seen as difficult?

Are they trusted?

Or are they managed around?

Are they promoted?

Or are they quietly punished for not being "fast" enough?

Because if the company praises the person who ships the fragile thing quickly and burdens the person who tries to make the thing durable, then the company has already chosen its culture.

It has chosen performance over product.

It has chosen deadline theater over engineering.

It has chosen short-term obedience over long-term ownership.

And the employees are not stupid. They will adapt.

The caring ones will either leave, burn out, or learn to care more quietly.

The ambitious ones will learn how to look productive.

The political ones will learn how to narrate progress.

The tired ones will learn how to survive.

Then leadership will look around one day and say, "Nobody here cares."

But maybe they did.

Maybe the company trained it out of them.

## Truth has to be cheaper than silence

The most important management question is not:

Do people tell me the truth?

The better question is:

What does it cost them to tell me the truth?

If telling the truth costs too much, people will buy safety with silence.

That is not an African problem.

That is a human problem.

Amy Edmondson's work on psychological safety is useful here because it gives language to something good engineers already know. Harvard Business School describes psychological safety as the kind of environment where candor is expected and people can speak up without fear of retribution. Their summary of Edmondson's work says you cannot lead through fear anymore if you want high-performing teams: [Four Steps to Building the Psychological Safety That High-Performing Teams Need](https://www.library.hbs.edu/working-knowledge/four-steps-to-build-the-psychological-safety-that-high-performing-teams-need-today).

This is not about making work soft.

It is not about protecting people from standards.

It is not about letting engineers hide behind complexity.

Psychological safety without high standards becomes comfort.

High standards without psychological safety becomes fear.

The best teams need both.

They need a culture where a developer can say, "This will not be ready by Friday unless we cut these three things," and the manager does not interpret that as betrayal.

They need a culture where a junior engineer can say, "I do not understand this design," and the team does not punish the question.

They need a culture where a senior engineer can say, "We are accumulating risk here," and leadership does not roll its eyes because the dashboard is green.

They need a culture where bad news travels fast.

That is what good management is.

Not barking.

Not motivational speeches.

Not pretending the date is sacred because somebody powerful announced it too early.

Good management makes truth cheap enough to say early.

## Better metrics, not fewer metrics

The answer is not to stop measuring.

That is another lazy reaction.

Some engineers hear criticism of bad metrics and conclude that all metrics are bad. That is not serious either.

Businesses need measurement.

Managers need visibility.

Founders need to know whether the product engine is healthy.

Customers need delivery they can trust.

The question is not whether to measure.

The question is what your metrics are teaching people to become.

Goodhart's Law is useful here: when a measure becomes a target, it stops being a good measure. The phrase is often used in discussions of software metrics because teams will optimize for whatever leadership turns into the scoreboard.

If you measure tickets closed, people will close tickets.

If you measure story points, people will negotiate points.

If you measure lines of code, people will produce code.

If you measure deadlines met without measuring quality, people will meet deadlines by hiding quality problems.

If you measure individual developer output without measuring team outcomes, people will optimize themselves against the system.

This is how bad metrics create bad character.

Not because people are evil.

Because people are adaptive.

Better metrics look at the system, not just the worker.

DORA's software delivery metrics are a better example because they balance speed with stability. Their guide to [software delivery performance metrics](https://dora.dev/guides/dora-metrics/) looks at things like change lead time, deployment frequency, change fail rate, recovery time, and deployment rework rate. In plain English: how quickly can good changes reach users, how often can we ship, how often do we break things, and how quickly can we recover when we do?

That is a healthier conversation than "Did Kelvin close his tickets this week?"

It moves the manager's attention from personal suspicion to system performance.

A better engineering culture should ask:

- How long does it take for an idea to become useful software?
- How often do we ship without panic?
- How much rework do we create by rushing?
- How many defects escape into production?
- How quickly do we recover from failure?
- How often do engineers raise risks early?
- How often do managers respond to those risks with useful tradeoffs?
- How much work in progress is choking the team?
- How many projects are almost done but not truly done?
- How often does "done" survive real customer usage?

Those questions produce a different company.

They make it harder to hide behind a green board.

They also make it harder to blame engineers lazily.

Because sometimes the data will reveal that the bottleneck is not developer effort. It is unclear product direction, constant interruption, unstable priorities, weak review, missing test infrastructure, poor discovery, bad deployment systems, or leadership announcing dates before the work has been shaped.

Good metrics should make management more responsible, not only developers more visible.

## Trust, within reason

Trust your people.

Within reason.

That caveat matters.

Trust does not mean abandoning accountability. It does not mean letting people disappear for weeks and return with poetry about complexity. It does not mean every missed deadline is noble. It does not mean developers are always right and managers are always foolish.

Some developers are bad at communicating.

Some developers hide.

Some developers over-engineer.

Some developers confuse quality with indulgence.

Some developers use uncertainty as a shield against commitment.

A serious company cannot tolerate that forever.

But the correction is not management by suspicion.

The correction is trust plus visibility.

Not surveillance.

Visibility.

There is a difference.

Surveillance asks, "How do I prove you are working?"

Visibility asks, "How do we see the state of the work clearly enough to make good decisions?"

Surveillance makes people perform activity.

Visibility helps people surface reality.

Basecamp's [Shape Up introduction](https://basecamp.com/shapeup/0.3-chapter-01) describes a way of working where projects are shaped before being handed to a team, teams are given room to work, and management does not micromanage individual days. The point is not that every company should copy Basecamp. The point is that mature management separates strategic control from daily interference.

Leaders should set appetite, clarify constraints, choose bets, protect focus, and demand honest visibility.

Teams should own execution, communicate risk, cut scope intelligently, and refuse fake done.

That is trust within reason.

It is not blind faith.

It is a better contract.

## Why blind deadlines create blind engineering

A blind deadline is a date disconnected from the truth of the work.

Sometimes it comes from a founder's excitement.

Sometimes from a sales promise.

Sometimes from investor pressure.

Sometimes from a competitor announcement.

Sometimes from a manager who thinks urgency is the same thing as leadership.

The date enters the room before understanding does.

Then everyone is forced to organize around it.

This creates a predictable pattern.

First, engineers give cautious estimates.

Then management compresses the estimates.

Then scope remains mostly unchanged.

Then uncertainty appears.

Then the team raises concerns.

Then leadership says, "We already committed."

Then quality becomes the only flexible variable left.

Then people cut corners.

Then the feature ships.

Then users discover what the deadline hid.

Then leadership asks why engineering quality is low.

This is not a mystery.

It is a system.

Blind deadlines create blind engineering because they train everyone to stop looking too closely.

Do not look too closely at the edge cases.

Do not look too closely at the data migration.

Do not look too closely at the onboarding flow.

Do not look too closely at the support burden.

Do not look too closely at the fact that the feature technically exists but does not really solve the problem.

Just get it across the line.

That phrase has done a lot of damage.

Across what line?

A line in the project management tool?

A line in a manager's update?

A line in a customer's contract?

A line in the founder's anxiety?

Software does not care about your internal line.

Customers do not care that the ticket moved.

Reality grades the work after the ceremony is over.

## The African ecosystem needs more truth, not more scolding

This matters especially in African tech because our constraints are already heavy.

Capital is harder.

Trust is more fragile.

Local purchasing power is weaker.

Infrastructure can be unpredictable.

Hiring is noisy.

Senior talent is thin in many areas.

Brain drain is real.

Customers can be unforgiving because the margin for waste is low.

A market like this cannot afford management theater.

We cannot keep importing the worst habits of corporate software culture, mixing them with local power distance, then acting surprised that people become quiet, political, and disengaged.

Many African workplaces already have a cultural problem with authority. Too many people are trained from school, family, church, and work to survive power rather than speak truth to it.

So when a founder or manager creates a company where disagreement is treated as disrespect, the result is not discipline.

The result is silence.

And silence is expensive.

Silence means the junior who sees the bug says nothing.

Silence means the mid-level engineer who knows the deadline is fake waits until the last responsible moment.

Silence means the senior engineer who can see the architectural danger chooses diplomacy over clarity.

Silence means the customer success person who keeps hearing complaints does not want to be labeled negative.

Silence means the product manager writes a roadmap nobody believes.

Silence means the founder is surrounded by updates but starved of truth.

That is how companies die while reporting progress.

The ecosystem does not need more founders shouting that employees do not care.

It needs more founders asking whether their companies are safe places for serious people to care out loud.

## What managers should do instead

If you manage developers, your job is not to remove all pressure.

Your job is to make pressure intelligent.

Start by separating estimates, commitments, and deadlines.

An estimate is a current guess based on current knowledge.

A commitment is a promise made after tradeoffs are understood.

A deadline is a fixed date with consequences outside the team's preference.

Stop mixing those three things and calling it accountability.

Before you announce a date, ask the team what must be true for that date to hold.

Before you pressure the team, ask what scope can move.

Before you accuse people of being slow, ask what is blocking flow.

Before you demand more updates, ask whether your last reaction to bad news made the next update more honest or less honest.

Before you create a metric, ask what behavior it will produce if people optimize for it.

Before you call something done, ask whether the customer, the codebase, and the team would agree.

And when deadlines slip, do not only ask who failed.

Ask what the system learned too late.

That question changes everything.

It turns missed deadlines from courtroom drama into organizational learning.

It does not remove accountability.

It upgrades accountability from blame to truth.

## What engineers owe the culture too

Engineers are not exempt.

If you want management to trust you, you have to become easier to trust.

That means communicating early.

Not when everything is already on fire.

Early.

It means explaining uncertainty clearly.

It means giving options, not just problems.

It means saying, "We can hit Friday if we cut reporting, admin filters, and the CSV export. If those are required, Friday is not real."

That is a useful truth.

"This is impossible" is not always useful.

"Here are the tradeoffs" is useful.

Engineers also need to stop hiding poor communication behind technical depth. If the work is uncertain, say why. If the scope is growing, show where. If a decision is risky, write it down. If you need time to investigate, ask for an investigation window and come back with options.

Professionalism is not pretending certainty.

Professionalism is making uncertainty legible.

The Agile Manifesto valued [responding to change over following a plan](https://agilemanifesto.org/), but it also valued working software, customer collaboration, and motivated individuals who are trusted to get the job done. That trust is not magic. Engineers participate in earning it by making reality visible before reality becomes a crisis.

The best engineers do not merely say no.

They make the cost of yes visible.

## The real definition of done

So what does truly done mean?

It means the feature solves the problem it was meant to solve.

It means the important edge cases have been considered.

It means quality was not silently sacrificed to preserve a date nobody wanted to renegotiate.

It means the team knows how to operate what it shipped.

It means support is not about to inherit a mess engineering refused to see.

It means the code is understandable enough for the next engineer to change.

It means the tests cover the risk that matters.

It means the customer experience works outside the demo path.

It means the product is better, not merely the board greener.

This does not mean everything must be perfect.

Perfect is another way to never ship.

Truly done is not perfect.

Truly done is honest.

It is the best version of the work inside the time, scope, quality, and business constraints the team consciously chose.

That word consciously is doing a lot of work.

Bad teams make tradeoffs accidentally.

Good teams make tradeoffs consciously.

Bad managers pretend there are no tradeoffs.

Good managers force the tradeoffs into the open while there is still time to choose.

## Maybe the ghosts are not the employees

So when someone says it is easier to see a ghost than an employee who cares, I understand the frustration.

But maybe the ghost in the company is not the caring employee.

Maybe the ghost is truth.

Everybody talks about it.

Few people have seen it in the room.

The roadmap is there.

The dashboard is there.

The standup is there.

The sprint review is there.

The performance review is there.

But truth is missing.

Nobody says the date is fake.

Nobody says the feature is not actually useful.

Nobody says the team is exhausted.

Nobody says the quality is dropping.

Nobody says the estimates are being laundered into promises.

Nobody says the manager is rewarding theater.

Nobody says the customer will not care that the internal deadline was met.

That is the culture problem.

Not that people are incapable of caring.

But that caring has been made too expensive.

If you want employees who care, build a company where caring has somewhere to go.

Give it language.

Give it protection.

Give it metrics that see the system.

Give it managers who can hear bad news without becoming small.

Give it deadlines that force intelligent scope tradeoffs instead of silent quality collapse.

Give it a definition of done that means something after the meeting ends.

Trust the people you hire, within reason.

Then build the visibility that makes that trust operational.

Because the question is still waiting for every founder, manager, CTO, product lead, and engineering lead.

Do you want it checked off?

Or do you want it truly done?

Your culture will answer before your mouth does.
