import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Home, List, AlertCircle, CheckCircle, Users, Vote, Shield, DollarSign, Building, Globe, MapPin, Gavel, Scale, TrendingUp, Heart, Zap, Lock, Unlock, Brain, Target, Eye, Award } from 'lucide-react';

const data = {
  "1": {
    title: "The system is broken",
    icon: AlertCircle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    link: "?scene=OpeningScreen",
    children: {
      "1.1": { title: "Liberal democracies and global governance institutions are paralysed", icon: Lock, color: "text-red-500" },
      "1.2": { title: "Stuck in reverse gear by veto rules", icon: Shield, color: "text-orange-500" },
      "1.3": { title: "Choked by the grip of powerful vested interests", icon: DollarSign, color: "text-yellow-600" },
      "1.4": { title: "Corrupted by the need to finance election campaigns", icon: Vote, color: "text-red-500" },
      "1.5": { title: "Unable to adequately address the needs and desires of its citizens", icon: Heart, color: "text-gray-500" },
      "1.6": { title: "Sliding into authoritarianism", icon: Gavel, color: "text-red-700" }
    }
  },
  "2": {
    title: "But it can be fixed",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    children: {
      "2.1": {
        title: "Better societies are stronger societies",
        icon: TrendingUp,
        color: "text-blue-600",
        link: "?scene=PowerPrinciple",
        children: {
          "2.1.1": { title: "Social strength draws from compounding the power of its members", icon: Users, color: "text-purple-600" },
          "2.1.2": { title: "Richer societies are stronger, thus better societies", icon: DollarSign, color: "text-green-600" },
          "2.1.3": { title: "More equal societies are stronger, thus better societies", icon: Scale, color: "text-blue-600" }
        }
      },
      "2.2": {
        title: "Strengthen societies by empowering the weak and breaking excessive power concentration",
        icon: Zap,
        color: "text-yellow-600",
        link: "?scene=EconomicPower",
        children: {
          "2.2.1": { title: "Decisions should be taken at the lowest possible efficient level of authority", icon: MapPin, color: "text-indigo-600", link: "?scene=Subsidiarity" },
          "2.2.2": { title: "Implement adequate social protection floors", icon: Shield, color: "text-green-600", link: "?scene=Weak" },
          "2.2.3": { title: "Set a limit on wealth accumulation", icon: Target, color: "text-red-600" , link: "?scene=Rich"}
        }
      },
      "2.3": {
        title: "Reform outdated institutions",
        icon: Building,
        color: "text-gray-600",
        link: "?scene=PoliticalPower",
        children: {
          "2.3.1.1": {
            title: "The nation state concentrates disproportionate power",
            icon: Building,
            color: "text-gray-700",
            link: "?scene=Nation",
            children: {
              "2.3.1.1.1": { title: "Too small to solve global issues, such as mitigating climate change, preventing conflicts, regulating economic relations, coordinating development policies, easing migration flows, etc.", icon: Globe, color: "text-blue-500" },
              "2.3.1.1.2": { title: "Too big to solve local issues, such as crime prevention, road congestion, regularity of urban transport, the cleanness of public spaces, housing availability and affordability, etc.", icon: MapPin, color: "text-green-500" }
            }
          },
          "2.3.1.2": {
            title: "Power to the people",
            icon: Users,
            color: "text-purple-600",
            link: "?scene=Representative",
            children: {
              "2.3.1.2.1": {
                title: "Devolve the making of strategic decisions to direct votes by the public, using digital technology",
                icon: Vote,
                color: "text-blue-600",
                link: "?scene=Frequency",
                children: {
                  "2.3.1.2.1.1": { title: "At global, supranational, national, regional and local level", icon: Globe, color: "text-indigo-600" }
                }
              },
              "2.3.1.2.2": {
                title: "Institute cardinal voting that compounds individual votes on a set of policy options, rather than binary yes/no plebiscites",
                icon: Scale,
                color: "text-green-600",
                link: "?scene=Cardinal",
                children: {
                  "2.3.1.2.2.1": { title: "Favours consensual options and punishes extreme ideas", icon: Heart, color: "text-pink-600" }
                }
              },
              "2.3.1.2.3": {
                title: "Subject-specific voter licencing",
                icon: Award,
                color: "text-yellow-600",
                link: "?scene=Licensing",
                children: {
                  "2.3.1.2.3.1": { title: "No more low-information voters selecting low-information leaders making imbecile decisions", icon: Brain, color: "text-purple-600" }
                }
              }
            }
          }
        }
      }
    }
  }
};

