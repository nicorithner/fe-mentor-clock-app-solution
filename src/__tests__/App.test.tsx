import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/I'm strong to the finich, cause I eats me spinach, I'm Popeye the Sailor Man!/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render popeye image', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/popeye/i);
  expect(imgElement).toBeInTheDocument();
})
