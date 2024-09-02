import {
  Physics,
  usePlane,
  useBox,
  type BoxProps,
  type PlaneProps,
} from '@react-three/cannon';
import {
  KeyboardControls,
  OrbitControls,
  type KeyboardControlsEntry,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';

const Plane: React.FC<PlaneProps> = props => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial />
    </mesh>
  );
};

const Cube: React.FC<BoxProps> = props => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  );
};

export const App = () => {
  return (
    <Canvas>
      <Physics>
        <Plane />
        <Cube position={[0, 5, 0]} />
        <Cube position={[0, 10, 0]} />
        <Cube position={[0, 20, 0]} />
        <OrbitControls />
      </Physics>
    </Canvas>
  );
};
