import { render, screen, fireEvent } from '@testing-library/react';
import InfoSide from 'components/InfoSide';

test('Renders the Description', () => {
  render(<InfoSide />);
  const desc = screen.getByText(/Photographer/i);
  expect(desc).toBeInTheDocument();
});


test('Tests if Link button changes state', () => {
  render(<InfoSide />);
  const linkButton = screen.getByTestId("linkButton");
  fireEvent.click(linkButton);
  expect(screen.getByTestId("linkedIn"));
})