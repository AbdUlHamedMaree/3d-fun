import { Physics, Debug } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GroundPlan } from '$modules/environment';
import { MovementsKeyboardControls } from '$modules/controls';
import { Vehicle } from '$modules/vehicle/components/vehicle';
import { BoxMesh } from '$modules/environment/components/box';
import { useMemo } from 'react';

const boxesPositions: [number, number, number][] = [
  [21, 0.5, -2],
  [21, 0.5, -1],
  [21, 0.5, 0],
  [21, 0.5, 1],
  [21, 0.5, 2],
  [20, 0.5, -2],
  [20, 0.5, -1],
  [20, 0.5, 0],
  [20, 0.5, 1],
  [20, 0.5, 2],
  [21, 1.5, -2],
  [21, 1.5, -1],
  [21, 1.5, 0],
  [21, 1.5, 1],
  [21, 1.5, 2],
  [20, 1.5, -2],
  [20, 1.5, -1],
  [20, 1.5, 0],
  [20, 1.5, 1],
  [20, 1.5, 2],
];

export type MainSceneProps = {};

export const MainScene: React.FC<MainSceneProps> = () => {
  const boxesJsx = useMemo(
    () =>
      boxesPositions.map(position => (
        <BoxMesh position={position}>
          <meshStandardMaterial color='red' />
        </BoxMesh>
      )),
    []
  );
  return (
    <Canvas camera={{ position: [-6, 6, 0] }}>
      <Physics>
        <Debug>
          {boxesJsx}

          <GroundPlan>
            <meshStandardMaterial color='green' />
          </GroundPlan>
          <MovementsKeyboardControls>
            <Vehicle />
          </MovementsKeyboardControls>
          <ambientLight />
          <spotLight position={[3, 3, -3]} intensity={30} decay={2} castShadow />
          <OrbitControls />
        </Debug>
      </Physics>
    </Canvas>
  );
};
