import { render, screen } from '@testing-library/react';
import Header from './components/Header';

jest.mock('./context/useAccount.js', () => ({
  useAccount: () => ({
    isLoggedIn: false,
    logOut: jest.fn()
  })
}));

test('renders the main navigation links', () => {
  render(<Header />);

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Movies')).toBeInTheDocument();
  expect(screen.getByText('Showtimes')).toBeInTheDocument();
  expect(screen.getByText('Favorites')).toBeInTheDocument();
  expect(screen.getByText('Reviews')).toBeInTheDocument();
  expect(screen.getByText('Groups')).toBeInTheDocument();
});