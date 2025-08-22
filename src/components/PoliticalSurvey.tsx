import React, { useState } from 'react';

const PoliticalSurvey = ({ setScene }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [socialScore, setSocialScore] = useState(0);

  // Questions adapted from Political Compass approach
  // Economic axis (negative = left/progressive, positive = right/conservative)
  // Social axis (negative = libertarian, positive = authoritarian)
  const questions = [
    {
      id: 1,
      text: "If economic globalisation is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations.",
      axis: "economic",
      weight: -1
    },
    {
      id: 2,
      text: "The government should provide more services even if it means higher taxes.",
      axis: "economic", 
      weight: -1
    },
    {
      id: 3,
      text: "A significant advantage of a one-party state is that it avoids all the arguments that delay progress in a democratic political system.",
      axis: "social",
      weight: 1
    },
    {
      id: 4,
      text: "Those with the ability to pay should have access to higher standards of medical care.",
      axis: "economic",
      weight: 1
    },
    {
      id: 5,
      text: "Abstract art that doesn't represent anything shouldn't be considered art at all.",
      axis: "social",
      weight: 1
    },
    {
      id: 6,
      text: "It is regrettable that many personal fortunes are made by people who simply manipulate money and contribute nothing to their society.",
      axis: "economic",
      weight: -1
    },
    {
      id: 7,
      text: "Governments should penalise businesses that mislead the public.",
      axis: "social",
      weight: -1
    },
    {
      id: 8,
      text: "The freer the market, the freer the people.",
      axis: "economic",
      weight: 1
    },
    {
      id: 9,
      text: "Some people are naturally unlucky.",
      axis: "social",
      weight: 1
    },
    {
      id: 10,
      text: "People should be free to express their opinions, even if others find them offensive or wrong.",
      axis: "social",
      weight: -1
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    let economicScore = 0;
    let socialScore = 0;

    questions.forEach((question, index) => {
      const answer = finalAnswers[index];
      if (answer !== undefined) {
        const score = (answer - 2) * question.weight; // Convert 0-4 scale to -2 to +2, then apply weight
        
        if (question.axis === "economic") {
          economicScore += score;
        } else {
          socialScore += score;
        }
      }
    });

    // Normalize scores to -10 to +10 scale
    const normalizedEconomic = Math.round((economicScore / 10) * 10);
    const normalizedSocial = Math.round((socialScore / 10) * 10);

    setAnswers({ ...finalAnswers, economicScore: normalizedEconomic, socialScore: normalizedSocial });
    setShowResults(true);

    setSocialScore(normalizedSocial);
  };

  const handleContinue = () => {
    const score = answers.socialScore;
    console.log("socialScore is:", score);

    if (score < 0) {
      setScene("Intro4Libs");
    } else {
      setScene("Intro4Cons");
    }
  };

  const getQuadrant = (economic, social) => {
    if (economic < 0 && social < 0) return "Left Libertarian";
    if (economic < 0 && social >= 0) return "Left Authoritarian";
    if (economic >= 0 && social < 0) return "Right Libertarian";
    return "Right Authoritarian";
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const economic = answers.economicScore;
    const social = answers.socialScore;
    const quadrant = getQuadrant(economic, social);

    // Convert scores to graph coordinates (center the graph at 200,200 with 400x400 total size)
    const graphX = 200 + (economic * 18); // Scale -10 to +10 onto -180 to +180
    const graphY = 200 - (social * 18); // Invert Y axis so positive social is up

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Political Position</h2>
        
        {/* Political Compass Graph */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <svg width="400" height="400" className="border border-gray-300">
              {/* Background quadrants */}
              <rect x="0" y="0" width="200" height="200" fill="#e8f4f8" opacity="0.5" />
              <rect x="200" y="0" width="200" height="200" fill="#f8e8e8" opacity="0.5" />
              <rect x="0" y="200" width="200" height="200" fill="#e8f8e8" opacity="0.5" />
              <rect x="200" y="200" width="200" height="200" fill="#f8f8e8" opacity="0.5" />
              
              {/* Grid lines */}
              <line x1="0" y1="200" x2="400" y2="200" stroke="#ccc" strokeWidth="2" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="#ccc" strokeWidth="2" />
              
              {/* Axis labels */}
              <text x="10" y="15" fontSize="12" fill="#666">Authoritarian</text>
              <text x="10" y="395" fontSize="12" fill="#666">Libertarian</text>
              <text x="10" y="205" fontSize="12" fill="#666">Left</text>
              <text x="350" y="205" fontSize="12" fill="#666">Right</text>
              
              {/* Quadrant labels */}
              <text x="100" y="100" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Left
              </text>
              <text x="100" y="115" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Authoritarian
              </text>
              
              <text x="300" y="100" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Right
              </text>
              <text x="300" y="115" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Authoritarian
              </text>
              
              <text x="100" y="300" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Left
              </text>
              <text x="100" y="315" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Libertarian
              </text>
              
              <text x="300" y="300" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Right
              </text>
              <text x="300" y="315" fontSize="14" fontWeight="bold" fill="#666" textAnchor="middle">
                Libertarian
              </text>
              
              {/* User's position */}
              <circle 
                cx={graphX} 
                cy={graphY} 
                r="8" 
                fill="#dc2626" 
                stroke="#991b1b" 
                strokeWidth="2"
              />
              <circle 
                cx={graphX} 
                cy={graphY} 
                r="12" 
                fill="none" 
                stroke="#dc2626" 
                strokeWidth="2" 
                opacity="0.5"
              />
            </svg>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Your Results:</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-medium">Economic Scale: {economic}</p>
              <p className="text-sm text-gray-600">{economic < 0 ? "Left (Government intervention)" : "Right (Free market)"}</p>
            </div>
            <div>
              <p className="font-medium">Social Scale: {social}</p>
              <p className="text-sm text-gray-600">{social < 0 ? "Libertarian (Individual freedom)" : "Authoritarian (Social order)"}</p>
            </div>
          </div>
          <p className="text-lg font-semibold text-blue-600">Political Position: {quadrant}</p>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-700">
            Thank you for taking the survey! You can take it again or proceed with the next step.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={resetSurvey}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retake Survey
            </button>
            <button 
              onClick={handleContinue} 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Next
            </button>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              This survey is adapted from the Political Compass methodology.
            </p>
            <p className="text-sm text-gray-600">
              For the full 62-question Political Compass test, visit:{" "}
              <a 
                href="https://www.politicalcompass.org/test" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                www.politicalcompass.org
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Political Values Survey</h2>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-6 leading-relaxed">
          {questions[currentQuestion].text}
        </p>

        <div className="space-y-3">
          {[
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-3 text-left border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        No data is collected with this survey. Your answers are helpful for the text navigation.
      </div>
    </div>
  );
};

//console.log("socialScore is:", score);

export default PoliticalSurvey;