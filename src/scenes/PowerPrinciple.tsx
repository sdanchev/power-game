import React from 'react';
import './OpeningScreen.css';

export default function PowerPrinciple({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>The power principle</h1>
    <p>The fundamental principle behind the “audacious proposal” presented here is that <highlight> a good society is a strong society</highlight>, where strength draws on the compound power of all members that form that society. </p>
    <p>A society is a better society when the ability of its members to shape their life and its outcomes is enhanced.</p>
    <p>People in <highlight>richer societies</highlight> have more power to shape their life and thus, everything else being equal, richer societies are better societies to live in.</p>
    <p>Societies where <highlight>more people have the skills and resources</highlight> to manage adequately their life and shape social outcomes are better societies.</p>
    <p>Societies with a <highlight>more equal distribution</highlight> of economic and political power, ceteris paribus, i.e. with the same total wealth, are better societies, as more people have enhanced capability to shape their life’s outcomes.</p>
    <p>Societies where an individual, a family, a clan, a tribe, a race, a class, a cast, or a gender represses the remaining members, is ultimately a weak society.</p>
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ejgC1yQxEe8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <p>Repressive regimes may seem strong, and they often are, but only in the short term. They are also brittle, with repression creating tensions that build up beneath the surface, ready to burst the whole thing in pieces, once the regime loosens its grip for a reason it cannot control (senility or death of a dictator, succession troubles, infighting within the ruling elite, defeat in a war, weakening external support from another state, an environmental disaster, economic or technology shocks, etc.).</p>
    <p>The broader the power base of repressive regimes, the more resilient they are to external shocks. But they are not as strong as inclusive societies, <highlight>societies with minimal repression and no discrimination</highlight>, which by definition <highlight>have the widest possible power base.</highlight></p>
    <div className="image-container">
      <img src="/assets/LongoGuns.jpg" alt="Robert Longo" />
      <div className="image-caption">
        Robert Longo, Bodyhammer series, 1993-1994, graphite and charcoal on paper.
      </div>
    </div>
    <p>Repressive regimes, ceteris paribus, end up with worse economic outcomes as well. They rely on extractive institutions, which are not conducive to economic development and material prosperity over the long term.</p>
    <p>The main reason why former colonies in Latin America, Africa and Asia are economically underdeveloped can be traced to the bad quality of their institutions, set up by repressive empires with the aim of cementing the power of few to extract resources for the motherland.<sup>1</sup></p>
    <p>As the meaning of words is often imprecise, economists and ethicists often prefer to formulate such principles in mathematical form. You can look into the math in the link below, read more about the meaning of power here, check out how this principle compares to a similar idea in political philosophy (utilitarianism), play a game illustrating these differences, explore secondary principles used in the audacious proposal, jump to the practical implications or go straight to the super-short version.</p>
    <footnote> <sup>1</sup> Acemoglu, D., & Robinson, J. A. (2012). Why nations fail: The origins of power, prosperity, and poverty. Crown Business.</footnote>
    <button onClick={() => setScene("PowerDefinition")}>The meaning of power</button>
    <button onClick={() => setScene("UtilitarianismCompared")}>Comparison with utilitarianism</button>
    <button onClick={() => setScene("Formula")}>Some math</button>
    <button onClick={() => setScene("component:SocialWelfareGame")}>Social welfare game</button>
    <button onClick={() => setScene("Subsidiarity")}>Secondary principles</button>
    <button onClick={() => setScene("Implications")}>Jump to practical implications</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
