import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count').textContent;
  expect(parseInt(count)).toEqual(0);
});

test('clicking + increments the count', () => {
  const count0 = screen.getByTestId('count').textContent;
  userEvent.click(screen.getByRole('button', { name: "+" }));
  const count1 = screen.getByTestId('count').textContent;
  expect(parseInt(count1)).toEqual(parseInt(count0) + 1);
});

test('clicking - decrements the count', () => {
  const count0 = screen.getByTestId('count').textContent;
  userEvent.click(screen.getByRole('button', {name: "-"}));
  const count1 = screen.getByTestId('count').textContent;
  expect(parseInt(count1)).toEqual(parseInt(count0) - 1);
});
