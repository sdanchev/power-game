import React from 'react';
export default function EconomicPower({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Redistribution of economic power</h1>
    <p>We can improve society (i.e.{" "}
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("PowerPrinciple"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
        achieve “greater power to the greatest number” 
      </a> 
        {" "} or {" "}
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("Formula"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
        score higher on the Nash product of individual powers 
      </a>
        ) if we boost the capability of disadvantaged individuals, so that they can take better control of their life. </p> 
    <p>We can also improve society if we reduce power concentration at the high end of the distribution, as long as this does not lead to a decrease in the overall power score.</p>
    <p><highlight>Some economic inequality is justified, yet too much inequality is socially detrimental.</highlight></p> 
    <p>Some inequality <highlight>incentivises effort, innovation, and the accumulation of skills</highlight>. This grows the pie, making society richer and boosting our overall capability to shape our life’s circumstances. However, inequality that goes beyond providing incentives for innovation, education, and effort weakens our society.</p>
    <p><highlight>Extreme wealth is extremely wasteful.</highlight></p>
    <p>Let’s be real - there's no need to colonise Mars. Also, spending millions on sending random rich people and minor celebrities to outer space for 11 seconds is bonkers.</p>
    <p>More importantly, <highlight>unjustified inequality skews the distribution of political power</highlight>, poisoning the political process and undermining social cohesion.</p>
    <button onClick={() => setScene("Weak")}>Next</button>
    <button onClick={() => setScene("Implications")}>Back</button>
    <button onClick={() => setScene("PoliticalPower")}>Jump to political power</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
