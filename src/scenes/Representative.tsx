import React from 'react';
export default function Representative({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Representative democracy reform</h1>
    <div className="chatgpt-box">
    Chat GPT intro: “Representative democracy arose as a practical solution to the problem of governing large, territorially dispersed populations. While ancient direct democracies, like that of Athens, were limited to small city-states, modern representative systems developed in the 17th and 18th centuries, notably with the English Parliament and later the American and French revolutions, as a way to institutionalize popular sovereignty without requiring constant direct participation. In an age of slow travel and limited communication, electing representatives to deliberate and decide on behalf of constituents was the only feasible way to scale democratic governance. As communication technologies advanced—first with print, then telegraphy, broadcasting, and now digital media—the possibilities and expectations of democratic participation have also evolved, but the core model of delegation remains dominant, shaped both by institutional inertia and by the ongoing tension between efficiency and inclusion.”
    </div>
    <p>Representative democracy is a key culprit for the concentration of power at the nation-state level.</p>
    <p>It was justified when <highlight>communication across distances was expensive and slow</highlight>. Today, as a form of governance, it is extremely outdated, in a dire need of reform.</p>
    <p><highlight>We don’t usually delegate so much in other spheres of life.</highlight></p>
    <p>General Assemblies of companies do not appoint a Board of Directors with a 4- or 5-year mandate, without any oversight, based on promises made before the appointment. We don't say to our bank - here are my savings, let's meet again in 4 or 5 years to see how good you've been.</p>
    <p>When we hire a service, we monitor performance, maintain the ability to participate in major decisions regarding its execution, demand corrective actions if something goes wrong, and <highlight>maintain the ability to fire or change provider</highlight> if the service is unsatisfactory at any point of the contract execution.</p>
    <p>We will continue to need to have people in charge that represent the distribution of political values in society. But their mandate should be <highlight>proportionate, in accordance with the subsidiarity principle</highlight> and always in tune with the underlying voter preferences (subject to constitutional constraints).</p>
    <p>We can align representation much better with the will of the voters if we start employing much more frequently <highlight>participatory and direct democracy tools</highlight> at the local, regional, national, and supranational levels.</p>
    <p>I can feel the horror that many readers experience right now at the thought of holding more referenda (or referendums, it doesn’t matter).</p>
    <p><highlight>Disastrous plebiscites</highlight> played a major role in the Brexit disaster and the European constitution debacle. If Alexis Tsipras didn’t do a spectacular U-turn, following the result of the 2015 referendum on the third Greek bailout programme, who knows what would have happened to the Euro area and the EU today.</p>
    <p>Plebiscites are the <highlight>favourite tool of autocrats</highlight> throughout history for putting a veil of legitimacy on their most arbitrary, contentious, horrible, and consequential decisions.</p>
    <p>I agree that we should <highlight>steer clear from binary plebiscites</highlight>, where major constitutional issues are resolved on thin yes-no margins.</p>
    <p>It is quite often the case in these plebiscites that a particular specific proposal is pitted against a <highlight>vague spectrum of possibilities</highlight>, grouped into a single answer.</p>
    <p>When the public is actually free to express their genuine view, these plebiscites often turn into a rare opportunity for a <highlight>big-bang protest vote</highlight>. Up-yours-Delors, no-shit-given, you-can-all-go-to-hell kind of exercise.</p>
    <p>Bad past experiences with binary plebiscites should not prevent us from the task of <highlight>empowering citizen participation</highlight> in the decision-making process and the smoother allocation of power in accordance with the subsidiarity principle.</p>
    <p>Three interrelated proposals can help overcome the past problems – <highlight>much higher frequency, cardinal voting, and subject-specific licencing</highlight>.</p>
    <button onClick={() => setScene("Frequency")}>Next</button>
    <button onClick={() => setScene("Nation")}>Back</button>
    <button onClick={() => setScene("PoliticalPower")}>Way back</button>
    <button onClick={() => setScene("component:Summary")}>Jump to the TL;DR version</button>
      </div>
  </div>  
  );
}
