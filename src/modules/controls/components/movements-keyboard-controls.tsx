import { KeyboardControls } from '@react-three/drei';
import { movementKeyboardControlsMap } from '../constants';

type MovementsKeyboardControlsProps = Omit<
  React.ComponentProps<typeof KeyboardControls>,
  'map'
>;

export const MovementsKeyboardControls: React.FC<
  MovementsKeyboardControlsProps
> = props => (
  <KeyboardControls map={movementKeyboardControlsMap} {...props}></KeyboardControls>
);
