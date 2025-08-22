import React, { useState, useRef, useEffect } from 'react';

const SocialWelfareGame = ({ setScene }) => {
  const [coins, setCoins] = useState(() => {
    // Initialize 10 coins in the central pile
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      owner: 'pile',
      position: { x: 0, y: 0 }
    }));
  });
  
  const [draggedCoin, setDraggedCoin] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [welfareFunction, setWelfareFunction] = useState('nash');
  
  const gameRef = useRef(null);

  // Calculate wealth for each person
  const getWealth = (person) => coins.filter(coin => coin.owner === person).length;
  
  const wealth1 = getWealth('person1');
  const wealth2 = getWealth('person2');
  const wealth3 = getWealth('person3');
  
  // Calculate welfare based on selected function
  const calculateWelfare = () => {
    switch(welfareFunction) {
      case 'nash':
        return wealth1 * wealth2 * wealth3;
      case 'utilitarian':
        return wealth1 + wealth2 + wealth3;
      case 'rawlsian':
        return Math.min(wealth1, wealth2, wealth3);
      default:
        return wealth1 * wealth2 * wealth3;
    }
  };
  
  const welfareScore = calculateWelfare();
  const maxPossibleWelfare = welfareFunction === 'nash' ? Math.floor(10/3) * Math.floor(10/3) * Math.floor(10/3) : 
                           welfareFunction === 'utilitarian' ? 10 : Math.floor(10/3);
  
  // Array of background images for different welfare score ranges
const backgroundImages = [
  '/assets/Neighbourhood5.jpg',    // 0-0.2: Very low welfare
  '/assets/Neighbourhood4.jpg',         // 0.2-0.4: Low welfare
  '/assets/Neighbourhood3.jpg',      // 0.4-0.6: Medium welfare
  '/assets/Neighbourhood2.jpg',        // 0.6-0.8: High welfare
  '/assets/Neighbourhood1.jpg'    // 0.8-1.0: Very high welfare
];

// Get background image based on welfare score
const getBackgroundImage = () => {
  const intensity = Math.min(welfareScore / maxPossibleWelfare, 1);
  
  // Determine which image to use based on score ranges
  let imageIndex;
  if (intensity < 0.2) {
    imageIndex = 0; // Very low welfare
  } else if (intensity < 0.4) {
    imageIndex = 1; // Low welfare
  } else if (intensity < 0.6) {
    imageIndex = 2; // Medium welfare
  } else if (intensity < 0.8) {
    imageIndex = 3; // High welfare
  } else {
    imageIndex = 4; // Very high welfare
  }
  
  return backgroundImages[imageIndex];
};

// Background style using selected image
const getBackgroundStyle = () => {
  const backgroundImage = getBackgroundImage();
  return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //backgroundAttachment: 'fixed' // Optional: creates parallax effect
  };
};

// Alternative version with smoother transitions between score ranges
const getBackgroundImageSmooth = () => {
  const intensity = Math.min(welfareScore / maxPossibleWelfare, 1);
  
  // Calculate exact position in the 0-4 range (5 images = indices 0-4)
  const position = intensity * 4;
  const imageIndex = Math.floor(position);
  
  // Ensure we don't exceed array bounds
  const clampedIndex = Math.min(imageIndex, backgroundImages.length - 1);
  
  return backgroundImages[clampedIndex];
};

