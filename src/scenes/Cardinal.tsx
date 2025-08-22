import React from 'react';
import BrexitVotingSystem from '../components/BrexitVotingSystem';

export default function Cardinal({ setScene }) {
  return (
  <div className="scene-container"> 
      <div>
    <h1>Cardinal voting</h1>
    <div className="image-container">
      <img className="smaller-image" src="/assets/Cardinal.jpg" alt="Cardinal" />
      <div className="image-caption">
        Not such a cardinal (also not an original joke).
      </div>
    </div>
    <p>The <highlight> binary majoritarian approach is extremely poor</highlight> in terms of reflecting people’s preferences.</p>
    <p>Rarely there are only two alternatives to choose from. Take Brexit for example – nobody asked the UK voters which of several feasible alternatives to full EU membership they would have preferred, which resulted in subsequent Tory governments implementing a harsher than initially anticipated form of Brexit.</p>
    <p><highlight>Rank-choice voting</highlight>, where the citizens are asked to rank the various options presented to them (rather than accept or reject a single one) is a preferable format, already implemented in certain contexts (e.g. some US primaries). The resulting decision draws on a <highlight>richer set of information</highlight> on voter preferences, yet it is <highlight>still quite limited</highlight> compared to cardinal voting alternatives.</p>
    <p>In particular, the simple ranking of preferences does not take into account the <highlight>intensity of voter preferences</highlight>, i.e. how strongly the voters like or dislike the various options. <highlight>Cardinal voting</highlight> rules, which asks the voters to allocate a given number of points or scores (e.g. 100) across the various options, overcomes this issue.</p>
    <p>Another way to think about cardinal voting is to see it as giving each individual the right to vote multiple (e.g. 100) times. If they are fanatic supporters of a particular candidate or option, they could allocate all their votes or points to their preferred choice. But this voting system gives the option for <highlight>more moderate voters</highlight> who like some of the options (more than 1) and dislike others to express their preferences accordingly.</p>
    <p>Implementing the cardinal voting system with analogue means can be cumbersome and expensive. Asking people to do (simple) arithmetic with pen and pencil can be time-consuming and prone to errors. However, its implementation with <highilight>digital means is rather straigthforward</highilight>, as illustrated next, using the Brexit referendum as an example.</p>
    <button onClick={() => setScene("component:BrexitVotingSystem")}>Next</button>
    <button onClick={() => setScene("Frequency")}>Back</button>
    <button onClick={() => setScene("PoliticalPower")}>Way back</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
    );
}
