import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the Title', () => {
  render(<App />);
  const title = screen.getByText(/Welcome to my personal site!/i);
  expect(title).toBeInTheDocument();
});

test('Renders the intro', () => {
  render(<App />);
  const desc = screen.getByText(/My name is Ata/i);
  expect(desc).toBeInTheDocument();
});

test('Renders the image caption', () => {
  render(<App />);
  const cap = screen.getByText(/Check out my shots/i);
  expect(cap).toBeInTheDocument();
});
