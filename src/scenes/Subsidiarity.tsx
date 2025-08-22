import React from 'react';
export default function Subsidiarity({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Secondary principles: No-harm and subsidiarity principles</h1>
    <p>Knowledge is a key consideration that should be taken into account when applying such high-minded political principles.</p>
    <p>A fundamental tenant of liberalism is that knowledge is localised - as a rule, <highlight>everyone knows better than anyone else what is in his or her own best interest</highlight>.</p>
    <p>There are, of course, exceptions to this rule that each of us can find in our own personal experiences. But the key point is that <highlight>individual autonomy and liberty are the default condition</highlight> - their violation should be justified based on solid evidence that an individual's decision or behaviour is detrimental, in one sense or another.</p>
    <div className="image-container">
      <img src="/assets/JSM.jpg" alt="JSM" />
      <div className="image-caption">
        “The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others. His own good, either physical or moral, is not a sufficient warrant.”<sup>[1]</sup>
      </div>
    </div>
    <p>The localised nature of knowledge applies to social units too. The members of a family, a community, a neighbourhood are presumed to know better than outsiders what is in the best interest of that family, community or neighbourhood.</p>
    <p>Extending this approach to local and regional authorities, nation states and supranational institutions, we arrive at the <highlight>subsidiarity principle</highlight>, enshrined in the EU legal framework.</p>
    <p>According to the subsidiarity principle, matters ought to be handled by the <highlight>smallest, lowest, or least centralised competent authority</highlight> - a higher level of authority should only intervene if the objectives cannot be effectively achieved at the lower level.</p>
    <div className="image-container">
      <img src="/assets/EUflag.jpg" alt="EUflag" />
      <div className="image-caption">
        “In areas which do not fall within its exclusive competence, the Union shall act only if and in so far as the objectives of the proposed action cannot be sufficiently achieved by the Member States... but can rather, by reason of the scale or effects of the proposed action, be better achieved at Union level.”<sup>[2]</sup>
      </div>
    </div>
    <p>We can next discuss how the power principle, together with the no-harm and subsidiarity principles, can substantiate ideas on reforming key institutions of liberal democracies.</p>
    <footnote> <sup>1</sup> John Stuart Mill, On Liberty, ed. Elizabeth Rapaport (Indianapolis: Hackett Publishing Company, 1978), 9.]</footnote>
    <footnote> <sup>2</sup> Treaty on European Union, Article 5(3), consolidated version 2016]</footnote>
    <p></p>
    <button onClick={() => setScene("Implications")}>Next</button>
    <button onClick={() => setScene("component:SocialWelfareGame")}>Back</button>
    <button onClick={() => setScene("PowerPrinciple")}>Way back</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
