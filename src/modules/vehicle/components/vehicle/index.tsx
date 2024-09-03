import { useBox, useHingeConstraint } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { VehicleWheel } from '$modules/vehicle';
import { useRef } from 'react';
import { Object3D } from 'three';
import { MovementControlsEnum } from '$modules/controls';

export const Vehicle = () => {
  const wheel1Ref = useRef<Object3D>(null);
  const wheel2Ref = useRef<Object3D>(null);
  const wheel3Ref = useRef<Object3D>(null);
  const wheel4Ref = useRef<Object3D>(null);

  const [bodyRef, bodyApi] = useBox(() => ({
    mass: 10,
    position: [0, 1, 0],
    args: [6, 1, 3],
  }));

  useHingeConstraint(bodyRef, wheel1Ref, {
    pivotA: [-3, -0.5, 2],
    axisA: [0, 0, 1],
    pivotB: [0, 0, 0],
    axisB: [0, 1, 0],
  });

  useHingeConstraint(bodyRef, wheel2Ref, {
    pivotA: [-3, -0.5, -2],
    axisA: [0, 0, 1],
    pivotB: [0, 0, 0],
    axisB: [0, 1, 0],
  });

  useHingeConstraint(bodyRef, wheel3Ref, {
    pivotA: [3, -0.5, 2],
    axisA: [0, 0, 1],
    pivotB: [0, 0, 0],
    axisB: [0, 1, 0],
  });

  useHingeConstraint(bodyRef, wheel4Ref, {
    pivotA: [3, -0.5, -2],
    axisA: [0, 0, 1],
    pivotB: [0, 0, 0],
    axisB: [0, 1, 0],
  });

  const forwardPressed = useKeyboardControls<MovementControlsEnum>(s => s.forward);
  const backwardPressed = useKeyboardControls<MovementControlsEnum>(s => s.backward);
  const leftPressed = useKeyboardControls<MovementControlsEnum>(s => s.left);
  const rightPressed = useKeyboardControls<MovementControlsEnum>(s => s.right);
  const breakPressed = useKeyboardControls<MovementControlsEnum>(s => s.break);

  useFrame(() => {
    if (forwardPressed) bodyApi.applyForce([100, 0, 0], [0, 0, 0]);
    if (backwardPressed) bodyApi.applyForce([-100, 0, 0], [0, 0, 0]);
  });

  return (
    <group>
      <mesh ref={bodyRef}>
        <boxGeometry args={[6, 1, 3]}>
          <meshStandardMaterial color='red' />
        </boxGeometry>
      </mesh>
      <VehicleWheel ref={wheel1Ref} position={[-2, 1, 2]}>
        <meshStandardMaterial color='yellow' />
      </VehicleWheel>
      <VehicleWheel ref={wheel2Ref} position={[-2, 1, -2]}>
        <meshStandardMaterial color='yellow' />
      </VehicleWheel>
      <VehicleWheel ref={wheel3Ref} position={[2, 1, 2]}>
        <meshStandardMaterial color='yellow' />
      </VehicleWheel>
      <VehicleWheel ref={wheel4Ref} position={[2, 1, -2]}>
        <meshStandardMaterial color='yellow' />
      </VehicleWheel>
    </group>
  );
};
