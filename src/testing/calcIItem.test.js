import { fireEvent, render } from '@testing-library/react';
import CalcItem from '../components/CalcItem';

describe('Renders a individual buttons for the calculator', () => {
  test('render', () => {
    const myFunc = jest.fn();
    const { btn } = render(<CalcItem
      item="+"
      itemClass="class"
      calc={myFunc}
    />);
    expect(btn).toMatchSnapshot();
  });
  test('press a button', () => {
    const myFunc = jest.fn();
    const { getByTestId } = render(<CalcItem
      item="+"
      itemClass="class"
      calc={myFunc}
    />);
    fireEvent.click(getByTestId('buttonTestId'));
    expect(myFunc).toHaveBeenCalled();
  });
});
