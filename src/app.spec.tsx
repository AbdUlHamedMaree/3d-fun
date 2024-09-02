import { it, expect } from 'bun:test';
import { act, render } from '@testing-library/react';
import { App } from './app';

it('should render the App', async () => {
  const screen = await act(() => render(<App />));

  screen.debug(screen.baseElement);

  expect(screen.baseElement).toBeInTheDocument();
});
