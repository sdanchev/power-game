import React from 'react';
import HistoricalEventsSurvey from '../components/HistoricalEventsSurvey';

export default function Intro4Cons({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Interesting...</h1>
     <div className="image-container">
        <img className="smaller-image" src="/assets/Abstract.png" alt="Abstract art" />
        <div className="image-caption">
          Richard Mortensen, Untitled, 1939
        </div>
      </div>
    <p></p>
    <p>I hope you enjoyed the quiz. </p>
    <p> Let's do some more interactive stuff – next we have some events in history.</p>
    <p>Can you place them in their right chronological order? What do you think about their long-term impact on social history?</p>
    <button onClick={() => setScene("component:HistoricalEventsSurvey")}>Next</button>
      </div>
  </div>
  );
}
