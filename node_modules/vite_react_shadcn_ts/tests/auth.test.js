import { render, screen } from '@testing-library/react';
import Login from '../src/pages/Login';

describe('Authentication Tests', () => {
  test('login page renders correctly', () => {
    render(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('voter id validation', () => {
    const voterId = 'VOT123';
    expect(voterId).toMatch(/^VOT\d{3}$/);
  });
});
