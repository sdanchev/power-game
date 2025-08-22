import React from 'react';
import SocialWelfareGame from '../components/SocialWelfareGame';

export default function WelfareGameIntro({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Social welfare game</h1>
    <p>As you can observe in the game, the simple summation ignores distribution, while the maximin principle ignores the overall level of prosperity. By contrast, the Nash product formula, underlying the power principle, takes into account both the total amount of wealth or power in a society and its distribution among members.</p>
    <button onClick={() => setScene("component:SocialWelfareGame")}>Next</button>
    <button onClick={() => setScene("Formula")}>Back</button>
    <button onClick={() => setScene("PowerPrinciple")}>Way back</button>
    <button onClick={() => setScene("Implications")}>Jump to practical implications</button>
    <button onClick={() => setScene("Summary")}>Jump to super-short version</button>
      </div>
  </div>
  );
}
