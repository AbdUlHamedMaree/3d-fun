import { useCylinder, type CylinderProps } from '@react-three/cannon';
import { forwardRef } from 'react';
import { Object3D } from 'three';

export type VehicleWheelProps = React.PropsWithChildren<CylinderProps>;

export const VehicleWheel = forwardRef<Object3D, VehicleWheelProps>(
  ({ children, ...props }, forwardedRef) => {
    const [ref] = useCylinder(
      () => ({
        mass: 5,
        position: [0, 1, 0],
        rotation: [Math.PI / 2, 0, 0],
        allowSleep: true,
        args: [1, 1, 1, 24],
        ...props,
      }),
      forwardedRef
    );

    return (
      <mesh ref={ref}>
        <cylinderGeometry />
        {children}
      </mesh>
    );
  }
);
