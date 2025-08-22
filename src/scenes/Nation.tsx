import React from 'react';

export default function Nation({ setScene }) {
  return (
  <div className="scene-container">
    <div>
  <h1>Reform the nation-state</h1>
  <div className="chatgpt-box">
    Chat GPT intro: “The nation-state is a relatively recent institutional form, emerging in Europe in the wake of the Peace of Westphalia (1648), which marked the beginning of a system of sovereign states. Its development accelerated in the 18th and 19th centuries with the rise of nationalism, the spread of standardized languages, and the formation of centralized bureaucracies. While earlier polities—empires, kingdoms, city-states—exercised authority over diverse populations, the modern nation-state claims legitimacy through a shared national identity and the alignment of political boundaries with cultural or ethnic ones. Its global spread, particularly in the 20th century, was driven by decolonization and the principle of national self-determination."
  </div>
  <p></p>
  <p>The nation-state has been a <highlight>necessary step</highlight> on the path of social progress.</p> 
  <p>It has had a very violent history, exacerbating warfare, minority suppression and genocidal policies. Nevertheless, to the extent that it broke power concentration of empires into smaller territorial units, its spread has been largely aligned with the {" "}
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("PowerPrinciple"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
        power 
      </a> {" "}
     and {" "}
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("Subsidiarity"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
        subsidiarity 
      </a> {" "}
     principles outlined in the theoretical part of the proposal.</p>
  <p>Today, <highlight>the nation-state is a major impediment to social progress</highlight>.</p>
  <p>As a construct, it is <highlight>extremely challenging to implement</highlight> in territories with very <highlight>diverse</highlight> populations, given that its fundamental unifying concept is a <highlight>single identity</highlight>, separate from other “nations”.</p>
  <p>In places, such as Syria, Iraq, Libya, Ethiopia, etc., where other ethnic, racial, religious or tribal identities dominate and often extend beyond the country's borders, <highlight>forming a well-functioning, cohesive, and inclusive society is borderline impossible</highlight>.</p>
  <p>The idea of nationhood is <highlight>driving conflicts</highlight> around the world. It is fuelling the Isreal-Palestine conflict, the Russian invasion of Ukraine, the suppression of minorities in China, Myanmar, Turkey and elsewhere.</p>
  <p>More broadly, any single nation has <highlight>too much power</highlight> in regulating issues that are better resolved at the local level and <highlight>too little power</highlight> to solve the pressing global issues of today.</p>
  <p>Individuals or groups in control of national executive, legislative, and judiciary institutions yield excessive power. Their concentration of power serves as a magnet, <highlight>a focal point of corruption</highlight>, as interest groups compete for control over the decisions made at the national level.</p>
  <p><highlight>Institutions at both the global and the local level should become stronger</highlight>, mitigating the power concentrated at the nation-state level.</p>
  <p>The subsidiarity principle demands that decisions are made at the <highlight>lowest possible efficient level</highlight>.</p>
  <p>Universal standards, such as protection of basic human rights, should be set at the highest possible (i.e. global) level, as there should be no room for variation in their implementation (otherwise they would not be universal).</p>
  <p>In addition, there are issues that require <highlight>coordination at the global level</highlight>, as otherwise there is a strong incentive for jurisdictions to deviate, enjoying the benefits from the policy while freeriding on paying the cost of its implementation.</p>
  <p>There should be some <highlight>minimum standards</highlight> set on environmental policy, social protection, labour rights, consumer safety etc. that should allow for decent and sustainable living across the world population, without jeopardising economic growth.</p>
  <p>The UNFCCC COP should be in the position to make legally binding decisions on how to mitigate climate change and allocate the cost of climate change mitigation and adaptation across the world in an efficient and fair way, <highlight>without national governments having veto power</highlight> or the option to freeride on their commitments.</p>
  <p>The global institutions of economic governance (IMF, World Bank, WTO) should be in the position to coordinate economic policy (by approving changes in exchange rates, interest rates, tariff levels, state aid subsidies, taxation floors, funding instruments, etc.) in order to prevent economic crises, ensure level-playing field for businesses, and support economic development in poorer regions, <highlight>without orange-tanned buffoons uprooting the global economy</highlight> on a whim.</p>
  <p>The UN Security Council should be in the position to prevent armed conflict, without dictators or nation-state governments, hostage to powerful lobby groups that can overturn elections in marginal seats, yielding veto power.</p>
  <p>Disputes on borders, minority rights, use of marine resources, and other issues that cannot be resolved at a supranational, country or local level, should be arbitrated effectively and efficiently at the level of the UN, without the possibility of a nation-state veto or an opt-out.</p>
  <p>Less fundamental issues that do not face serious coordination problems should be resolved at lower levels of authority.</p>
  <p>Regional blocs, countries, regional and local authorities whose population desire to have a stronger welfare state provision than the global minimum social protection floors, cleaner environment than the minimum global environmental standards, or any other policy that goes beyond a minimum global standard, should be free to do so.</p>
  <p><highlight>Most issues that bug people around the world are local issues.</highlight></p>
  <p>Crime prevention, road congestion, regularity of urban transport, the cleanness of streets, squares, parks and beaches, housing availability and affordability, building permits, land use for economic activity, etc. – these are issues that local authorities should have the remit and resources to deal with effectively.</p>
  <p>They should have the mandate and the autonomy to collect sufficient tax revenues and make their own budget allocation decisions, based on the priorities of the local population.</p>
  <p>There is room for efficiency gains by coordinating some of these functions at a regional or even country level, but the default setup should be as decentralised as possible.</p>
  <p><highlight>We should shift the locus of sovereignty from the nation-state to the individual citizen.</highlight></p>
  <div className="image-container">
    <img src="/assets/Albrecht.jpg" alt="King Albrecht hands over the Swedish crown to Queen Margaret I in 1389" />
    <div className="image-caption">
      Gerard van Honthorst, King Albrecht hands over the Swedish crown to Queen Margaret I in 1389, ca. 1640, Kornborg Castle
    </div>
  </div>
  <p> How can we make sure that the decisions taken at supranational level have <highlight>legitimacy</highlight> if they are not made by representatives of sovereign nation-states? How can we make sure that there is <highlight>democratic control over supranational and global institutions</highlight>, taking decisions impacting billions of people, spread over huge distances?</p>
  <p>The reform that diminishes the power of the nation-state should come together with a reform that makes fuller use of <highlight>direct democracy instruments</highlight> on the supranational level.</p>
  <button onClick={() => setScene("DemocracySurveyIntro")}>Next</button>
  <button onClick={() => setScene("PoliticalPower")}>Back</button>
  <button onClick={() => setScene("component:Summary")}>Jump to the TL;DR version</button>
    </div>
  </div>
  );
}
