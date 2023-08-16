import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Renders a calculator', () => {
  test('render calculator', () => {
    const { calculator } = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });
});