function HierarchicalNavigator({ setScene }) {
  const [currentPath, setCurrentPath] = useState([]);
  const [showFullTree, setShowFullTree] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.overflow-x-auto');
    const selectedItem = document.querySelector(`[data-item-index="${selectedIndex}"]`);
    
    if (container && selectedItem) {
      selectedItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [selectedIndex]);

  const getCurrentLevel = () => {
    let current = data;
    for (const key of currentPath) {
      current = current[key]?.children || {};
    }
    return current;
  };

  const getCurrentItems = () => {
    const level = getCurrentLevel();
    return Object.entries(level).map(([key, value]) => ({ key, ...value }));
  };

  const getParentPath = () => {
    return currentPath.slice(0, -1);
  };

  const getBreadcrumb = () => {
    let breadcrumb = [];
    let current = data;
    
    for (let i = 0; i < currentPath.length; i++) {
      const key = currentPath[i];
      if (current[key]) {
        breadcrumb.push({
          key,
          title: current[key].title,
          level: i
        });
        current = current[key].children || {};
      }
    }
    
    return breadcrumb;
  };

  const navigateDown = () => {
    const items = getCurrentItems();
    if (items[selectedIndex]?.children) {
      setCurrentPath([...currentPath, items[selectedIndex].key]);
      setSelectedIndex(0);
    }
  };

  const navigateUp = () => {
    if (currentPath.length > 0) {
      const newPath = getParentPath();
      setCurrentPath(newPath);
      setSelectedIndex(0);
    }
  };

  const navigateLeft = () => {
    const items = getCurrentItems();
    if (items.length > 0) {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    }
  };

  const navigateRight = () => {
    const items = getCurrentItems();
    if (items.length > 0) {
      setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    }
  };

  const goHome = () => {
    setCurrentPath([]);
    setSelectedIndex(0);
    // Navigate to the opening scene
    window.location.href = '?scene=OpeningScreen';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showFullTree) return;
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          navigateDown();
          break;
        case 'ArrowUp':
          e.preventDefault();
          navigateUp();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigateLeft();
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateRight();
          break;
        case 'Enter':
        case ' ': // Space key
          // Only handle if we're not focused on a button
          if (e.target.tagName !== 'BUTTON') {
            e.preventDefault();
            navigateDown(); // Or whatever default action you want
          }
          // If focused on a button, let the button handle it naturally
          break;
        case 'Home':
          e.preventDefault();
          goHome();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPath, selectedIndex, showFullTree]);

  const renderTreeView = (items, level = 0) => {
    return (
      <div className="space-y-2">
        {Object.entries(items).map(([key, value]) => (
          <div key={key} className={`pl-${level * 4}`}>
            <div className="flex items-start space-x-2 p-2 rounded">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium text-gray-800">{value.title}</p>
                {value.children && (
                  <div className="mt-2 ml-4 border-l-2 border-gray-200 pl-4">
                    {renderTreeView(value.children, level + 1)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getDepthColor = (depth) => {
    const colors = ['text-gray-900', 'text-blue-700', 'text-green-600', 'text-purple-600', 'text-red-600', 'text-yellow-600'];
    return colors[depth] || 'text-gray-600';
  };

  const items = getCurrentItems();
  const breadcrumb = getBreadcrumb();
  const currentDepth = currentPath.length;

  if (showFullTree) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Complete Political Reform Framework</h2>
          <button
            onClick={() => setShowFullTree(false)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home size={16} />
            <span>Back to Navigator</span>
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          {renderTreeView(data)}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Political Reform Framework</h1>
        <p className="text-gray-600">Navigate through the arguments using arrow keys or buttons</p>
      </div>

      {/* Breadcrumb */}
      {breadcrumb.length > 0 && (
        <div className="flex items-center space-x-2 mb-6 text-sm text-gray-600">
          <Home size={16} className="cursor-pointer hover:text-blue-600" onClick={goHome} />
          {breadcrumb.map((crumb, index) => (
            <React.Fragment key={crumb.key}>
              <ChevronRight size={14} />
              <span className={`${getDepthColor(crumb.level)} font-medium`}>
                {crumb.title.length > 50 ? crumb.title.substring(0, 50) + '...' : crumb.title}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Main Content - Horizontal Layout */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mb-6 overflow-x-auto">
        {items.length > 0 ? (
          <div className="flex space-x-6 min-w-max">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              
              return (
                <div
                  key={item.key}
                  data-item-index={index}
                  className={`flex-shrink-0 w-80 p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? `border-blue-500 bg-blue-50 ${item.bgColor || ''} shadow-lg transform scale-105` 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={(e) => {
                      // Don't select the card if clicking on a link
                      if (e.target.tagName === 'A' || e.target.closest('a')) {
                        return;
                      }
                      setSelectedIndex(index);
                    }}
                  onDoubleClick={() => {
                    setSelectedIndex(index);
                    if (item.children) {
                      navigateDown();
                    }
                  }}
                >
                  <div className="text-center">
                    {Icon && (
                      <div className="mb-4">
                        <Icon 
                          size={48} 
                          className={`${item.color || 'text-gray-600'} mx-auto`} 
                        />
                      </div>
                    )}
                    <h3 className={`text-lg font-semibold ${getDepthColor(currentDepth)} mb-3 min-h-[3rem] flex items-center justify-center`}>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="hover:underline hover:text-blue-600 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            
                            console.log('Navigating to:', item.link);
                            
                            // Try different navigation methods
                            if (item.link.startsWith('http')) {
                              window.open(item.link, '_blank');
                            } else {
                              // For internal links, try this approach
                              window.location.assign(item.link);
                            }
                          }}
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">
                        Level {currentDepth + 1} • {index + 1} of {items.length}
                      </div>
                      {item.children && (
                        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          <ChevronDown size={14} className="mr-1" />
                          {Object.keys(item.children).length} sub-items
                        </div>
                      )}
                    </div>
                    {isSelected && (
                      <div className="mt-4">
                        <div className="w-12 h-1 bg-blue-600 rounded mx-auto"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items at this level</p>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={navigateUp}
          disabled={currentPath.length === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronUp size={16} />
          <span>Up</span>
        </button>
        
        <button
          onClick={navigateLeft}
          disabled={items.length <= 1}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} />
          <span>Left</span>
        </button>

        <button
          onClick={navigateDown}
          onKeyDown={(e) => {
            console.log('Key pressed:', e.key);
            // Don't prevent default here - let it bubble up naturally
          }}
          onFocus={() => console.log('Button focused')}
          disabled={!items[selectedIndex]?.children}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronDown size={16} />
          <span>Down</span>
        </button>

        <button
          onClick={navigateRight}
          disabled={items.length <= 1}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={16} />
          <span>Right</span>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={goHome}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Home size={16} />
          <span>Home</span>
        </button>

        <button
          onClick={() => setScene("Contents")}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <List size={16} />
          <span>Show Full Contents</span>
        </button>

        <button
          onClick={() => setScene("Epilogue")}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Heart size={16} />
          <span>Epilogue</span>
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Navigation Instructions:</h4>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>• <strong>Click:</strong> Select item</div>
          <div>• <strong>Double-click:</strong> Explore selected item</div>
          <div>• <strong>↓ Down:</strong> Explore selected item</div>
          <div>• <strong>↑ Up:</strong> Go back to parent level</div>
          <div>• <strong>← Left:</strong> Previous item</div>
          <div>• <strong>→ Right:</strong> Next item</div>
        </div>
      </div>
    </div>
  );
}

export default HierarchicalNavigator;