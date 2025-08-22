import React, { useState } from 'react';

const DemocracyQuiz = () => {
  const [responses, setResponses] = useState({
    satisfaction: 50,
    influence: 50,
    effectiveness: 50
  });

  const questions = [
    {
      id: 'satisfaction',
      text: 'How well do your elected representatives understand and address your concerns?',
      leftLabel: 'Not well at all',
      rightLabel: 'Very well'
    },
    {
      id: 'influence',
      text: 'How much influence do you feel you have over political decisions and processes that affect your life?',
      leftLabel: 'No Influence',
      rightLabel: 'Strong Influence'
    },
    {
      id: 'effectiveness',
      text: 'How effective do you think the representative democratic system is at solving major societal problems?',
      leftLabel: 'Very Ineffective',
      rightLabel: 'Very Effective'
    }
  ];

  const handleSliderChange = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  // Calculate average mood (1-100 scale)
  const averageMood = (responses.satisfaction + responses.influence + responses.effectiveness) / 3;

  // Get politician image based on mood ranges
  const getPoliticianImage = (mood) => {
    if (mood < 25) {
      return {
        image: (
          <img 
            src="/assets/Mitsotakis1.png" 
            alt="Very dissatisfied"
            className="w-128 h-128 rounded-full object-cover shadow-lg"
          />
        ),
        title: "Very Dissatisfied",
        description: "Democratic representation should be significantly reformed.",
        color: "text-red-600"
      };
    } else if (mood < 50) {
      return {
        image: (
          <img 
            src="/assets/Mitsotakis2.png" 
            alt="Somewhat dissatisfied"
            className="w-128 h-128 rounded-full object-cover shadow-lg"
          />
        ),
        title: "Somewhat Dissatisfied",
        description: "There's room for improvement in democratic representation.",
        color: "text-orange-600"
      };
    } else if (mood < 75) {
      return {
        image: (
          <img 
            src="/assets/Mitsotakis3.png" 
            alt="Moderately satisfied"
            className="w-128 h-128 rounded-full object-cover shadow-lg"
          />
        ),
        title: "Moderately Satisfied",
        description: "Democracy is working reasonably well, with some concerns.",
        color: "text-yellow-600"
      };
    } else {
      return {
        image: (
          <img 
            src="/assets/Mitsotakis4.png" 
            alt="Very satisfied"
            className="w-128 h-128 rounded-full object-cover shadow-lg"
          />
        ),
        title: "Very Satisfied",
        description: "You hold high confidence in democratic representation and effectiveness. Still, you might find the next page of interest.",
        color: "text-green-600"
      };
    }
  };

  const currentImage = getPoliticianImage(averageMood);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Democracy & Representation Quiz
      </h2>
      
      <div className="flex flex-col items-center">
        {/* Political Mood Display */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-8 rounded-lg mb-8 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Political Mood Meter
          </h3>
          
          <div className="transition-all duration-500 ease-in-out mb-4">
            {currentImage.image}
          </div>
          
          <div className="text-center">
            <div className={`text-lg font-semibold mb-2 ${currentImage.color}`}>
              {currentImage.title}
            </div>
            <div className="text-lg font-medium text-gray-700 mb-2">
              Average Score: {averageMood.toFixed(1)}/100
            </div>
            <div className="text-sm text-gray-600 max-w-xs">
              {currentImage.description}
            </div>
          </div>
        </div>
        
        {/* Questions Section */}
        <div className="w-full space-y-8">
          {questions.map((question, index) => (
            <div key={question.id} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {index + 1}. {question.text}
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{question.leftLabel}</span>
                  <span>{question.rightLabel}</span>
                </div>
                
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={responses[question.id]}
                    onChange={(e) => handleSliderChange(question.id, e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current: {responses[question.id]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default DemocracyQuiz;