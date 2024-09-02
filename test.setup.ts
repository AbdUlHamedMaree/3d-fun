import { GlobalRegistrator } from '@happy-dom/global-registrator';

import { expect } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';

GlobalRegistrator.register();

expect.extend(matchers);

declare module 'bun:test' {
  interface Matchers<T>
    extends MatchersBuiltin<T>,
      matchers.TestingLibraryMatchers<ReturnType<typeof expect.stringContaining>, T> {}
}
