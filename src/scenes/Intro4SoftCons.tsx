import React from 'react';
import HistoricalEventsSurvey from '../components/HistoricalEventsSurvey';

export default function Intro4Cons({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Good</h1>
    <p>I hope you enjoyed the history quiz too.</p>
    <p>But enough with surveys and quizes, let's dive into the reform proposal, starting from some first principles.</p>
    <button onClick={() => setScene("PowerPrinciple")}>Next</button>
      </div>
  </div>
  );
}
