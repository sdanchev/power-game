import React from 'react';
export default function Implications({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Practical implications</h1>
    <div className="image-container">
      <img src="/assets/LongoForest.png" alt="Forest by Robert Longo" />
      <div className="image-caption">
        Robert Longo, Untitled (Hercynian), 2011, charcoal on paper.
      </div>
    </div>
    <p>Power of all forms and its distribution across society is instrumental in shaping the social outcomes, but for the purposes of the “audacious proposal” presented here, we can <highlight>limit ourselves to political and economic power</highlight> as these forms of power depend most on the design and operation of institutions<sup>1</sup>.</p>
    <footnote> <sup>1</sup>Conventions, norms, rules, and organisations that govern the social order.</footnote>
    <p></p>
    <button onClick={() => setScene("EconomicPower")}>Redistribution of economic power</button>
    <button onClick={() => setScene("PoliticalPower")}>Redistribution of political power</button>
    <button onClick={() => setScene("PowerPrinciple")}>Back to theory</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
