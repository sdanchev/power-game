import React, { useState } from 'react';

// Auto-load all scenes from src/scenes
const sceneModules = import.meta.glob('./scenes/*.tsx', { eager: true });
type SceneComponent = React.FC<{ setScene: (scene: string) => void }>;
const scenes: Record<string, SceneComponent> = {};
for (const path in sceneModules) {
  const module = sceneModules[path] as { default: SceneComponent };
  const name = path.split('/').pop()?.replace('.tsx', '') || '';
  scenes[name] = module.default;
}

// Auto-load all components from src/components
const componentModules = import.meta.glob('./components/*.tsx', { eager: true });
const components: Record<string, SceneComponent> = {};
for (const path in componentModules) {
  const module = componentModules[path] as { default: SceneComponent };
  const name = path.split('/').pop()?.replace('.tsx', '') || '';
  components[name] = module.default;
}

export default function GameEngine() {
  // Check URL for a ?scene= query param
  const params = new URLSearchParams(window.location.search);
  const sceneParam = params.get("scene");

  // Default to OpeningScreen if no query param
  const defaultScene = sceneParam || 'OpeningScreen';

  // Allow "component:Name" in URL too
  const [currentScene, setCurrentScene] = useState(defaultScene);

  let SceneOrComponent: SceneComponent | undefined;

  if (currentScene.startsWith('component:')) {
    const compName = currentScene.replace('component:', '');
    SceneOrComponent = components[compName];
  } else {
    SceneOrComponent = scenes[currentScene];
  }

  return (
    <div className="game-container">
      {SceneOrComponent ? (
        <SceneOrComponent setScene={setCurrentScene} />
      ) : (
        <p>Scene or component not found: {currentScene}</p>
      )}
    </div>
  );
}
