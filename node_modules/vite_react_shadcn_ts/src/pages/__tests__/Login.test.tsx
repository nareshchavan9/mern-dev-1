import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

jest.mock('../../services/api', () => ({
  authService: {
    login: jest.fn()
  }
}));

describe('Login Page', () => {
  it('renders login form', () => {
    render(<Login />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  });

  it('handles input changes', () => {
    render(<Login />);
    const voterIdInput = screen.getByLabelText(/Voter ID/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(voterIdInput, { target: { value: 'VOT123' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(voterIdInput.value).toBe('VOT123');
    expect(passwordInput.value).toBe('password123');
  });
});
