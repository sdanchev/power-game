import React from 'react';
export default function Credits({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Credits</h1>
    <p>This text game was written by a political junkie, (over-)working as a mediocre economist, while trying to overcome the summer vacation boredom, by playing with AI tools and learning some code.</p>
    <p>Most interactive elements were initiated with Claude.AI. After hitting the message limit of my free plan with some of the artefacts, I did some debugging with Visual Studio Code, aided by its Copilot (with the ChatGPT API).</p>
    <p>I was also asking ChatGPT and Claude.AI for help directly, when stuck for ideas or with the coding part.</p>
    <p>Most images of art works were snapped during visits to the Lousiana Museum of Modern Art (Humlebæk), MACA Museum (Copenhagen), Kornborg Castle (Helsingør) and the National Gallery of Denmark.</p> 
    <p>Some images in the interactive segments were generated with Grok (yeah, I know, shame on me…).</p>
    <p>Gemini was also helpful in a few searches.</p>
    <p>The stencil font used for the headings is Black Ops One, designed by James Grieshaber and Eben Sorkin, and downloaded from Google Fonts. The brick wall background was designed by Benjamin Ward and was downloaded from Transparent Textures.</p>
    <p>The texts within the interactive components were mostly written by Claude.AI, while outside of the interactive elements the texts were mine, with very few annotated exceptions.</p>
    <p>Obviously, all expressed views are mine alone and do not represent any affiliated organisations.</p>
    <button onClick={() => setScene("Epilogue")}>Back</button>
    <button onClick={() => setScene("OpeningScreen")}>Start over</button>
      </div>
  </div>
  );
}
