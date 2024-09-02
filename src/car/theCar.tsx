import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useKeyboardControls } from '@react-three/drei';
import {
  Physics,
  PlaneProps,
  useBox,
  usePlane,
  useRaycastVehicle,
} from '@react-three/cannon';
import { MovementControlsEnum, MovementsKeyboardControls } from '../modules/controls';
import { useEffect } from 'react';

const CoolCar = () => {
  const { scene } = useGLTF('/scene.gltf');

  return <primitive object={scene} scale={0.5} />;
};

const Plane: React.FC<PlaneProps> = props => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial />
    </mesh>
  );
};
const Car = () => {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 1, 0] }));

  const forwardPressed = useKeyboardControls<MovementControlsEnum>(
    state => state.forward
  );
  const backwardPressed = useKeyboardControls<MovementControlsEnum>(
    state => state.backward
  );
  const leftwardPressed = useKeyboardControls<MovementControlsEnum>(state => state.left);
  const rightwardPressed = useKeyboardControls<MovementControlsEnum>(
    state => state.right
  );

  useFrame(() => {
    if (forwardPressed) api.applyForce([30, 0, 0], [0, 0, 0]);
    if (backwardPressed) api.applyForce([-30, 0, 0], [0, 0, 0]);
    if (leftwardPressed) api.applyForce([0, 0, -10], [0, 0, 0]);
    if (rightwardPressed) api.applyForce([0, 0, 10], [0, 0, 0]);
  });

  return (
    <group ref={ref}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color='red' />
      </mesh>

      <mesh position={[-0.75, 0.25, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
        <meshStandardMaterial color='black' />
      </mesh>
      <mesh position={[0.75, 0.25, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
        <meshStandardMaterial color='black' />
      </mesh>
      <mesh position={[-0.75, 0.25, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
        <meshStandardMaterial color='black' />
      </mesh>
      <mesh position={[0.75, 0.25, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
        <meshStandardMaterial color='black' />
      </mesh>
    </group>
  );
};

const TheCar = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Physics>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <MovementsKeyboardControls>
          <Car />
        </MovementsKeyboardControls>
        <Plane />

        <OrbitControls />
      </Physics>
    </Canvas>
  );
};

export default TheCar;
