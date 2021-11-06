/* eslint-disable no-multi-assign */
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  BOX, TORUS, SPHERE, OCTAHEDREON,
} from '../constants/geometries';

export const ActiveFigure = (props) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y = mesh.current.rotation.z -= 0.01;
    mesh.current.position.z = mesh.current.position.z += 0.01;
  });
  const geometryMap = {
    [TORUS]: <torusGeometry args={[0.5, 0.12, 6, 20]} />,
    [BOX]: <boxGeometry args={[1, 1, 1]} />,
    [OCTAHEDREON]: <octahedronGeometry args={[2, 0]} />,
    [SPHERE]: <sphereGeometry args={[1, 16, 16]} />,
  };

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 0.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {geometryMap[props.geometry]}
      <meshLambertMaterial color={hovered ? '#3b56f7' : '#04c1f6'} />
    </mesh>
  );
};

export const BoxFigure = (props) => (
  <mesh {...props}>
    <boxGeometry args={props.args} />
    <meshLambertMaterial />
  </mesh>
);
