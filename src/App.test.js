import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the Title', () => {
  render(<App />);
  const title = screen.getByText(/Welcome to my personal site!/i);
  expect(title).toBeInTheDocument();
});

test('Renders the intro', () => {
  render(<App />);
  const desc = screen.getByText(/My name is not Ata/i);
  expect(desc).toBeInTheDocument();
});

