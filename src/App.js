import React from 'react';
import { Canvas } from './components/Canvas';
import { ActiveFigure } from './components/Figure';
import { createRandomGeometries } from './utils/createRandomGeometries';

function App() {
  const geometriesList = createRandomGeometries(150);

  return (
    <Canvas
      childrenSLot={geometriesList.map(({ position, geometry, key }) => (
        <ActiveFigure key={key} position={position} geometry={geometry} />
      ))}
    />
  );
}

export default App;
