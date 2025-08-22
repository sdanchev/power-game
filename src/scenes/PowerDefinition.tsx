import React from 'react';
export default function PowerDefinition({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>The Meaning of Power</h1>
    <p>Power here is defined simply as the <highlight>ability of an individual to determine outcomes</highlight>.</p>
    <p>According to Betrand Russell, power is a quantitative concept – an individual A has more power than individual B, if “A achieves many intended effects and B only a few” (Russel, 1938:23).<sup>1</sup></p>
    <div className="image-container">
        <img className="smaller-image" src="/assets/Pink.png" alt="PINK graffiti" />
        <div className="image-caption">
          Pink by Lady Pink, 1984, Miami.
        </div>
      </div>
    <p>In terms of the simple consumer choice model taught in undergraduate economic courses, power of the consumers corresponds to the size of their budget sets – the more income they have the more goods they can choose to consume.</p>
    <p>In terms of more advanced models of economics and political theory, power can be seen to correspond to the size of the choice set – the more options the individuals have available to choose from, the more power they have.</p>
    <p>But in the “audacious proposal”, the idea of power goes beyond the size of the budget or choice sets.</p>
    <p>My choice set and thus my power may be limited not only by wealth and material circumstances, but also by lack of knowledge (e.g. of my rights) or underdeveloped skills. Options in my choice set may be very desirable or good in some objective sense, but I might never opt for them for various reasons, such as social norms, peer pressure, the influence of charismatic individuals, or simply ignorance.</p>
    <p>While economists and political theorists may prefer assigning such subjective notions to preferences, it is more instructive, for the purposes of the ideas developed here, to assign them to the power notion, making it subjective or perceived. Some of the power that people possess depends on their understanding and beliefs and is not fully determined by objective, material, external circumstances.</p>
    <p>Meanwhile, my power may expand well beyond the choice set determined by my material circumstances (or the game set by an economist or political theorist) if I can influence or manipulate others into bringing about effects that suit my interests.</p>
    <p><highlight>In simpler terms, if I can lift more weight, run faster, hit harder, I can achieve more intended effects, so I’m more powerful.</highlight></p>
    <p><highlight>I’m also more powerful if I’m healthier, wealthier, calmer, more knowledgeable, with better soft skills, with a larger and stronger network of friends, co-dependants or followers.</highlight></p>
    <p>Power comes in many shapes and forms. Russell writes about priestly power, kingly power, naked power, revolutionary power, economic power and power over opinion.</p>
    <p>For the purposes of our discussion, we will focus on political and economic power.</p>
    <footnote> <sup>1</sup> Russel, B. (1938). Power. George Allen & Unwin Ltd. London.</footnote>
    <p></p>
    <button onClick={() => setScene("UtilitarianismCompared")}>Next</button>
    <button onClick={() => setScene("PowerPrinciple")}>Back</button>
    <button onClick={() => setScene("Implications")}>Jump to practical implications</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
