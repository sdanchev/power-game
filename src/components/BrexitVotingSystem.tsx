import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronUp, ChevronDown, ChevronRight, ChevronLeft, Vote, Users } from 'lucide-react';

const BrexitVotingSystem = ({ setScene }) => {
  const brexitOptions = [
    {
      id: 'remain',
      title: 'Remain in EU',
      description: 'Cancel Brexit and remain a full member of the European Union'
    },
    {
      id: 'norway',
      title: 'Norway Model (EEA)',
      description: 'Leave EU but remain in European Economic Area with single market access'
    },
    {
      id: 'canada',
      title: 'Canada Model (FTA)',
      description: 'Comprehensive free trade agreement with the EU'
    },
    {
      id: 'wto',
      title: 'WTO Terms (Hard Brexit)',
      description: 'Leave EU with no deal, trading on World Trade Organization terms'
    },
    {
      id: 'customs',
      title: 'Customs Union',
      description: 'Leave EU but maintain customs union membership'
    }
  ];

  const representativeVoters = {
    remainer: {
      name: 'Staunch Remainer',
      rankings: ['remain', 'norway', 'customs', 'canada', 'wto'],
      cardinalVotes: { remain: 50, norway: 25, customs: 15, canada: 10, wto: 0 },
      binaryVote: 'remain'
    },
    brexiter: {
      name: 'Staunch Brexiter',
      rankings: ['wto', 'canada', 'customs', 'norway', 'remain'],
      cardinalVotes: { wto: 40, canada: 35, customs: 20, norway: 5, remain: 0 },
      binaryVote: 'leave'
    },
    moderate: {
      name: 'Moderate Voter',
      rankings: ['norway', 'customs', 'canada', 'remain', 'wto'],
      cardinalVotes: { norway: 30, customs: 25, canada: 20, remain: 15, wto: 10 },
      binaryVote: 'remain'
    }
  };

  const [currentStep, setCurrentStep] = useState('ranking');
  const [userRankings, setUserRankings] = useState(brexitOptions.map(opt => opt.id));
  const [userCardinalVotes, setUserCardinalVotes] = useState(
    brexitOptions.reduce((acc, option) => ({ ...acc, [option.id]: 20 }), {})
  );
  const [votingMethod, setVotingMethod] = useState('ranked');
  const [voterShares, setVoterShares] = useState({
    remainer: 20,
    brexiter: 50,
    moderate: 25
  });
  const [showVoterPreferences, setShowVoterPreferences] = useState(false);
  const [userBinaryVote, setUserBinaryVote] = useState('remain');

  type VoterKey = keyof typeof representativeVoters;

  const calculateRankedChoice = (allVoters: Record<VoterKey, typeof representativeVoters[VoterKey]>) => {
    const votes = [];
    
    Object.entries(allVoters).forEach(([voterType, voter]) => {
      const share = voterShares[voterType as VoterKey];
      for (let i = 0; i < share; i++) {
        votes.push(voter.rankings);
      }
    });
    
    votes.push(userRankings);
    
    let candidates = [...brexitOptions.map(o => o.id)];
    let rounds = [];
    
    while (candidates.length > 1) {
      const roundVotes: Record<string, number> = {};
      candidates.forEach(c => roundVotes[c] = 0);
      
      votes.forEach(vote => {
        const firstChoice = vote.find(choice => candidates.includes(choice));
        if (firstChoice) roundVotes[firstChoice]++;
      });
      
      rounds.push({ ...roundVotes });
      
      if (Math.max(...Object.values(roundVotes)) > votes.length / 2) {
        break;
      }
      
      const minVotes = Math.min(...Object.values(roundVotes));
      const eliminated = Object.keys(roundVotes).find(k => roundVotes[k] === minVotes);
      candidates = candidates.filter(c => c !== eliminated);
    }
    
    // Winner is the candidate with the most votes in the final round (matches the chart)
    const finalRound = rounds[rounds.length - 1];
    const winner = Object.keys(finalRound).reduce((a, b) => finalRound[a] > finalRound[b] ? a : b);

    return { rounds, winner };
  };

  const calculateBinary = (allVoters) => {
    let remainVotes = 0;
    let leaveVotes = 0;
    
    Object.entries(allVoters).forEach(([voterType, voter]) => {
      const share = voterShares[voterType];
      if (voter.binaryVote === 'remain') {
        remainVotes += share;
      } else {
        leaveVotes += share;
      }
    });
    
    if (userBinaryVote === 'remain') {
      remainVotes += 1;
    } else {
      leaveVotes += 1;
    }
    
    const winner = remainVotes > leaveVotes ? 'remain' : 'leave';
    return { 
      totals: { remain: remainVotes, leave: leaveVotes }, 
      winner,
      remainPercent: (remainVotes / (remainVotes + leaveVotes)) * 100,
      leavePercent: (leaveVotes / (remainVotes + leaveVotes)) * 100
    };
  };

  const calculateCardinal = (allVoters) => {
    const totals = {};
    brexitOptions.forEach(option => totals[option.id] = 0);
    
    Object.entries(allVoters).forEach(([voterType, voter]) => {
      const share = voterShares[voterType];
      Object.entries(voter.cardinalVotes).forEach(([option, score]) => {
        totals[option] += score * share;
      });
    });
    
    Object.entries(userCardinalVotes).forEach(([option, score]) => {
      totals[option] += score;
    });
    
    const winner = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b);
    return { totals, winner };
  };

  const moveRanking = (index, direction) => {
    const newRankings = [...userRankings];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < newRankings.length) {
      [newRankings[index], newRankings[newIndex]] = [newRankings[newIndex], newRankings[index]];
      setUserRankings(newRankings);
    }
  };

  const updateCardinalVote = (optionId, value) => {
    const newVotes = { ...userCardinalVotes };
    const oldValue = newVotes[optionId];
    const totalOthers = Object.values(newVotes).reduce((sum, v) => sum + v, 0) - oldValue;
    
    if (totalOthers + value <= 100) {
      newVotes[optionId] = value;
      setUserCardinalVotes(newVotes);
    }
  };

  const getTotalCardinalPoints = () => {
    return Object.values(userCardinalVotes).reduce((sum, val) => sum + val, 0);
  };

  const getOptionTitle = (id) => {
    return brexitOptions.find(opt => opt.id === id)?.title || id;
  };

  const getTotalVoters = () => {
    return Object.values(voterShares).reduce((sum, share) => sum + share, 0) + 1;
  };

  const updateVoterShare = (voterType, value) => {
    setVoterShares(prev => ({
      ...prev,
      [voterType]: value
    }));
  };

  const results = votingMethod === 'ranked' 
    ? calculateRankedChoice(representativeVoters)
    : votingMethod === 'cardinal'
    ? calculateCardinal(representativeVoters)
    : calculateBinary(representativeVoters);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const ResultsDisplay = () => {
    if (votingMethod === 'ranked') {
      const finalRound = results.rounds[results.rounds.length - 1];
      const data = Object.entries(finalRound).map(([option, votes]) => ({
        name: getOptionTitle(option),
        votes: votes
      })).sort((a, b) => b.votes - a.votes);

      return (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Ranked Choice Winner</h3>
            <p className="text-green-700 text-xl font-bold">{getOptionTitle(results.winner)}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-4">Final Round Results</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="votes" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    } else if (votingMethod === 'cardinal') {
      const data = Object.entries(results.totals).map(([option, score]) => ({
        name: getOptionTitle(option),
        score: score
      })).sort((a, b) => b.score - a.score);

      const pieData = data.map((item, index) => ({
        ...item,
        fill: COLORS[index % COLORS.length]
      }));

      return (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Cardinal Voting Winner</h3>
            <p className="text-blue-700 text-xl font-bold">{getOptionTitle(results.winner)}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold mb-4">Total Scores</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold mb-4">Score Distribution</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="score"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      );
    } else {
      const data = [
        { name: 'Remain', votes: results.totals.remain, percent: results.remainPercent },
        { name: 'Leave', votes: results.totals.leave, percent: results.leavePercent }
      ].sort((a, b) => b.votes - a.votes);

      const pieData = [
        { name: 'Remain', value: results.totals.remain, fill: '#0088FE' },
        { name: 'Leave', value: results.totals.leave, fill: '#FF8042' }
      ];

      return (
        <div className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">Binary Referendum Winner</h3>
            <p className="text-purple-700 text-xl font-bold">
              {results.winner === 'remain' ? 'Remain in EU' : 'Leave EU'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold mb-4">Vote Count</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="votes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold mb-4">Vote Share</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      );
    }
  };

  const VoterPreferencesModal = () => {
    if (!showVoterPreferences) return null;

    const rankingData = brexitOptions.map((option) => {
      const data = { option: option.title };
      Object.entries(representativeVoters).forEach(([voterKey, voter]) => {
        const rank = voter.rankings.indexOf(option.id) + 1;
        data[voter.name] = rank;
      });
      return data;
    });

    const cardinalData = brexitOptions.map(option => {
      const data = { option: option.title };
      Object.entries(representativeVoters).forEach(([voterKey, voter]) => {
        data[voter.name] = voter.cardinalVotes[option.id];
      });
      return data;
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Voter Type Preferences</h3>
              <button
                onClick={() => setShowVoterPreferences(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Rankings (1 = Most Preferred)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left">Brexit Option</th>
                        {Object.values(representativeVoters).map(voter => (
                          <th key={voter.name} className="border border-gray-300 p-3 text-center">
                            {voter.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rankingData.map(row => (
                        <tr key={row.option}>
                          <td className="border border-gray-300 p-3 font-medium">{row.option}</td>
                          {Object.values(representativeVoters).map(voter => (
                            <td key={voter.name} className="border border-gray-300 p-3 text-center">
                              <span className={`inline-block w-6 h-6 rounded-full text-white text-sm leading-6 ${
                                row[voter.name] === 1 ? 'bg-green-500' :
                                row[voter.name] === 2 ? 'bg-blue-500' :
                                row[voter.name] === 3 ? 'bg-yellow-500' :
                                row[voter.name] === 4 ? 'bg-orange-500' : 'bg-red-500'
                              }`}>
                                {row[voter.name]}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Cardinal Scores (0-50 points)</h4>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={cardinalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="option" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    {Object.values(representativeVoters).map((voter, index) => (
                      <Bar 
                        key={voter.name} 
                        dataKey={voter.name} 
                        fill={COLORS[index]} 
                        name={voter.name}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowVoterPreferences(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">Brexit Voting Systems Comparison</h1>
        <p className="text-gray-600 text-center mb-6">
          Explore how different voting methods (Ranked Choice vs Cardinal vs Binary) produce different outcomes 
          using the Brexit options presented during EU negotiations.
        </p>
        
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setCurrentStep('ranking')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              currentStep === 'ranking' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            <Vote size={16} />
            Step 1: Rank Options
          </button>
          <button
            onClick={() => setCurrentStep('cardinal')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              currentStep === 'cardinal' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            <Vote size={16} />
            Step 2: Score Options
          </button>
          <button
            onClick={() => setCurrentStep('binary')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              currentStep === 'binary' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            <Vote size={16} />
            Step 3: Binary Choice
          </button>
          <button
            onClick={() => setCurrentStep('results')}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              currentStep === 'results' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            <Users size={16} />
            Step 4: See Results
          </button>
        </div>
      </div>

      {currentStep === 'ranking' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Ranked Choice Voting</h2>
          <p className="text-gray-600 mb-6">
            Use the up/down arrows to rank the Brexit options from most preferred (top) to least preferred (bottom).
          </p>
          
          <div className="space-y-3">
            {userRankings.map((optionId, index) => {
              const option = brexitOptions.find(opt => opt.id === optionId);
              return (
                <div key={optionId} className="p-4 border rounded-lg bg-white hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-blue-600 min-w-[30px]">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{option.title}</h3>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => moveRanking(index, 'up')}
                        disabled={index === 0}
                        className="p-1 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronUp size={16} />
                      </button>
                      <button
                        onClick={() => moveRanking(index, 'down')}
                        disabled={index === userRankings.length - 1}
                        className="p-1 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentStep('cardinal')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Continue to Cardinal Voting →
            </button>
          </div>
        </div>
      )}

      {currentStep === 'cardinal' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Cardinal Voting</h2>
          <p className="text-gray-600 mb-6">
            Distribute 100 points among the Brexit options based on how much you support each one.
            You can give 0 points to options you completely oppose.
          </p>
          
          <div className="space-y-4 mb-6">
            {brexitOptions.map(option => (
              <div key={option.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{option.title}</h3>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={userCardinalVotes[option.id]}
                      onChange={(e) => updateCardinalVote(option.id, parseInt(e.target.value))}
                      className="w-32"
                    />
                    <span className="min-w-[60px] text-right font-mono">
                      {userCardinalVotes[option.id]} pts
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Points Used:</span>
              <span className={`font-mono text-lg ${
                getTotalCardinalPoints() === 100 ? 'text-green-600' : 
                getTotalCardinalPoints() > 100 ? 'text-red-600' : 'text-orange-600'
              }`}>
                {getTotalCardinalPoints()} / 100
              </span>
            </div>
            {getTotalCardinalPoints() !== 100 && (
              <p className="text-sm mt-2 text-gray-600">
                {getTotalCardinalPoints() > 100 
                  ? 'You have exceeded 100 points. Please reduce some scores.'
                  : 'You can distribute more points to better express your preferences.'
                }
              </p>
            )}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setCurrentStep('binary')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Continue to Binary Choice →
            </button>
          </div>
        </div>
      )}

      {currentStep === 'binary' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Binary Referendum</h2>
          <p className="text-gray-600 mb-6">
            This was the actual format of the 2016 Brexit referendum. Choose between the two options:
          </p>
          
          <div className="space-y-4 mb-6">
            <div 
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                userBinaryVote === 'remain' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setUserBinaryVote('remain')}
            >
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="binaryVote"
                  value="remain"
                  checked={userBinaryVote === 'remain'}
                  onChange={() => setUserBinaryVote('remain')}
                  className="w-5 h-5"
                />
                <div>
                  <h3 className="text-xl font-semibold">Remain a member of the European Union</h3>
                  <p className="text-gray-600 mt-2">
                    The UK should remain a member of the European Union
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                userBinaryVote === 'leave' 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setUserBinaryVote('leave')}
            >
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="binaryVote"
                  value="leave"
                  checked={userBinaryVote === 'leave'}
                  onChange={() => setUserBinaryVote('leave')}
                  className="w-5 h-5"
                />
                <div>
                  <h3 className="text-xl font-semibold">Leave the European Union</h3>
                  <p className="text-gray-600 mt-2">
                    The UK should leave the European Union
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-yellow-800 mb-2">Historical Context</h4>
            <p className="text-sm text-yellow-700">
              The actual 2016 Brexit referendum offered only these two choices. Notice how this binary format 
              doesn't capture the nuances of different Brexit approaches that were debated in the previous steps.
              The "Leave" option won with 51.9% of the vote.
            </p>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setCurrentStep('results')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              See Results →
            </button>
          </div>
        </div>
      )}

      {currentStep === 'results' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Election Results</h2>
              <div className="flex gap-3">
                <select
                  value={votingMethod}
                  onChange={(e) => setVotingMethod(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded"
                >
                  <option value="ranked">Ranked Choice Voting</option>
                  <option value="cardinal">Cardinal Voting</option>
                  <option value="binary">Binary Referendum</option>
                </select>
                <button
                  onClick={() => setShowVoterPreferences(true)}
                  className="px-4 py-2 border border-gray-300 rounded flex items-center gap-2 hover:bg-gray-50"
                >
                  <Users size={16} />
                  View Voter Preferences
                </button>
                 <button
                  onClick={() => setScene("Cardinal")}
                  className="px-4 py-2 border border-gray-300 rounded flex items-center gap-2 hover:bg-gray-50"
                >
                  <ChevronLeft size={16} />
                  Back to Cardinal Voting
                </button>
                 <button
                  onClick={() => setScene("Licensing")}
                  className="px-4 py-2 border border-gray-300 rounded flex items-center gap-2 hover:bg-gray-50"
                >
                  <ChevronRight size={16} />
                  Move to next page
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-4">Population Composition</h3>
              <p className="text-sm text-gray-600 mb-4">
                Adjust the number of voters represented by each voter type to see how it affects the outcome:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                {Object.entries(representativeVoters).map(([voterKey, voter]) => (
                  <div key={voterKey} className="bg-white p-4 rounded border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{voter.name}</span>
                      <span className="font-mono text-lg">{voterShares[voterKey]} voters</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="70"
                      value={voterShares[voterKey]}
                      onChange={(e) => updateVoterShare(voterKey, parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-3 rounded border">
                <div className="flex justify-between items-center text-sm">
                  <span>Total Voters:</span>
                  <span className="font-mono">
                    {Object.values(voterShares).reduce((sum, share) => sum + share, 0)} + You = {getTotalVoters()} voters
                  </span>
                </div>
              </div>
            </div>
            
            <ResultsDisplay />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Understanding the Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Ranked Choice Voting</h4>
                <p className="text-sm text-blue-700">
                  Voters rank candidates in order of preference. If no candidate gets a majority, 
                  the candidate with the fewest first-choice votes is eliminated, and their votes 
                  are redistributed to voters' second choices. This continues until someone has a majority.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Cardinal Voting</h4>
                <p className="text-sm text-green-700">
                  Voters assign numerical scores to each option, expressing not just preference order 
                  but also the intensity of their preferences. The option with the highest total score wins.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Binary Referendum</h4>
                <p className="text-sm text-purple-700">
                  Voters choose between just two options: Remain or Leave. This was the actual format 
                  of the 2016 Brexit referendum, but it doesn't capture preferences about different 
                  types of Brexit arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <VoterPreferencesModal />
    </div>
  );
};

export default BrexitVotingSystem;