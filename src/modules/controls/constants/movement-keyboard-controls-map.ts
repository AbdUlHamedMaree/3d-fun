import type { KeyboardControlsEntry } from '@react-three/drei';
import { MovementControlsEnum } from '../enums/movement-controls';

export const movementKeyboardControlsMap: KeyboardControlsEntry<MovementControlsEnum>[] =
  [
    { name: MovementControlsEnum.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: MovementControlsEnum.back, keys: ['ArrowDown', 'KeyS'] },
    { name: MovementControlsEnum.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: MovementControlsEnum.right, keys: ['ArrowRight', 'KeyD'] },
    { name: MovementControlsEnum.break, keys: ['Space'] },
  ];
