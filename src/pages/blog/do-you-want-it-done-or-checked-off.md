---
layout: '../../layouts/BlogPost.astro'
title: 'Do You Want It Done, Or Checked Off?'
description: 'When deadlines punish truth, engineers learn to protect the date instead of the product. Quality work needs room for trust, tradeoffs, and honest misses within reason.'
pubDate: 'June 9, 2026'
---

Sometimes management makes it hard for developers to tell the truth.

It is easier to complain that engineers are lazy, entitled, slow, unserious, overpaid, under-skilled, distracted by remote work, spoiled by startup money, or secretly waiting for a foreign job.

Some of that may be true in some cases. Of course some people are unserious. Of course some employees are only there for the salary. Of course some developers talk a bigger game than they can play.

But that explanation protects the system from inspection.

A much harder question remains:

> What kind of company turns people who once cared into people who only want to survive the next deadline?

Someone once told me that in the African ecosystem, it is easier to see a ghost than to see an employee who cares. The line is funny because it feels true enough to sting, but I do not think it is the deepest truth.

The deeper truth is that many companies have built cultures where caring is punished, truth is expensive, and the safest professional strategy is to check the box, say "done," and move on before anybody asks too many questions.

The better question is simple: do you want something checked off as done, or do you want it to be truly done? Those are not the same thing.

## Done is not a checkbox

A checkbox is easy. A Jira ticket can be moved, a pull request can be merged, a Slack update can say "shipped," a sprint report can look green, and a manager can tell another manager that the team delivered. Everybody can clap in the meeting and still leave the product worse than they found it.

Modern software teams have become very good at producing the appearance of progress. The rituals are everywhere: standups, boards, burndown charts, status reports, roadmaps, quarterly goals, sprint commitments, velocity, OKRs, targets, and release dates. None of those things are evil by themselves. The problem begins when management starts worshipping the symbol more than the reality.

The symbol says the feature shipped. The reality says customers are confused. The symbol says the deadline was met. The reality says the code is brittle, the tests are shallow, the edge cases are waiting quietly, and the next engineer will pay the debt with interest.

This is how companies manufacture apathy. Not always through wickedness. Often through incentives.

If you reward checked boxes, people will check boxes. If you reward honest risk communication, people will communicate risk. If you punish bad news, bad news will not disappear. It will arrive late, dressed as an emergency, and late truth is always more expensive than early truth.

## Estimates are not vows

One of the most dangerous management habits in software is quietly converting an estimate into a promise.

A developer says, "This may take about two weeks." Management hears, "This will be done in two weeks." The client hears, "Delivery is confirmed for Friday." The sales team hears, "You can announce it." The founder hears, "This is now part of our board update."

Then the work begins, and reality does what reality does.

The API behaves differently than expected. The old code is more fragile than anybody remembered. The third-party service has undocumented behavior. The data model needs to change. The happy path works, but the real customer path is messier. The first implementation proves the original solution was wrong.

Now the engineer has to tell the truth, and this is where culture is revealed.

In a healthy culture, the manager does not treat new information as betrayal. The manager asks what changed, what the team learned, what scope can be cut, what risk is being carried, and whether the company still wants the original date or the original scope. Those are adult questions because they acknowledge that software work involves discovery.

In an unhealthy culture, the manager asks only one question: why did you miss the deadline?

That question sounds like accountability, but very often it is just ignorance with authority. It assumes the original estimate was a sacred object. It assumes uncertainty is failure. It assumes discovery is incompetence. It assumes software work should behave like factory work even when the team is doing something novel.

