import { render } from '@testing-library/react';
import CandidateList from '../CandidateList';

describe('CandidateList', () => {
  const mockCandidates = [
    { id: '1', name: 'John Doe', party: 'Party A' },
    { id: '2', name: 'Jane Smith', party: 'Party B' }
  ];

  it('renders candidate list correctly', () => {
    const { getByText } = render(<CandidateList candidates={mockCandidates} />);
    
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Smith')).toBeInTheDocument();
  });
});
