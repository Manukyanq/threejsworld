import React from 'react';
import { Canvas as CanvasBase } from '@react-three/fiber';
import { FlyControls } from '@react-three/drei';
import { BoxFigure } from './Figure';

export const Canvas = ({ childrenSLot }) => (
  <CanvasBase style={{ minHeight: '100vh' }} resize={{ scroll: false }}>
    <FlyControls
      movementSpeed={5}
      dragToLook
      rollSpeed={0.2}
      autoForward={false}
    />
    <ambientLight intensity={0.5} />
    <pointLight position={[-10, -10, -10]} />
    {childrenSLot}
    <BoxFigure
      geometry="boxGeometry"
      position={[1, 1, 1]}
      args={[1, 1, 1]}
      color
    />
  </CanvasBase>
);
