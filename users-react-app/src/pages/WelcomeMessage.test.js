import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeMessage from './WelcomeMessage';
import '@testing-library/jest-dom/extend-expect';

test('renders WelcomeMessage', () => {
  render(<WelcomeMessage />);
  const linkElement = screen.getByText(/Welcome to ABM USERS/i);
  expect(linkElement).toBeInTheDocument();
});
