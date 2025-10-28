import React from 'react';
export default function Epilogue({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <p>Epilogue</p>
    <p>Obviously, “games” like this one, posts on social media, texts on Substack, etc. are not going to change anything.</p>
    <p>Change will come in the form and timing determined by the large currents driving history’s evolution through time.</p>
    <p>Nevertheless, it is important to note that there are good paths of change to explore, alternatives to authoritarian rule, paths that can bring about the change that so many of us crave to see.</p>
    <p>In the direction of better, stronger, more equal, more inclusive, richer, cleaner, more peaceful society.</p>
    <p>A change that does not pressupose people starting to think and act differently than they do today.</p>
    <p>Such a change is possible.</p>
    <p>Thank you for reaching the end of this game. I hope you enjoyed it.</p>
    <button onClick={() => setScene("Credits")}>Credits</button>
    <button onClick={() => setScene("OpeningScreen")}>Start over</button>
      </div>
  </div>
  );
}
