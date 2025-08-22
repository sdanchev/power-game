import React from 'react';
export default function Frequency({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Voting frequency and digital technology</h1>
    <p>Frequency matters - in places that hold frequent referenda, on all sorts of issues, there is <highlight>less scope for a mindless protest vote</highlight> on any single occasion.</p>
    <p>If you, as a citizen, are asked more often to make decisions on issues that matter to you, it is more likely that you would <highlight>genuinely express your preferences</highlight> on that particular issue, rather than use the opportunity to express your frustration with the overall system.</p>
    <p>Having said that, voting in representative democracies is an <highlight>expensive affair</highlight>.</p>
    <p>Setting up election booth, printing out ballots and leaflets, running political advertisements, convening political rallies, building huge and complex organisations simply to convey the political message to vote for this or that candidate or option, can cost many hard-currency dollars, millions even.</p>
    <p>The need to raise these funds is a <highlight>major source of corruption</highlight>, transforming economic into political power.</p>
    <p>Elections to select representatives for the legislative and/or executive branches cannot and should not be too frequent, as they are both expensive and disruptive.</p>
    <p>Nevertheless, <highlight>digital technology has lowered immensely the cost of communication</highlight> and has upped its speed to the limit.</p>
    <div className="image-container">
      <img className="smaller-image" src="/assets/BallotBox.jpg" alt="Old voting box" />
      <div className="image-caption">
        Box for voting with marble balls, late 19th century, Greece.
      </div>
    </div>
    <p>Most people living today have or could have a <highlight>mobile phone</highlight> in their pocket or purse. Most of these phones have internet access.</p>
    <p>With a device that you carry all the time on you, you can receive instantly information on any topic, order food, book airplane tickets, buy almost everything that is being sold on a market, do banking transactions, enter public transport, museums, and any other place that requires a ticket, communicate with specific individuals, or post information that is potentially accessible instantly to billions of people. You may even be reading this from such a magic device.</p>
    <p><highlight>What you cannot do with it (in most jurisdictions) is cast a vote to decide something politically important.</highlight></p>
    <p>It is certainly technologically possible to have a <highlight>digital voting technology</highlight>, operating at a tiny fraction of the cost of current elections, that respects vote secrecy and keeps the probability of fraud low.</p>
    <p>I’m no specialist in this but since we have <highlight>tokens to protect the anonymity of payers</highlight> in digital payments and blockchain technology as <highlight>transparent ledgers</highlight> for cryptocurrency transactions, vote secrecy and fraud do not seem as showstoppers to having frequent voting on policy issues implemented through digital means.</p>
    <p><highlight>What issues could be delegated to direct votes?</highlight></p>
    <p>The mundane everyday implementation issues should be dealt with by public administration officers and representatives overseeing the executive branch of government. Direct voting should concern issues that determine the <highlight>strategic direction of society</highlight>.</p>
    <p>The <highlight>EU Better Regulation (BR)</highlight> agenda provides a good framework. Evaluations, fitness checks, impact assessments and strategic foresight exercises review existing policies, programmes and legislation and examine the possible impacts of available new solutions.</p>
    <p>Building on this framework, instead of the European Commission selecting one of the examined solutions and then toiling for months and sometimes years to push it down the throats of <highlight>unwilling nation-state representatives</highlight> at the Council of the EU, the set of option could be presented for an EU-wide direct vote.</p>
    <p>An indicative example comes from the EU Nature Restoration Law, a key pillar of the European Green Deal, aiming to reverse the decline of Europe's natural habitats and species.</p>
    <p>Before the drafting of these regulations, the EC commissioned an {" "}
      <a href="https://t.ly/2M1-1" target="_blank" rel="noopener noreferrer"> ex-ante impact assessment
      </a> 
      . Published for public consultation in 2022, it examined the impacts of various policy options, including a baseline scenario (no further policies than those already adopted), an option for overarching legally binding target for ecosystems, an option for specific targets for ecosystems, habitats or groups of species and a fourth option that combined the previous two.</p>
    <p>The EC ran with the option that seemed to produce the best impact, but its proposal faced strong backlash from several member states, due to pressure from agricultural lobbies and political parties opposed to the environmental agenda with strong presence in some countries. Political horse-trading, {" "}
      <a href="https://t.ly/lULKn" target="_blank" rel="noopener noreferrer"> with Hungary withdrawing its support before a crucial vote
      </a>, also took place.</p>
    <p>At the end, the law adopted in 2024 was substantially watered down, despite the fact that it had a {" "}
      <a href="https://t.ly/4Lx59" target="_blank" rel="noopener noreferrer"> strong popular support even in the member-states opposing its adoption
      </a>.</p>
    <p>It is very likely that putting the policy options identified in the ex-ante impact assessment to an <highlight>EU-wide public vote</highlight> would have resulted in a decision <highlight>much better aligned with what the citizens of the EU would have wanted</highlight>, in a much shorter timeframe.</p>
    <button onClick={() => setScene("Cardinal")}>Next</button>
    <button onClick={() => setScene("Representative")}>Back</button>
    <button onClick={() => setScene("PoliticalPower")}>Way back</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
