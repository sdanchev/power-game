import React from 'react';
import Summary from '../components/Summary';

export default function Licensing({ setScene }) {
  return (
  <div className="scene-container">
    <div>
  <h1>Subject-specific voter licensing</h1>
  <p>Not everybody has <highlight>digital skills</highlight> to participate in digital cardinal voting.</p>
  <p>Elderly, poorly educated, digitally illiterate people would be cut off from the process.</p>
  <p>Furthermore, by delegating more of the decision-making process to the wider citizenry, the level of <highlight>specialisation</highlight> of the issues that they would be asked to vote on would deepen.</p>
  <p>There is a risk that many of the issues that would be asked from people to decide on would be <highlight>too technical</highlight> for their level and type of expertise.</p>
  <p>Also, the threat of <highlight>referenda fatigue</highlight> could become palpable.</p>
   <div className="image-container">
        <img src="/assets/LongoPeople.png" alt="Robert Longo" />
        <div className="image-caption">
          Robert Longo, from the series ‘Men in the Cities', 1981
        </div>
      </div>
  <p>To match the level and type of expertise of the voters with the technical nature of the issues to be decided upon and reduce the risk of fatigue, the final element of the audacious proposal contains the idea of <highlight>subject-specific voter licensing</highlight>.</p>
  <p>Under this proposal, each issue that is put to the voters to decide upon is <highlight>tagged by subject matter</highlight>.</p>
  <p>For example, the {" "}
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("Frequency"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
        Nature Restoration proposal discussed previously  
      </a>{" "} could have been tagged with subjects such as "environment”, “agriculture”, “fisheries”, and “land use”.</p>
  <p>Correspondingly, each voter would be licenced to vote on particular subject matters, based on their <highlight>education, professional experience and/or success in voter licencing exams</highlight>.</p>
  <p>Indicatively, a person with a degree or at least 3-year professional experience in a relevant area could be licenced to vote on an issue correspondingly tagged. For example, if you have a degree in environmental studies or have managed a farm for sufficient number of years, it is likely that you are going to understand well what policy options work better for restoring natural habitats and biodiversity. But the vote should also be <highlight>open to all citizens with a strong interest on such matters</highlight>, as long as they prove that they have some basic understanding of one of the corresponding subject areas.</p>
  <p>Many countries already have citizenship tests, with multiple-choice questions, essay writing, and/or oral examination, for foreigners that want to become citizens of another country, so there is a precedent.</p>
  <p>There are also widespread tests on foreign languages, driving, and other skills.</p>
  <p>A corresponding system for <highlight>testing policy subject matters</highlight> could be fairly easily implemented, for individuals interested in exercising their voting rights on particular issues when they cannot cover the requirements through their education history or professional experience.</p>
  <p>I am an economist. I have no idea about most issues that do not involve economics or finance. Preservation of cultural heritage, biodiversity protection, farming, urban planning, transport policy, policing, military strategies, etc., etc., are beyond me. I can form a relatively informed opinion on economic and financial matters, if I spend some time on them, but on all those other matters, any voting on my part would be based on emotions and associations, rather than a rational, mindful process.</p>
  <p><highlight>To drive a car, we need a licence.</highlight> To drive a motor bike or a truck, we need another licence, as the skills involved are different. We require <highlight>licencing for many activities and professions</highlight>, including doctors, dentists, lawyers, accountants, even hairdressers (in some jurisdictions).</p>
  <p>Some activities are simply <highlight>too important or dangerous</highlight> to be left free for anyone to practice at will. Making decisions that set the <highlight>strategic direction</highlight> of a community, a region, a country, a continent, or the world at large is <highlight>also very important</highlight>.</p>
  <p>At first glance, this idea <highlight>may seem undemocratic</highlight>. So much fighting was done through the centuries to achieve <highlight>universal suffrage</highlight>. Surely, the proposal here is not to limit the democratic franchise, is it?</p>
  <p>Every citizen should have the right to participate in the democratic process. All citizens will continue to have the <highlight>right to elect their representatives</highlight>.</p>
  <p>The proposal does not get rid of the institutions of representative democracy as such. It diminishes the concentration of power in the hands of elected representatives, by delegating the power on strategic decisions directly to knowledgable electorate.</p>
  <p><highlight>No more low-information voters electing low-information leaders making major decisions in an imbecile way.</highlight></p>
  <p>The proposal outlined here enhances <highlight>people's participation</highlight> in the democratic decision-making process, making it much more <highlight>direct, swift, and powerful</highlight>.</p>
  <button onClick={() => setScene("component:Summary")}>Next</button>
  <button onClick={() => setScene("component:BrexitVotingSystem")}>Back</button>
  <button onClick={() => setScene("PoliticalPower")}>Way back</button>
    </div>
  </div>
  );
}
