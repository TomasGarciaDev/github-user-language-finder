import { render, screen, cleanup } from '@testing-library/react';
import Finder from '../Finder';

afterEach(() => {
  cleanup();
});

test('should render a Header component', () => {
  render(<Finder />);
  const finderElement= screen.getByTestId('finder-test');
  expect(finderElement).toBeInTheDocument();
});

test('Finder component should have a button', () => {
  render(<Finder />);
  const finderElement= screen.getByRole('button', {name:/Search/i});
  expect(finderElement).toBeDefined();
});

test('Finder component should have a input field', () => {
  render(<Finder />);
  const finderElement= screen.getByPlaceholderText('GitHub Username');
  expect(finderElement).toBeDefined();
});

test('Finder component should have a form element', () => {
  render(<Finder />);
  const finderElement= screen.getByTestId('finder-test-form');
  expect(finderElement).toBeDefined();
});