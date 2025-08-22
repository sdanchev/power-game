import React, { useState } from 'react';

const HistoricalEventsSurvey = ({ setScene }) => {
  const events = [
    {
      id: 'magna-carta',
      year: 1215,
      title: 'Magna Carta',
      description: 'English barons forced King John to sign a document limiting royal power after his military failures and excessive taxation. The charter established that even the king must obey the law and cannot imprison nobles without due process. It became a cornerstone of constitutional government and influenced legal systems worldwide for centuries.',
      visual: '📜⚖️',
      correctMatch: 'magna-carta'
    },
    {
      id: 'protestantism',
      year: 1517,
      title: 'Birth of Protestantism',
      description: 'Martin Luther challenged Catholic Church practices by posting his 95 Theses, criticizing the sale of indulgences and papal authority. His actions sparked a religious movement that emphasized personal faith and scripture over church hierarchy. The Protestant Reformation permanently fractured Christian unity and reduced the Catholic Church\'s political dominance in Europe.',
      visual: '⛪🔨',
      correctMatch: 'protestantism'
    },
    {
      id: 'us-independence',
      year: 1776,
      title: 'US Independence',
      description: 'Thirteen American colonies declared independence from British rule, citing taxation without representation and violations of natural rights. After eight years of war, they successfully established a new nation based on popular sovereignty and individual liberties. The revolution inspired democratic movements worldwide and created the first modern constitutional republic.',
      visual: '🗽⭐',
      correctMatch: 'us-independence'
    },
    {
      id: 'french-revolution',
      year: 1789,
      title: 'The French Revolution',
      description: 'French citizens overthrew the absolute monarchy and aristocratic privileges, driven by economic crisis and Enlightenment ideals. The revolution abolished feudalism, declared universal human rights, and established the principle of popular sovereignty. Despite periods of terror and instability, it permanently transformed European society by ending the old regime of hereditary privilege.',
      visual: '👑💥',
      correctMatch: 'french-revolution'
    },
    {
      id: 'abolition-slavery',
      year: 1865,
      title: 'Abolition of slavery in the US',
      description: 'The American Civil War ended with the abolition of slavery through the 13th Amendment after centuries of forced labor. Four million enslaved people gained their freedom, fundamentally transforming American society and economy. The abolition movement established human dignity and equality as universal principles, influencing civil rights struggles worldwide.',
      visual: '⛓️💔',
      correctMatch: 'abolition-slavery'
    },
    {
      id: 'october-revolution',
      year: 1917,
      title: 'Boleshevik Revolution',
      description: 'Bolsheviks led by Lenin seized power from Russia\'s provisional government, promising "peace, land, and bread" to war-weary masses. They established the world\'s first communist state, redistributing land and nationalizing industry under worker control. The revolution inspired communist movements globally but also led to decades of authoritarian rule and economic upheaval.',
      visual: '🔴⚒️',
      correctMatch: 'october-revolution'
    },
    {
      id: 'hitler-rise',
      year: 1933,
      title: 'Ascent to power of the National Socialist German Workers\' Party',
      description: 'Adolf Hitler became German Chancellor through legal means, exploiting economic depression and political instability. He quickly dismantled democratic institutions, established a totalitarian dictatorship, and implemented racist policies targeting minorities. His regime led to World War II and the Holocaust, demonstrating how democracies can collapse from within.',
      visual: '🖤⚡',
      correctMatch: 'hitler-rise'
    },
    {
      id: 'berlin-wall-fall',
      year: 1989,
      title: 'Fall of the Berlin Wall',
      description: 'East German authorities opened the Berlin Wall after mounting public pressure and failed communist reforms across Eastern Europe. Citizens from both sides celebrated by physically tearing down the concrete barrier that had divided the city for 28 years. The wall\'s fall symbolized the end of the Cold War and the triumph of democratic freedom over authoritarian control.',
      visual: '🧱💥',
      correctMatch: 'berlin-wall-fall'
    }
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [availableItems, setAvailableItems] = useState(() => {
    const items = events.map(event => ({ id: event.id, title: event.title, description: event.description }));
    // Shuffle the array randomly
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  });
  const [matches, setMatches] = useState({});
  const [matchingResults, setMatchingResults] = useState(null);
  const [scores, setScores] = useState({});
  const [finalResults, setFinalResults] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, eventId) => {
    e.preventDefault();
    if (!draggedItem) return;

    // Remove item from available items
    setAvailableItems(prev => prev.filter(item => item.id !== draggedItem.id));
    
    // If there was already an item in this slot, move it back to available
    if (matches[eventId]) {
      setAvailableItems(prev => [...prev, matches[eventId]]);
    }
    
    // Set the new match
    setMatches(prev => ({ ...prev, [eventId]: draggedItem }));
    setDraggedItem(null);
  };

  const handleClickToMatch = (eventId) => {
    if (!draggedItem) return;
    
    // Same logic as drop
    setAvailableItems(prev => prev.filter(item => item.id !== draggedItem.id));
    
    if (matches[eventId]) {
      setAvailableItems(prev => [...prev, matches[eventId]]);
    }
    
    setMatches(prev => ({ ...prev, [eventId]: draggedItem }));
    setDraggedItem(null);
  };

  const handleRemoveMatch = (eventId) => {
    if (matches[eventId]) {
      setAvailableItems(prev => [...prev, matches[eventId]]);
      setMatches(prev => {
        const newMatches = { ...prev };
        delete newMatches[eventId];
        return newMatches;
      });
    }
  };

  const checkMatching = () => {
    const results = events.map(event => ({
      ...event,
      userAnswer: matches[event.id]?.id || null,
      correct: matches[event.id]?.id === event.correctMatch
    }));
    
    const correctCount = results.filter(r => r.correct).length;
    setMatchingResults({ results, correctCount, total: events.length });
    setCurrentStep(2);
  };

  const handleScoreChange = (eventId, score) => {
    setScores({ ...scores, [eventId]: parseInt(score) });
  };

  const calculateFinalScore = () => {
    let compositeScore = 0;
    
    events.forEach(event => {
      const score = scores[event.id] || 0;
      if (event.id === 'hitler-rise') {
        compositeScore += score * -20;
      } else if (event.id === 'october-revolution') {
        compositeScore += score * -2;
      } else {
        compositeScore += score;
      }
    });

    const category = compositeScore >= 0 ? 'Democratic/Liberal Orientation' : 'Authoritarian/Revolutionary Orientation';
    
    setFinalResults({
      compositeScore,
      category,
      breakdown: events.map(event => ({
        ...event,
        userScore: scores[event.id] || 0,
        weightedScore: event.id === 'hitler-rise' ? (scores[event.id] || 0) * -20 :
                      event.id === 'october-revolution' ? (scores[event.id] || 0) * -2 :
                      (scores[event.id] || 0)
      }))
    });
  
    //const handleContinue = () => {
    //  const finalScore = finalResults.compositeScore;
      if (compositeScore < 0) {
        setScene("HardCoreExit");
      } else {
        setScene("Intro4SoftCons");
      }
    //};
    // Survey completed - you can access the results via finalResults state
    // This would be where you'd integrate with your wider game project
    // alert(`Survey completed! Composite score: ${compositeScore} (${category})`);
    setCurrentStep(4);
  };

  const resetSurvey = () => {
    setCurrentStep(1);
    // Re-shuffle the items when resetting
    const items = events.map(event => ({ id: event.id, title: event.title, description: event.description }));
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    setAvailableItems(items);
    setMatches({});
    setMatchingResults(null);
    setScores({});
    setFinalResults(null);
    setDraggedItem(null);
  };

  if (currentStep === 1) {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-indigo-800">
            Historical Events Survey
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Select from the right column the description and place it in the right order on the left.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {/* Visual Events Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-indigo-700">Historical Events ({events.length})</h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`border-2 border-dashed rounded-lg p-4 min-h-[120px] transition-all duration-200 cursor-pointer ${
                      draggedItem 
                        ? 'border-indigo-400 bg-indigo-50 shadow-lg scale-105 hover:border-indigo-600 hover:bg-indigo-100' 
                        : 'border-gray-300 bg-gray-50'
                    } ${matches[event.id] ? 'border-solid border-green-400 bg-green-50' : ''}`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, event.id)}
                    onClick={() => handleClickToMatch(event.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-4xl">{event.visual}</span>
                      <span className="text-sm font-medium text-gray-500">{event.year}</span>
                    </div>
                    {draggedItem && !matches[event.id] && (
                      <div className="text-indigo-600 text-center font-medium animate-pulse">
                        Click or drop "{draggedItem.title}" here
                      </div>
                    )}
                    {matches[event.id] ? (
                      <div className="bg-indigo-100 border border-indigo-300 rounded p-2 relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveMatch(event.id);
                          }}
                          className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-sm"
                        >
                          ✕
                        </button>
                        <h3 className="font-semibold text-indigo-800">{matches[event.id].title}</h3>
                        <p className="text-sm text-indigo-600">{matches[event.id].description}</p>
                      </div>
                    ) : !draggedItem && (
                      <div className="text-gray-400 text-center">Drop description here</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Draggable Items Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-indigo-700">
                Event Descriptions ({availableItems.length} remaining)
              </h2>
              {draggedItem && (
                <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mb-4">
                  <p className="text-yellow-800 font-medium">
                    📌 "{draggedItem.title}" is selected. Click on a historical event box to match it, or drag and drop.
                  </p>
                </div>
              )}
              <div className="space-y-3 min-h-[600px] bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                {availableItems.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item)}
                    onClick={() => setDraggedItem(draggedItem?.id === item.id ? null : item)}
                    className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                      draggedItem?.id === item.id 
                        ? 'bg-yellow-100 border-yellow-400 shadow-lg transform scale-105' 
                        : 'bg-white border-gray-200 hover:shadow-md hover:border-indigo-300'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    {draggedItem?.id === item.id && (
                      <p className="text-xs text-yellow-700 mt-2 font-medium">✓ Selected - Click on an event to match</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={checkMatching}
              disabled={availableItems.length > 0}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
            >
              Submit Matches
            </button>
            {availableItems.length > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                Please match all descriptions before submitting
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2 && matchingResults) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-800">
            Matching Results
          </h2>
          
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-indigo-600">
              {matchingResults.correctCount} / {matchingResults.total}
            </div>
            <div className="text-gray-600">Correct Matches</div>
          </div>

          <div className="space-y-4 mb-8">
            {matchingResults.results.map((result) => (
              <div key={result.id} className={`border rounded-lg p-4 ${result.correct ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{result.visual}</span>
                    <div>
                      <div className="font-semibold">{result.year}</div>
                      <div className="text-sm text-gray-600">
                        Your answer: {result.userAnswer ? 
                          events.find(e => e.id === result.userAnswer)?.title : 'No answer'}
                      </div>
                      <div className="text-sm text-gray-500">
                        Correct: {result.title}
                      </div>
                    </div>
                  </div>
                  <div className={`text-2xl ${result.correct ? 'text-green-600' : 'text-red-600'}`}>
                    {result.correct ? '✓' : '✗'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentStep(3)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Continue to Impact Scoring
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-800">
            Historical Impact Assessment
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Rate each event from 1-10 based on its positive impact on human history
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-indigo-200">
                  <th className="text-left p-4 font-semibold text-indigo-800">Event</th>
                  <th className="text-left p-4 font-semibold text-indigo-800">Year</th>
                  <th className="text-center p-4 font-semibold text-indigo-800">Impact Score (1-10)</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{event.visual}</span>
                        <div>
                          <div className="font-semibold">{event.title}</div>
                          <div className="text-sm text-gray-600">{event.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-medium">{event.year}</td>
                    <td className="p-4 text-center">
                      <select
                        value={scores[event.id] || ''}
                        onChange={(e) => handleScoreChange(event.id, e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select</option>
                        {[1,2,3,4,5,6,7,8,9,10].map(score => (
                          <option key={score} value={score}>{score}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={calculateFinalScore}
              disabled={Object.keys(scores).length < events.length}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
            >
              Submit results
            </button>
            {Object.keys(scores).length < events.length && (
              <p className="text-sm text-gray-500 mt-2">
                Please rate all events before submitting results
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 4 && finalResults) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-indigo-800">
            Survey Completed
          </h2>
          
          <div className="text-lg text-gray-700 mb-8">
            Thank you for completing the historical events survey!
          </div>

          <div className="text-center">
            <button
              onClick={resetSurvey}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Take Survey Again
            </button>
            <button 
              onClick={handleContinue} 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default HistoricalEventsSurvey;