import React from 'react';
export default function Weak({ setScene }) {
  return (
  <div className="scene-container">
      <div>
    <h1>Empower the weak</h1>
    <p>To remedy inequality at the low end of the distribution, we need to do more to empower vulnerable individuals and households.</p>
    <p><highlight>Empowerment is a constant process of gradual improvement</highlight>. There is always room for improvement.</p>
    <p>The hungry are empowered with food; the homeless - with shelter; the mentally ill and addicts - with appropriate therapy and social support; the underprivileged - with income support, training, mentoring, microfinance, financial literacy education, etc. etc.</p>
    <p>There is a lot of good work done on this already, but also a lot further left to do.</p>
    
    <div className="image-container">
      <img src="/assets/Journey.png" alt="Migrant's journey" />
      <div className="image-caption">
        From The Mapping Journey Project of Bouchra Khalili, 2008-2011, a large-scale video installation.
      </div>
    </div>
    <p>The work done at the International Labour Organisation on {" "}
      <a href="https://t.ly/MStun" target="_blank" rel="noopener noreferrer"> social protection floors 
      </a> {" "}
      is an excellent starting point.</p>
    <p><highlight>Four social security guarantees</highlight>, defined at the national level, should be provided to all residents and all children:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li>access to essential health care, including maternity care;</li>
      <li>basic income security for children, providing access to nutrition, education, care and any other necessary goods and services;</li>
      <li>basic income security for persons in active age who are unable to earn sufficient income, in particular in cases of sickness, unemployment, maternity and disability;</li>
      <li>basic income security for older persons.</li>
    </ul>
    <p></p>
    <p>The ILO's strategy for social protection floors involves a two-dimensional or two-phase approach. First, the ILO member-states should <highlight>implement horizontally</highlight> nationally defined social protection floors with <highlight>basic guarantees</highlight>.</p> 
    <p>Second, <highlight>higher levels of social security</highlight> within comprehensive systems can be achieved progressively, subject to domestic <highlight>economic realities</highlight> and needs.</p>
    <p>The 187 member states of ILO have committed to provide these guarantees, yet implementation in practice has been patchy, to put it mildly.</p>
    <p>The <highlight>coordination problems</highlight> that arise at the <highlight>nation-state level</highlight> constitute a key impediment, as providing a strong social safety net is often perceived as harmful to international competitiveness of businesses, while deviating from the ILO commitments does not lead to notable sanctions.</p>
    <p>The successful implementation of the social protection floors thus stumbles upon the <highlight>distribution of political power</highlight> and its excess concentration at the nation-state level (more on this further below).</p>
    <button onClick={() => setScene("Rich")}>Next</button>
    <button onClick={() => setScene("EconomicPower")}>Back</button>
    <button onClick={() => setScene("PoliticalPower")}>Jump to political power</button>
    <button onClick={() => setScene("component:Summary")}>Jump to TL;DR version</button>
      </div>
  </div>
  );
}
