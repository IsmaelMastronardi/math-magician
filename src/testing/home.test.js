import { render } from '@testing-library/react';
import HomePage from '../components/Home';

describe('Renders a home page', () => {
  test('render', () => {
    const { home } = render(<HomePage />);
    expect(home).toMatchSnapshot();
  });
});
