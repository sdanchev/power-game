import React from 'react';

export default function Intro4Libs({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Power to the People: Reforming the Institutions of Liberal Democracy, Starting from First Principles</h1>
    <p>The aidacious proposal presented here can be pigeonholed as belonging to the somewhat forgotten political school of <highlight>“radical liberalism”</highlight>, often shortened to “radicalism”, sometimes also referred to as “liberal radicalism” or “classical radicalism”.</p>
    <p>With individual liberty as a key political value,{" "}
  <a
    href="https://en.wikipedia.org/wiki/Classical_radicalism#Radicalism_and_liberalism"
    target="_blank"
    rel="noopener noreferrer"
  >
    this school of thought 
  </a>{" "}
        sought to uproot and redesign the political, social, economic and cultural institutions of its time to enable every citizen to take full advantage of his or her liberty.</p>
    <p><highlight>Wait, what? Liberalism, radicalism? Aren't we just sick of all these “-isms”?</highlight></p>
    <p>Socialism, communism, fascism. Words that come from the deep past. Smelling of naphthalene, stale breath, and damp closed spaces. Waking long-dead ghosts.</p>
    <p>The fall of the Berlin Wall did not bring the “end of history”, but it sure did bring the end of ideology.</p>
    <div className="image-container">
      <img src="/assets/BerlinWall.jpg" alt="Berlin Wall grafiti" />
      <div className="image-caption">
        Dimitry Vrubel mural “My God, Help Me to Survive This Deadly Love” first painted on the Berlin Wall in 1990 and restored in 2009. (photo © Jaime Rojo)
      </div>
    </div>
    <p>Vestiges of one-party communist regimes, in China, in Vietnam, run capitalist economies, with rather free private economic initiative, substantial income and wealth inequality, integrated in the supply chains of the global economy.</p>
    <p>Hard-right populist parties and administrations in Western democracies have reclaimed slogans from the 1930s, but their leaders get deeply offended when slapped with the adjective ‘fascists’.</p>
    <p>Leaders across the world, no matter how repressive, even despicable individuals like Putin, frame their political operation in the language of rights and democracy.</p>
    <p>Will of the people, the common good, prosperity, rule of law, happiness, fairness, justice, human rights, liberty. Ideas conceived with blood in past liberal struggles have become universals across political spaces and regimes.</p>
    <p>These concepts no longer have a bite; they can no longer stir emotions. Empty, hollowed out, zombie shells that can barely move, hijacked by a corrupting fungus.</p>
    <p>The different political propositions on offer nowadays seem to compete not in terms of fundamental ideas, visions or even programmes. It’s all about leaders’ charisma and efficiency.</p>
    <p>Is he (as is most often the case) likable? Does he say it as it is?</p>
    <p><highlight>Personas built on semi-scripted reality TV shows, news anchors, sportsmen, win the political popularity context.</highlight> Their political views are rarely scrutinised.</p>
    <p>Until very recently, all that mattered was how fast, how cheap, how less corrupt, a leader or a party would achieve shared social goals, or so it seemed. The candidate’s ideology or steadfastness to political principles was hardly an issue. The established democratic norms were seen as universal and consensual, to stay with us forever.</p>
    <p><highlight>For a short period of time, the lack of ideology was a blessing.</highlight></p>
    <p>The institutions that keep the constitutional order in the western liberal democracies run long and deep. They have maintained a particular status quo over many decades and in some cases over several centuries. Enshrining rigid rules protecting property rights from political frivolity, they have been rather successful in bringing about a significant rise in material prosperity.</p>
    <p><highlight>But this is no longer enough.</highlight> The surge of discontent is slowly (and in certain geographies, more rapidly) rising. Driven by {" "}
  <a
    href="https://on.ft.com/4kTUHyA"
    target="_blank"
    rel="noopener noreferrer"
  >
    stalled social mobility 
  </a>  
      , angst over technological change, anxiety over migration flows, shifts in the sectoral composition of economies, swings in the geopolitical tectonic plates.</p>
    <p>Even in the oldest liberal democracies, the social discontent has put at risk long-standing liberal norms and institutions.</p>
    <p>We need to reconsider, reevaluate and if needed redesign the institutions that shape our societies. To withstand the surging tide of discontent, bringing to the surface long-forgotten scum and impurities, we need to start thinking again in terms of coherent systems of ideas and approaches.</p>
    <p><highlight>Starting from first principles. With a clear view of an end goal.</highlight></p>
    <p>So that when this authoritarian tsunami has gone and its wreckage has settled, we can rebuild our societies stronger, healthier, more resilient and more agile.</p>
    
    <div className="image-container">
      <img src="/assets/Wave.jpg" alt="Crashing wave" />
      <div className="image-caption">
        Robert Longo, Untitled (Hellion), 2011, charcoal on paper
      </div>
    </div>

    <p>With purity of mind and clarity of intent. With an ‘-ism’ in the end.</p>
    
    <button onClick={() => setScene("PowerPrinciple")}>I’m mildly intrigued - tell me more about this proposal</button>
    <button onClick={() => setScene("component:Summary")}>I’m bored – take me to the TL;DR version</button>
      </div>
  </div>
  );
}


