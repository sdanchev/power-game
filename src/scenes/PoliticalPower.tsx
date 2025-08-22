import React from 'react';
export default function PoliticalPower({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Redistribution of political power</h1>
    <p>Most political institutions of <highlight>modern liberal democracies</highlight> are well aligned with the “audacious proposal” presented here.</p>
    <p>Rule of law, constitutional restraints, independent courts, independent authorities, separation of powers, various checks and balances, protection of basic rights, the right to an attorney, the presumption of innocence, freedom of speech, freedom of assembly, civil society, social safety nets, and many other institutions, <highlight>when functioning according to stated purpose, smooth out the distribution of power</highlight>, prevent its excessive concentration, and empower vulnerable individuals.</p>
    <p>In many jurisdictions, these institutions do not function perfectly well, in some they <highlight> function rather poorly</highlight>, but they do not have any <highlight>obvious design flaws</highlight> as such for us to address here.</p>
    <p>There are, however, <highlight>two major political institutions</highlight> at the core of the liberal democracy model that are in a <highlight>dire need of reform</highlight>.</p>
    <p>Institutions created in a particular moment of history, reflecting a particular level of <highlight>technological development</highlight>, serving specific needs of that age.</p>
    <p>Institutions that are <highlight>no longer fit for purpose</highlight> in our digital age.</p>
    <p>These institutions are <highlight>the nation-state</highlight> and <highlight>representative democracy</highlight>.</p>
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mmo3HFa2vjg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <button onClick={() => setScene("Nation")}>Next</button>
    <button onClick={() => setScene("EconomicPower")}>Back to economic power</button>
    <button onClick={() => setScene("PowerPrinciple")}>Back to theory</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