// Usage in your component:
const backgroundStyle = getBackgroundStyle();
  
  // Get happiness level for character expressions
  const getHappiness = (wealth) => {
    if (wealth === 0) return 'sad';
    if (wealth <= 5) return 'neutral';
    if (wealth <= 12) return 'happy';
    return 'very-happy';
  };
  
  const getEmoji = (happiness) => {
    switch(happiness) {
      case 'sad': return '😢';
      case 'neutral': return '😐';
      case 'happy': return '😊';
      case 'very-happy': return '😄';
      default: return '😐';
    }
  };

  const handleMouseDown = (e, coin) => {
    e.preventDefault();
    const rect = gameRef.current.getBoundingClientRect();
    const coinElement = e.target.closest('.coin');
    const coinRect = coinElement.getBoundingClientRect();
    
    setDraggedCoin(coin.id);
    setDragOffset({
      x: e.clientX - coinRect.left - coinRect.width / 2,
      y: e.clientY - coinRect.top - coinRect.height / 2
    });
  };

  const handleMouseMove = (e) => {
    if (draggedCoin === null) return;
    
    const rect = gameRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;
    
    setCoins(prev => prev.map(coin => 
      coin.id === draggedCoin 
        ? { ...coin, position: { x: newX, y: newY } }
        : coin
    ));
  };

  const handleMouseUp = (e) => {
    if (draggedCoin === null) return;
    
    const rect = gameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check drop zones
    let newOwner = 'pile';
    if (x > 60 && x < 240 && y > 250 && y < 430) newOwner = 'person1';
    else if (x > 310 && x < 490 && y > 250 && y < 430) newOwner = 'person2';
    else if (x > 560 && x < 740 && y > 250 && y < 430) newOwner = 'person3';
    
    setCoins(prev => prev.map(coin => 
      coin.id === draggedCoin 
        ? { ...coin, owner: newOwner, position: { x: 0, y: 0 } }
        : coin
    ));
    
    setDraggedCoin(null);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = (e) => handleMouseUp(e);
    
    if (draggedCoin !== null) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [draggedCoin, dragOffset]);

  const reset = () => {
    setCoins(Array.from({ length: 10 }, (_, i) => ({
      id: i,
      owner: 'pile',
      position: { x: 0, y: 0 }
    })));
  };

  const renderCoins = (owner, containerClass) => {
    const ownerCoins = coins.filter(coin => coin.owner === owner);
    return ownerCoins.map((coin, index) => (
      <div
        key={coin.id}
        className={`coin ${draggedCoin === coin.id ? 'dragging' : ''}`}
        style={draggedCoin === coin.id ? {
          position: 'absolute',
          left: coin.position.x,
          top: coin.position.y,
          zIndex: 1000
        } : {
          position: 'relative',
          marginRight: index < ownerCoins.length - 1 ? '-8px' : '0'
        }}
        onMouseDown={(e) => handleMouseDown(e, coin)}
      >
        🪙
      </div>
    ));
  };

  return (
    <div 
      ref={gameRef}
      className="game-container"
      style={getBackgroundStyle()}
    >
      <style>{`
        .game-container {
          width: 800px;
          height: 800px;
          margin: 40px auto;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          user-select: none;
          transition: background 0.5s ease;

          display: block;  /* let content flow top → bottom */
        }

        .header {
          background: rgba(255, 255, 255, 0.9);
          padding: 15px;
          text-align: center;
          backdrop-filter: blur(10px);
          width: 100%;  /* make sure it spans full container width */
          position: relative; /* ensure it's in normal flow */
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 10px 0;
          color: #2c3e50;
        }
        
        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }
        
        .welfare-select {
          padding: 8px 12px;
          border: 2px solid #3498db;
          border-radius: 8px;
          background: white;
          font-size: 14px;
          cursor: pointer;
        }
        
        .reset-btn {
          padding: 8px 16px;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }
        
        .reset-btn:hover {
          background: #c0392b;
        }
        
        .score {
          font-size: 18px;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .coin-pile {
          position: absolute;
          top: 500px;
          left: 350px;
          width: 100px;
          height: 80px;
          background: rgba(255, 255, 255, 0.3);
          border: 3px dashed rgba(255, 255, 255, 0.6);
          border-radius: 15px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
        
        .person {
          position: absolute;
          width: 180px;
          height: 180px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .person:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .person1 { top: 250px; left: 60px; }
        .person2 { top: 250px; left: 310px; }
        .person3 { top: 250px; left: 560px; }
        
        .person-emoji {
          font-size: 48px;
          margin-bottom: 10px;
        }
        
        .person-wealth {
          font-size: 16px;
          font-weight: bold;
          color: white;
          margin-bottom: 10px;
        }
        
        .person-coins {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 160px;
          max-height: 60px;
          overflow: hidden;
        }
        
        .coin {
          font-size: 20px;
          cursor: grab;
          transition: transform 0.2s ease;
        }
        
        .coin:hover {
          transform: scale(1.1);
        }
        
        .coin.dragging {
          cursor: grabbing;
          transform: scale(1.2);
        }
        
        .instructions {
          position: absolute;
          bottom: 50px;
          right: 20px;
          width: 200px;
          background: rgba(255, 255, 255, 0.9);
          padding: 15px;
          border-radius: 10px;
          font-size: 14px;
          color: #2c3e50;
        }
        
        .formula {
          font-family: monospace;
          font-weight: bold;
          color: #8e44ad;
        }
      `}</style>
      
      <div className="header">
        <h1 className="title">Social Welfare and Distribution Game</h1>
        <div className="controls">
          <select 
            className="welfare-select"
            value={welfareFunction}
            onChange={(e) => setWelfareFunction(e.target.value)}
          >
            <option value="nash">Nash Product (W = A × B × C)</option>
            <option value="utilitarian">Utilitarian Sum (W = A + B + C)</option>
            <option value="rawlsian">Rawlsian Maximin (W = min(A,B,C))</option>
          </select>
          <button className="reset-btn" onClick={reset}>Reset</button>
          <button className="reset-btn" onClick={() => setScene("WelfareGameOutro")}>Next</button>
        </div>
        <div className="score">
          Welfare Score: <span className="formula">{welfareScore}</span>
        </div>
      </div>
      
      <div className="person person1">
        <div className="person-emoji">{getEmoji(getHappiness(wealth1))}</div>
        <div className="person-wealth">John: {wealth1} coins</div>
        <div className="person-coins">
          {renderCoins('person1')}
        </div>
      </div>
      
      <div className="person person2">
        <div className="person-emoji">{getEmoji(getHappiness(wealth2))}</div>
        <div className="person-wealth">Olivia: {wealth2} coins</div>
        <div className="person-coins">
          {renderCoins('person2')}
        </div>
      </div>
      
      <div className="person person3">
        <div className="person-emoji">{getEmoji(getHappiness(wealth3))}</div>
        <div className="person-wealth">Jeremy: {wealth3} coins</div>
        <div className="person-coins">
          {renderCoins('person3')}
        </div>
      </div>
      
      <div className="coin-pile">
        {renderCoins('pile')}
      </div>
      
      <div className="instructions">
        <strong>Instructions:</strong> Drag coins from the center pile to John, Olivia, and Jeremy. 
        Watch how different distributions affect individual happiness and overall welfare.
      </div>
    </div>
  );
};

export default SocialWelfareGame;