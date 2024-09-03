import { KeyboardControls } from '@react-three/drei';
import { movementKeyboardControlsMap } from '../constants';

type MovementsKeyboardControlsProps = Omit<
  React.ComponentProps<typeof KeyboardControls>,
  'map'
>;

export const MovementsKeyboardControls: React.FC<MovementsKeyboardControlsProps> = ({
  children,
  ...props
}) => (
  <KeyboardControls map={movementKeyboardControlsMap} {...props}>
    {children}
  </KeyboardControls>
);
