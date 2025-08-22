import React from 'react';

export default function Contents({ setScene }) {
  
    const handleEndGame = () => {
        alert("Thanks for playing!");

        // Try to close the window
        window.close();

        // Fallback: if the window is still open, redirect to blank page
        setTimeout(() => {
        if (!window.closed) {
            window.location.href = "about:blank";
        }
        }, 100);
    };
  
    return (
  <div className="scene-container"> 
      <div>
    <h1>Contents</h1>
    <p>Text</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("OpeningScreen"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       Change 
      </a> </li>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("Intro4Libs"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       Power to the People: Reforming the Institutions of Liberal Democracy, Starting from First Principles 
      </a> </li>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("PowerPrinciple"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       The Power Principle 
      </a> </li>
      <ul style={{ listStyleType: 'point', paddingLeft: '40px' }}>
        <li>
            <a 
            href="#" 
            onClick={(e) => {
            e.preventDefault(); // prevent the browser from reloading
            setScene("PowerDefinition"); // change to the target scene
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
        >
        The Meaning of Power
        </a> </li>
        <li>
            <a 
            href="#" 
            onClick={(e) => {
            e.preventDefault(); // prevent the browser from reloading
            setScene("UtilitarianismCompared"); // change to the target scene
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
        >
        Comparison with Utilitarianism 
        </a> </li>
        <li>
            <a 
            href="#" 
            onClick={(e) => {
            e.preventDefault(); // prevent the browser from reloading
            setScene("Formula"); // change to the target scene
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
        >
        Mathematical formulation 
        </a> </li>
        <li>
            <a 
            href="#" 
            onClick={(e) => {
            e.preventDefault(); // prevent the browser from reloading
            setScene("Subsidiarity"); // change to the target scene
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
            >
            Secondary principles: No-harm and subsidiarity principles 
        </a> </li>
      </ul>
        <li>
            <a 
            href="#" 
            onClick={(e) => {
            e.preventDefault(); // prevent the browser from reloading
            setScene("Implications"); // change to the target scene
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
        >
        Practical implications 
        </a> </li>
        <ul style={{ listStyleType: 'point', paddingLeft: '40px' }}>
            <li>
                <a 
                href="#" 
                onClick={(e) => {
                e.preventDefault(); // prevent the browser from reloading
                setScene("EconomicPower"); // change to the target scene
                }}
                style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
            >
            Redistribution of economic power
            </a> </li>
        </ul>
            <ul style={{ listStyleType: 'disk', paddingLeft: '60px' }}>
                <li>
                    <a 
                    href="#" 
                    onClick={(e) => {
                    e.preventDefault(); // prevent the browser from reloading
                    setScene("Weak"); // change to the target scene
                    }}
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                Empower the weak
                </a> </li>
                <li>
                    <a 
                    href="#" 
                    onClick={(e) => {
                    e.preventDefault(); // prevent the browser from reloading
                    setScene("Rich"); // change to the target scene
                    }}
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                Limit the power of the extremely rich
                </a> </li>
            </ul>
        <ul style={{ listStyleType: 'point', paddingLeft: '40px' }}>
            <li>
                <a 
                href="#" 
                onClick={(e) => {
                e.preventDefault(); // prevent the browser from reloading
                setScene("PoliticalPower"); // change to the target scene
                }}
                style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
            >
            Redistribution of political power
            </a> </li>
        </ul>
            <ul style={{ listStyleType: 'disk', paddingLeft: '60px' }}>
                <li>
                    <a 
                    href="#" 
                    onClick={(e) => {
                    e.preventDefault(); // prevent the browser from reloading
                    setScene("Nation"); // change to the target scene
                    }}
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                Reform the nation-state
                </a> </li>
                <li>
                    <a 
                    href="#" 
                    onClick={(e) => {
                    e.preventDefault(); // prevent the browser from reloading
                    setScene("Representative"); // change to the target scene
                    }}
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                Representative democracy reform
                </a> </li>
            </ul>
                <ul style={{ listStyleType: 'disk', paddingLeft: '80px' }}>
                <li>
                    <a 
                    href="#" 
                    onClick={(e) => {
                    e.preventDefault(); // prevent the browser from reloading
                    setScene("Frequency"); // change to the target scene
                    }}
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                Voting frequency and digital technology
                </a> </li>
                <li>
                    <a 
                    href="#" 
                    onClick={(e) => {
                    e.preventDefault(); // prevent the browser from reloading
                    setScene("Cardinal"); // change to the target scene
                    }}
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                Cardinal voting
                </a> </li>
                <li>
                    <a 
                    href="#" 
                    onClick={(e) => {
                    e.preventDefault(); // prevent the browser from reloading
                    setScene("Licensing"); // change to the target scene
                    }}
                    style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                Subject-specific voter licensing
                </a> </li>
            </ul>
        <li>
            <a 
            href="#" 
            onClick={(e) => {
            e.preventDefault(); // prevent the browser from reloading
            setScene("Epilogue"); // change to the target scene
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
        >
        Epilogue
        </a> </li>
        <li>
            <a 
            href="#" 
            onClick={(e) => {
            e.preventDefault(); // prevent the browser from reloading
            setScene("Credits"); // change to the target scene
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
        >
        Credits
        </a> </li>
    </ul>
    <p></p>
    <p>Interactive elements</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("component:PoliticalSurvey"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       Political Values Survey 
      </a> </li>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("component:HistoricalEventsSurvey"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       Historical Events Survey 
      </a> </li>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("component:SocialWelfareGame"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       Social Welfare and Distribution Game 
      </a> </li>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("DemocracySurveyIntro"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       Democracy & Representation Quiz 
      </a> </li>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("component:BrexitVotingSystem"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       Brexit Voting Systems Comparison
      </a> </li>
      <li>
        <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault(); // prevent the browser from reloading
          setScene("component:Summary"); // change to the target scene
        }}
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
       TL;DR Summary
      </a> </li>
    </ul> 
    
    <button onClick={() => setScene("OpeningScreen")}>Back from the top</button>
    <button onClick={() => setScene("Epilogue")}>Epilogue</button>
    <button onClick={() => setScene("Credits")}>Credits</button>
    <button onClick={handleEndGame}>Good bye and thank you for the fish! </button>
      </div>
  </div>
    );
}