import { render } from '@testing-library/react';
import ComputerQuotes from '../components/quotes';

describe('Renders a random computer quote', () => {
  test('render', () => {
    const { quote } = render(<ComputerQuotes />);
    expect(quote).toMatchSnapshot();
  });
});
