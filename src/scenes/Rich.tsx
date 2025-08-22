import React from 'react';
export default function Rich({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Limit the power of the extremely rich</h1>
    <p>In mainstream economic courses, we teach students about the <highlight>inefficiency</highlight> created by <highlight>market power concentration</highlight>.</p>
    <p>Monopoly power leads to higher prices and lower quantity supplied to the market, compared with perfect competition, resulting in a deadweight loss of welfare.</p>
    <p>Monopoly power is only justified when it leads to <highlight>useful innovations</highlight> (e.g. new drugs created due to patent protection) or when interventions may be costlier than the harm they try to prevent (e.g. in regulating the market power of consumer brands).</p>
    <p>We can extend this argument to economic power, going beyond the ability of companies to set prices in markets.</p>
    <p><highlight>A very rich individual is a very powerful individual.</highlight></p>
    <div className="image-container">
      <img className="smaller-image" src="/assets/LV.png" alt="XOOOOX" />
      <div className="image-caption">
        XOOOOX, Sit lady, 2008
      </div>
    </div>
    <p>Making decisive contributions to election campaigns, owning media conglomerates and sports clubs, being able to afford and use an army of top-notch lawyers, living in isolated fortresses or abroad, a very rich individual can <highlight>substantially skew the playing field</highlight> in his (as is usually the case) interest, while insulating himself and his family from the adverse effects of his actions on society overall.</p>
    <p>Setting a limit on power accumulation would ensure that there is a <highlight>sufficient number of equally powerful individuals</highlight> so that the <highlight>political market</highlight> is in a state of <highlight>healthy competition</highlight>, a key prerequisite for a functioning democracy.</p>
    <p>This policy could take the form of a <highlight>restriction on the total value of assets</highlight> an individual could own at the end of a fiscal year. If the limit is exceeded, the individual would be given the opportunity to donate the excess amount to a favourite charity or other individuals.</p>
    <p>Obviously, a lot of work would need to be done to close loopholes, such as making sure all company wealth is traceable to the individuals owning it, setting limits on charity reserves in relation to expenses on programmes, etc., but the threat of loopholes should not preclude us from considering such a fundamentally important policy.</p>
    <p>The limit on wealth should be set at a <highlight>high enough level</highlight> to allow for very comfortable living, so that it continues to stimulate innovation, effort, and accumulation of skills, but also low enough so that many people can achieve it.</p>
    <p>USD 1 billion per person is a level that enters such discussions. It is high enough, isn't it? Would you put your feet up and not work hard if I told you that the most you could accumulate is a billion dollars?</p>
    <p>At the same time, there are already quite a few billionaires in the world. Setting a limit at USD 1 billion would spread wealth around, so their number would increase further. Trickle-down economics is a dubious concept, but with the threat of IRS enforcing it, excess wealth may indeed start flowing over the rim and down the wealth distribution ladder.</p>
    <p>What about the <highlight>founder-owner of unicorn companies</highlight> who happen to become billionaires because of the stellar success of their super clever idea? Wouldn't setting such a ceiling prevent us from having the next Tesla, Apple, Microsoft, Google, etc.?</p>
    <p>While this argument certainly has some merit, it is hard for me to believe that once a company has indeed reached an equity value of USD 1 billion, it cannot continue to successfully develop and innovate, unless a single individual continues to have a majority stake in the company. I am not underestimating the significance of entrepreneurial drive in order to create a successful company and make it grow fast, but surely once it has become a very large company, it can benefit from some <highlight>oversight coming from diversified ownership</highlight>.</p>
    <p>The universal wealth ceiling can be <highlight>beneficial for the billionaires themselves</highlight>. The rat race to be on top or higher than a competitor can be draining. </p> 
    <p>They can continue competing (as they do) in terms of the aesthetic quality of their possessions, the greatness of their <highlight>charity work</highlight>, etc. But they can ease from the effort to accumulate more economic power, taking comfort from the <highlight>reduced threat of hostile takeovers</highlight> and the improved quality of social institutions, including <highlight> property law enforcement</highlight>, that comes from living in a more equal and inclusive society. <highlight>It is all good, all around</highlight>.</p>
    <p>Note that the argument here is <highlight>not</highlight> based on traditional considerations of <highlight>fairness or social justice</highlight>. The argument is purely consequentialist - extreme wealth concentration translates into <highlight>extreme concertation of economic power</highlight>, which skews the distribution of political power, with a corruptive influence on democracy and social cohesion. This leads to a substantially reduced power for a large number of individuals, and thus a <highlight>weaker society</highlight>, and thus a worse social outcome, as argued in {" "}
    <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("PowerPrinciple"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >the theoretical section</a>{" "} of the proposal.</p>
    <button onClick={() => setScene("PoliticalPower")}>Next</button>
    <button onClick={() => setScene("Weak")}>Back</button>
    <button onClick={() => setScene("Implications")}>Way back</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
