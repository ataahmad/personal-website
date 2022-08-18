import { render, screen } from '@testing-library/react';
import InfoSide from 'components/InfoSide';

test('Renders the Description', () => {
  render(<InfoSide />);
  const desc = screen.getByText(/My name is Ata/i);
  expect(desc).toBeInTheDocument();
});
