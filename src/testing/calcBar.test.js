import { render } from '@testing-library/react';
import ResultBar from '../components/CalculatorBar';

describe('Renders a result bar', () => {
  test('render', () => {
    const { bar } = render(<ResultBar item="0" />);
    expect(bar).toMatchSnapshot();
  });
  test('get value from result bar', () => {
    const { getByTestId } = render(<ResultBar item="0" />);
    const value = getByTestId('resultBarTestId').textContent;
    expect(value).toBe('0');
  });
});
