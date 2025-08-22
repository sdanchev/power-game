import React from 'react';
import './OpeningScreen.css';

export default function HardCoreExit({ setScene }) {

  const handleEndGame = () => {
    alert("Thanks for playing!");

    // Try to close the window
    window.close();

    // Fallback: if the window is still open, redirect to blank page
    setTimeout(() => {
      if (!window.closed) {
        window.location.href = "about:blank";
      }
    }, 100);
  };

  return (
   <div className="scene-container"> 
      <div>
    <h1>Oh, well...</h1>
    <div className="image-container">
      <img className="smaller-image" src="/assets/BanksyBalloon.png" alt="Banksy" />
      <div className="image-caption">
        Banksy, "Girl with Balloon", 2004
      </div>
    </div>
    <p></p>
    <p>Your political values are way out there (no offense).</p>
    <p>It would be very difficult to convince you about the merits of the proposal outlined further down, and most probably continuing with this game would just be a waste of your time.</p>
    <p>Nevertheless, if you are still curious, you are welcome to go on reading.</p>
    <button onClick={() => setScene("PowerPrinciple")}>Continue</button>
    <button onClick={() => setScene("component:Summary")}>Show me the super-short version</button>
    <button onClick={handleEndGame}>End this</button>
      </div>
    </div>
  );
}
