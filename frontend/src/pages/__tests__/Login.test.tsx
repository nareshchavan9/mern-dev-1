import { render } from '@testing-library/react';
import Login from '../Login';

describe('Login Page', () => {
  it('renders login form', () => {
    const { getByRole } = render(<Login />);
    expect(getByRole('heading', { name: /login/i })).toBeInTheDocument();
  });
});
