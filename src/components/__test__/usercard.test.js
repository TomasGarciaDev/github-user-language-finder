import { render, screen, cleanup } from '@testing-library/react';
import UserCard from '../UserCard';

afterEach(() => {
  cleanup();
});

test('should render a UserCard component', () => {
  render(<UserCard />);
  const headerElement= screen.getByTestId('usercard-test');
  expect(headerElement).toBeInTheDocument();
})

test('UserCard component should have content', () => {
  render(<UserCard />);
  const headerElement= screen.getByTestId('usercard-test');
  expect(headerElement).toHaveTextContent("Superman's favorite programming language is JavaScript");
})