import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Calculator App', () => {
  render(<App />);
  const calculatorElement = screen.getByTitle('Calculator');
  expect(calculatorElement).toBeInTheDocument();
});
