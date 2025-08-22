import React from 'react';
import DemocracyQuiz from '../components/DemocracyQuiz';

export default function Nation({ setScene }) {
  return (
  <div className="scene-container">
    <div>
  <p>To take a break from text and before moving to the next section, how about taking a quick quiz?</p>
  <DemocracyQuiz />
  <button onClick={() => setScene("Representative")}>Next</button>
  <button onClick={() => setScene("PoliticalPower")}>Back</button>
  <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
    </div>
  </div>
  );
}
