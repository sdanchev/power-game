import React from 'react';
import SocialWelfareGame from '../components/SocialWelfareGame';

export default function WelfareGameIntro({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Social welfare game</h1>
    <p>As you can observe in the game, the simple summation ignores distribution, while the maximin principle ignores the overall level of prosperity. By contrast, the Nash product formula, underlying the power principle, takes into account <highlight>both the total amount of wealth or power in a society and its distribution among members</highlight>.</p>
    <button onClick={() => setScene("Subsidiarity")}>Next</button>
    <button onClick={() => setScene("component:SocialWelfareGame")}>Back</button>
    <button onClick={() => setScene("PowerPrinciple")}>Way back</button>
    <button onClick={() => setScene("Implications")}>Jump to practical implications</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
