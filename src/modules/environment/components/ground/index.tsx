import { usePlane } from '@react-three/cannon';

export type GroundPlanProps = React.PropsWithChildren<{}>;

export const GroundPlan: React.FC<GroundPlanProps> = ({ children }) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      {children}
    </mesh>
  );
};
