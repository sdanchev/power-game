import React from 'react';
export default function Epilogue({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Epilogue</h1>
      <div className="image-container">
        <img className="smaller-image" src="/assets/BanksyBalloon.png" alt="Banksy" />
        <div className="image-caption">
          Banksy, "Girl with Balloon", 2004
        </div>
      </div>
    <p></p>
    <p>Obviously, “games” like this one, posts on social media, texts on Substack, etc. are not going to change anything.</p>
    <p>Change will come in the form and timing determined by the large currents driving history's evolution through time.</p>
    <p>Nevertheless, it is important to note that there are good paths of change to explore, alternatives to authoritarian rule, paths that can bring about the change that so many of us crave to see.</p>
    <p>In the direction of better, stronger, more equal, more inclusive, richer, cleaner, more peaceful society.</p>
    <p>Such a change is possible.</p>
    <p>Is this utopian? Yes, largely.</p>
    <p>Still, some utopia may do us good, once in a while, if handled with care.</p>
    <p><highlight>Thank you for reaching the end of this game. I hope you enjoyed it.</highlight></p>
    <button onClick={() => setScene("Credits")}>Credits</button>
    <button onClick={() => setScene("OpeningScreen")}>Start over</button>
      </div>
  </div>
  );
}