DHH has been unusually blunt about this. In [Software estimates have never worked and never will](https://world.hey.com/dhh/software-estimates-have-never-worked-and-never-will-a41a9c71), he argues that the kinds of software worth building are often novel enough that nobody knows exactly what the solution should look like before the work begins.

That is a demand for honesty, not an excuse for chaos.

The lie is not that engineers estimate poorly. The lie is pretending that estimates become more truthful when managers shout at them.

## If you want quality, make room for quality

You cannot demand quality work while designing a deadline culture where quality has no place to breathe.

If the date is fixed, the scope is fixed, the budget is fixed, the team size is fixed, and the emotional reaction to delay is also fixed, then quality becomes the only variable left. Nobody has to say that out loud. The system says it for them.

That is how quality gets sacrificed in companies that claim to value quality. It is rarely announced as a decision. It happens through silence, pressure, and the absence of legitimate tradeoffs.

If you truly want engineers to do work they are proud of, your planning model must allow at least one of these things to move:

- **Scope**: the team can cut features, edge cases, reports, settings, integrations, or polish that do not belong in the first honest version.
- **Time**: the deadline can move within reason when the team discovers meaningful complexity.
- **Staffing**: more capable people can be added carefully, where adding people will actually help instead of creating coordination drag.
- **Quality bar**: the company can consciously choose a lower-quality temporary version, name the debt, and schedule the cleanup instead of pretending nothing was compromised.

The dangerous company is not the company that makes tradeoffs. Every serious company makes tradeoffs. The dangerous company is the one that makes tradeoffs unconsciously and then acts surprised when the product remembers what management chose to forget.

Leadership also has to be honest about punishment. If an engineer discovers a real quality risk and asks for two more days, that cannot be treated the same as laziness, disappearing, or negligent planning. Within reason, a missed estimate caused by honest discovery is not automatically a character failure. It is information. You can ask for evidence, options, sharper communication, and a clearer recovery plan, but if the practical penalty for saying "Friday will be dishonest" is humiliation, lost trust, or a performance-review scar, you have taught the team to protect Friday instead of the product.

The [Kuda Nerve story](https://africanengineer.com/i/kuda) is a useful African example here. When Kuda's engineers were building their core banking system, the early phase did not look like progress from the outside. For months there were no endpoints to demo, no APIs to point at, no visible product-shaped artifact to calm the room. What existed was foundation: the parts that would later make the rest of the system possible. In a low-trust culture, that kind of work gets killed or rushed because management needs visible proof every week. At Kuda, there was enough trust and technical conviction to let the team finish the invisible work, and that patience helped produce one of the most serious pieces of financial technology built on the continent.

So yes, deadlines can matter. Some deadlines are real. If a regulation takes effect on July 1, that is real. If payroll must run on Friday, that is real. If your runway ends in three months, that is real. If a conference demo happens on a fixed date, that is real. If a customer contract has penalties attached to a delivery date, that is real.

The issue is not deadlines. The issue is fake deadlines wearing the moral weight of real ones.

A real deadline should force tradeoffs. A fake deadline often prevents them. When the date is real, scope has to become negotiable. Quality cannot be the thing you silently sacrifice because the manager wants to keep both the date and the fantasy.

This is one of the strongest ideas in Basecamp's [Shape Up](https://basecamp.com/shapeup/1.2-chapter-03): fixed time, variable scope. Shape Up distinguishes appetite from estimate. Instead of asking engineers to predict the future with fake precision, the company decides how much time a problem is worth, shapes the work, and lets the team cut scope intelligently inside that boundary.

That is a more honest relationship with time. It says we have six weeks, we want the best version of this problem that fits six weeks, and if something must give, scope gives before truth, quality, or the dignity of the people doing the work.

Jason Fried and DHH have repeated this instinct for years. In the REWORK essay [Planning is Guessing](https://signalvnoise.com/svn3/planning-is-guessing/), Fried makes the obvious point many companies still resist: a plan is a guess written down. That does not mean planning is useless. It means a plan should remain humble in the presence of new information.

The problem with many management cultures is that they do not treat plans as guesses. They treat them as contracts written by people who did not yet understand the work, then act betrayed when reality refuses to sign.

## People follow the pain map

Human beings learn from consequences. [OpenStax's psychology text](https://openstax.org/books/psychology-2e/pages/6-3-operant-conditioning) explains operant conditioning as learning to associate behavior with consequence, where reinforcement increases a behavior and punishment decreases it. Its [organizational behavior text](https://openstax.org/books/organizational-behavior/pages/4-1-basic-models-of-learning) summarizes Thorndike's law of effect in plain terms: behavior followed by satisfaction is more likely to be repeated, while behavior followed by discomfort is less likely to be repeated.

If a developer tells the truth early and the consequence is suspicion, embarrassment, loss of trust, public pressure, or a performance-review scar, the organization has punished early truth. If a developer hides the risk, ships the fragile thing, and gets praised for "meeting the deadline," the organization has rewarded deadline theater.

People are not machines, but they are not immune to reinforcement either. They learn what the environment makes expensive.

This is why bad deadline cultures are so psychologically powerful. The pain of missing a deadline is immediate. The pain of bad quality is often delayed. The manager's disappointment is immediate. The customer complaints may come later. The public status meeting is immediate. The maintenance cost may land on another engineer months from now.

When the immediate pain punishes truth and the delayed pain punishes quality, many people will choose relief now and debt later. Not because they are wicked. Because the system has made self-protection more rational than product protection.

The reward map often looks like this:

- Say "on track" and you get temporary peace.
- Say "we found a serious problem" and you get interrogation.
- Ship a shallow version on Friday and you get praised for commitment.
- Ask for Tuesday to finish the hard parts properly and you get labeled slow.
- Move the ticket and you look productive.
- Protect the codebase and your work becomes harder to explain.

This is how a company trains people without admitting it is training them.

Self-Determination Theory adds another useful layer. The theory describes autonomy, competence, and relatedness as basic psychological needs for healthy motivation. Its [official site](https://selfdeterminationtheory.org/the-theory/) explains that social environments can support or undermine intrinsic motivation depending on whether they satisfy or frustrate needs like autonomy and competence.

The same pattern shows up in software teams.

Developers need enough autonomy to make tradeoffs, enough competence support to do work they can be proud of, and enough relatedness to feel they are part of a serious team rather than disposable hands on a keyboard. A culture of blind deadlines attacks all three. It removes autonomy by turning estimates into orders. It attacks competence by forcing people to ship work below their own standards. It weakens relatedness by making management feel like an adversary instead of a partner in reality.

DHH recently wrote about the dividend of building 37signals as [a pond of interesting problems](https://world.hey.com/dhh/a-pond-of-interesting-problems-5f697567). I like that frame because it says something many managers miss: a good company should not merely extract hours from capable people. It should increasingly arrange the work so capable people spend more time on the problems where their judgment, taste, and curiosity have the highest return.

Some work will always be plain maintenance. Some fire will always need someone's attention. Nobody is too important to take out the trash sometimes. But the general direction of a maturing company should be toward better fit between people and problems, not more obedience to a calendar. A blind deadline culture moves in the opposite direction. It takes interesting work and reduces it to date-keeping. It takes judgment and turns it into compliance. Then leadership wonders why motivation drops, as if motivation is separate from what the environment repeatedly rewards and punishes.

## Work ethic is not overwork

Many companies also corrupt the meaning of work ethic.

In [It Doesn't Have to Be Crazy at Work](https://books.google.com/books?vid=ISBN0062874780), Jason Fried and DHH push back against the outwork myth: the idea that success belongs to whoever can simply keep going longer than everyone else. That argument belongs in this conversation because many managers still treat exhaustion as evidence of character.

The employee who is always online, always available, always replying, always rescuing, always sacrificing evenings, always touching every thread, and always saying yes becomes the visible symbol of "care." Then the person who works calmly, protects focus, communicates early, avoids drama, and goes home at a sane hour starts to look less committed by comparison. That is how a company quietly teaches everyone to confuse motion with contribution.

Availability is not the same as reliability. Exhaustion is not the same as ownership. Being easy to interrupt is not the same as being useful. A person can be present everywhere and still create drag for everyone else. A person can work reasonable hours and still be the person whose judgment saves the team months of pain.

Real work ethic is quieter than hustle culture wants it to be. It is doing what you said you would do, respecting the customer, respecting the work, not wasting other people's time, not creating unnecessary work, not hiding risk, not becoming a bottleneck, and not using busyness as a costume for importance.

If management praises the person who is always around more than the person who makes the system calmer, it should not be surprised when everyone starts performing availability. People will learn to keep Slack green, send late-night messages, join meetings they do not need, and narrate effort instead of improving outcomes. That too is how companies teach people not to care: they make the performance of caring more rewarding than the practice of it.

## The deadline is not the villain. The system is.

Bad managers think the problem is pressure. Good managers understand that the problem is unmanaged pressure.

Pressure can focus a team, clarify tradeoffs, prevent perfectionism, and force people to stop adding decorative complexity. But pressure without truth turns into theater. The team performs confidence, the manager performs control, the roadmap performs certainty, and the deadline performs strategy. Then everyone acts shocked when the product performs badly.

This is why W. Edwards Deming still matters. His [14 Points for Management](https://deming.org/explore/fourteen-points) were written for quality, but they read like a rebuke to many software companies. He told managers to drive out fear, improve the system, eliminate slogans and numerical targets that create adversarial relationships, and remove barriers that rob people of pride in workmanship.

That last phrase matters: pride in workmanship.

A developer who cares wants the feature to make sense. They want the code to survive contact with reality. They want the customer not to suffer. They want the next engineer not to curse their name. But pride in workmanship requires room for truth.

If every honest concern is treated as negativity, people will stop bringing concerns. If every risk is treated as an excuse, people will stop naming risk. If every missed estimate becomes a public flogging, estimates will get padded, progress will get hidden, and managers will receive increasingly fictional reports from increasingly careful employees.

Deming put it even more sharply in one of his quotes collected by the Deming Institute: [where there is fear, you get wrong figures](https://deming.org/quotes/where-ever-theres-fear-you-get-wrong-figures-3/).

That is exactly what happens in software teams. Fear does not produce accuracy. Fear produces compliance, and compliance can look very productive until the bill arrives.

## The employee who "does not care" may be making a rational decision

Founders do not like hearing this. I know because I am one.

Founders want employees to care like owners. We want people to feel the mission in their bones. We want them to move with urgency, notice problems, protect quality, think beyond their ticket, and act like the product matters.

That desire is not wrong. It becomes childish when founders ignore the system around the desire.

You cannot ask people to care deeply while teaching them that caring deeply is professionally dangerous. Because when an engineer cares, they ask why. They challenge unclear requirements. They say the timeline is wrong. They ask for more time to pay down dangerous debt. They point out that the feature as designed will not solve the customer's actual problem. They slow down a little because they are thinking beyond the happy path. They write tests that nobody sees. They improve an abstraction that would otherwise hurt the team later. They refuse to call something done simply because it passed the demo.

Now ask yourself how your company treats that person.

Are they seen as serious, or are they seen as difficult? Are they trusted, or are they managed around? Are they promoted, or are they quietly punished for not being "fast" enough?

Because if the company praises the person who ships the fragile thing quickly and burdens the person who tries to make the thing durable, then the company has already chosen its culture. It has chosen performance over product, deadline theater over engineering, and short-term obedience over long-term ownership.

Employees are not stupid. They will adapt. The caring ones will either leave, burn out, or learn to care more quietly. The ambitious ones will learn how to look productive. The political ones will learn how to narrate progress. The tired ones will learn how to survive.

Then leadership will look around one day and say, "Nobody here cares."

But maybe they did. Maybe the company trained it out of them.

## Truth has to be cheaper than silence

The most important management question is not whether people tell you the truth. The better question is what it costs them to tell you the truth.

If telling the truth costs too much, people will buy safety with silence. That is not an African problem. That is a human problem.

Amy Edmondson's work on psychological safety is useful here because it gives language to something good engineers already know. Harvard Business School describes psychological safety as the kind of environment where candor is expected and people can speak up without fear of retribution. Their summary of Edmondson's work says you cannot lead through fear anymore if you want high-performing teams: [Four Steps to Building the Psychological Safety That High-Performing Teams Need](https://www.library.hbs.edu/working-knowledge/four-steps-to-build-the-psychological-safety-that-high-performing-teams-need-today).

This is not about making work soft. It is not about protecting people from standards. It is not about letting engineers hide behind complexity.

Psychological safety without high standards becomes comfort. High standards without psychological safety becomes fear. The best teams need both.

They need a culture where a developer can say, "This will not be ready by Friday unless we cut these three things," and the manager does not interpret that as betrayal. They need a culture where a junior engineer can say, "I do not understand this design," and the team does not punish the question. They need a culture where a senior engineer can say, "We are accumulating risk here," and leadership does not roll its eyes because the dashboard is green.

They need a culture where bad news travels fast.

That is good management. Not barking. Not motivational speeches. Not pretending the date is sacred because somebody powerful announced it too early.

Good management makes truth cheap enough to say early.

## Better metrics, not fewer metrics

The answer is not to stop measuring.

Some engineers hear criticism of bad metrics and conclude that all metrics are bad. That is not serious either. Businesses need measurement. Managers need visibility. Founders need to know whether the product engine is healthy. Customers need delivery they can trust.

The question is not whether to measure. The question is what your metrics are teaching people to become.

Goodhart's Law is useful here: when a measure becomes a target, it stops being a good measure. The phrase is often used in discussions of software metrics because teams will optimize for whatever leadership turns into the scoreboard.

If you measure tickets closed, people will close tickets. If you measure story points, people will negotiate points. If you measure lines of code, people will produce code. If you measure deadlines met without measuring quality, people will meet deadlines by hiding quality problems. If you measure individual developer output without measuring team outcomes, people will optimize themselves against the system.

This is how bad metrics create bad character. Not because people are evil, but because people are adaptive.

Better metrics look at the system, not just the worker. DORA's software delivery metrics are a better example because they balance speed with stability. Their guide to [software delivery performance metrics](https://dora.dev/guides/dora-metrics/) looks at things like change lead time, deployment frequency, change fail rate, recovery time, and deployment rework rate. In plain English: how quickly can good changes reach users, how often can we ship, how often do we break things, and how quickly can we recover when we do?

That is a healthier conversation than "Did Kelvin close his tickets this week?" It moves the manager's attention from personal suspicion to system performance.

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

Those questions produce a different company. They make it harder to hide behind a green board, and they also make it harder to blame engineers lazily.

Because sometimes the data will reveal that the bottleneck is not developer effort. It is unclear product direction, constant interruption, unstable priorities, weak review, missing test infrastructure, poor discovery, bad deployment systems, or leadership announcing dates before the work has been shaped.

Good metrics should make management more responsible, not only developers more visible.

## Trust, within reason

Trust your people, within reason.

Trust does not mean abandoning accountability. It does not mean letting people disappear for weeks and return with poetry about complexity. It does not mean every missed deadline is noble. It does not mean developers are always right and managers are always foolish.

Some developers are bad at communicating. Some developers hide. Some developers over-engineer. Some developers confuse quality with indulgence. Some developers use uncertainty as a shield against commitment. A serious company cannot tolerate that forever.

But the correction is not management by suspicion. The correction is trust plus visibility.

Not surveillance. Visibility.

Surveillance asks, "How do I prove you are working?" Visibility asks, "How do we see the state of the work clearly enough to make good decisions?" Surveillance makes people perform activity. Visibility helps people surface reality.

Basecamp's [Shape Up introduction](https://basecamp.com/shapeup/0.3-chapter-01) describes a way of working where projects are shaped before being handed to a team, teams are given room to work, and management does not micromanage individual days. The point is not that every company should copy Basecamp. The point is that mature management separates strategic control from daily interference.

Leaders should set appetite, clarify constraints, choose bets, protect focus, and demand honest visibility. Teams should own execution, communicate risk, cut scope intelligently, and refuse fake done.

That is trust within reason. It is not blind faith. It is a better contract.

## Why blind deadlines create blind engineering

A blind deadline is a date disconnected from the truth of the work.

Sometimes it comes from a founder's excitement, a sales promise, investor pressure, a competitor announcement, or a manager who thinks urgency is the same thing as leadership. The date enters the room before understanding does. Then everyone is forced to organize around it.

The pattern is predictable:

- Engineers give cautious estimates.
- Management compresses the estimates.
- Scope remains mostly unchanged.
- Uncertainty appears.
- The team raises concerns.
- Leadership says, "We already committed."
- Quality becomes the only flexible variable left.
- People cut corners.
- The feature ships.
- Users discover what the deadline hid.
- Leadership asks why engineering quality is low.

This is not a mystery. It is a system.

Blind deadlines create blind engineering because they train everyone to stop looking too closely. Do not look too closely at the edge cases, the data migration, the onboarding flow, the support burden, or the fact that the feature technically exists but does not really solve the problem.

Just get it across the line.

That phrase has done a lot of damage because it often hides the most important question: across what line?

A line in the project management tool? A line in a manager's update? A line in a customer's contract? A line in the founder's anxiety?

Software does not care about your internal line. Customers do not care that the ticket moved. Reality grades the work after the ceremony is over.

## The African ecosystem needs more truth, not more scolding

This matters especially in African tech because our constraints are already heavy. Capital is harder. Trust is more fragile. Local purchasing power is weaker. Infrastructure can be unpredictable. Hiring is noisy. Senior talent is thin in many areas. Brain drain is real. Customers can be unforgiving because the margin for waste is low.

A market like this cannot afford management theater.

We cannot keep importing the worst habits of corporate software culture, mixing them with local power distance, then acting surprised that people become quiet, political, and disengaged. Many African workplaces already have a cultural problem with authority. Too many people are trained from school, family, church, and work to survive power rather than speak truth to it.

So when a founder or manager creates a company where disagreement is treated as disrespect, the result is not discipline. The result is silence.

And silence is expensive.

Silence means the junior who sees the bug says nothing. It means the mid-level engineer who knows the deadline is fake waits until the last responsible moment. It means the senior engineer who can see the architectural danger chooses diplomacy over clarity. It means the customer success person who keeps hearing complaints does not want to be labeled negative. It means the product manager writes a roadmap nobody believes. It means the founder is surrounded by updates but starved of truth.

That is how companies die while reporting progress.

The ecosystem does not need more founders shouting that employees do not care. It needs more founders asking whether their companies are safe places for serious people to care out loud.

## What managers should do instead

If you manage developers, your job is not to remove all pressure. Your job is to make pressure intelligent.

Start by separating estimates, commitments, and deadlines.

- **An estimate** is a current guess based on current knowledge.
- **A commitment** is a promise made after tradeoffs are understood.
- **A deadline** is a fixed date with consequences outside the team's preference.

Stop mixing those three things and calling it accountability.

Before you announce a date, ask the team what must be true for that date to hold. Before you pressure the team, ask what scope can move. Before you accuse people of being slow, ask what is blocking flow. Before you demand more updates, ask whether your last reaction to bad news made the next update more honest or less honest.

Before you create a metric, ask what behavior it will produce if people optimize for it. Before you call something done, ask whether the customer, the codebase, and the team would agree.

And when deadlines slip, do not only ask who failed. Ask what the system learned too late.

That question changes everything because it turns missed deadlines from courtroom drama into organizational learning. It does not remove accountability. It upgrades accountability from blame to truth.

## What engineers owe the culture too

Engineers are not exempt.

If you want management to trust you, you have to become easier to trust. That means communicating early, not when everything is already on fire. It means explaining uncertainty clearly. It means giving options, not just problems.

It means saying, "We can hit Friday if we cut reporting, admin filters, and the CSV export. If those are required, Friday is not real."

That is a useful truth. "This is impossible" is not always useful. "Here are the tradeoffs" is useful.

Engineers also need to stop hiding poor communication behind technical depth. If the work is uncertain, say why. If the scope is growing, show where. If a decision is risky, write it down. If you need time to investigate, ask for an investigation window and come back with options.

Professionalism is not pretending certainty. Professionalism is making uncertainty legible.

The Agile Manifesto valued [responding to change over following a plan](https://agilemanifesto.org/), but it also valued working software, customer collaboration, and motivated individuals who are trusted to get the job done. That trust is not magic. Engineers participate in earning it by making reality visible before reality becomes a crisis.

The best engineers do not merely say no. They make the cost of yes visible.

## The real definition of done

So what does truly done mean?

It means the feature solves the problem it was meant to solve. It means the important edge cases have been considered. It means quality was not silently sacrificed to preserve a date nobody wanted to renegotiate. It means the team knows how to operate what it shipped. It means support is not about to inherit a mess engineering refused to see. It means the code is understandable enough for the next engineer to change. It means the tests cover the risk that matters. It means the customer experience works outside the demo path. It means the product is better, not merely the board greener.

This does not mean everything must be perfect. Perfect is another way to never ship.

Truly done is not perfect. Truly done is honest.

It is the best version of the work inside the time, scope, quality, and business constraints the team consciously chose. That word consciously is doing a lot of work. Bad teams make tradeoffs accidentally. Good teams make tradeoffs consciously. Bad managers pretend there are no tradeoffs. Good managers force the tradeoffs into the open while there is still time to choose.

## Maybe the ghosts are not the employees

So when someone says it is easier to see a ghost than an employee who cares, I understand the frustration.

But maybe the ghost in the company is not the caring employee.

Maybe the ghost is truth.

Everybody talks about it. Few people have seen it in the room. The roadmap is there. The dashboard is there. The standup is there. The sprint review is there. The performance review is there.

But truth is missing.

Nobody says the date is fake. Nobody says the feature is not actually useful. Nobody says the team is exhausted. Nobody says the quality is dropping. Nobody says the estimates are being laundered into promises. Nobody says the manager is rewarding theater. Nobody says the customer will not care that the internal deadline was met.

That is the culture problem. Not that people are incapable of caring, but that caring has been made too expensive.

If you want employees who care, build a company where caring has somewhere to go. Give it language. Give it protection. Give it metrics that see the system. Give it managers who can hear bad news without becoming small. Give it deadlines that force intelligent scope tradeoffs instead of silent quality collapse. Give it a definition of done that means something after the meeting ends.

Trust the people you hire, within reason, then build the visibility that makes that trust operational. The question is still waiting for every founder, manager, CTO, product lead, and engineering lead: do you want it checked off, or do you want it truly done? Your culture will answer before your mouth does.
