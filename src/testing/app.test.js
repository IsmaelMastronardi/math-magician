/* eslint-disable import/no-extraneous-dependencies */
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import App from '../App';

describe('Renders App', () => {
  test('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
