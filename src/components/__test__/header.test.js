import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header';

test('should render a Header component', () => {
  render(<Header />);
  const headerElement= screen.getByTestId('header-test');
  expect(headerElement).toBeInTheDocument();
})

test('Header component should have content', () => {
  render(<Header />);
  const headerElement= screen.getByTestId('header-test');
  expect(headerElement).toHaveTextContent("GITHUB USER FAVORITE LANGUAGE FINDER");
})