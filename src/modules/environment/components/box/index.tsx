import { useBox, type BoxProps } from '@react-three/cannon';

export type BoxMeshProps = React.PropsWithChildren<BoxProps>;

export const BoxMesh: React.FC<BoxMeshProps> = ({ children, ...props }) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));

  return (
    <mesh ref={ref}>
      <boxGeometry />
      {children}
    </mesh>
  );
};
