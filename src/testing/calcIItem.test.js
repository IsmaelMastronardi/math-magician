import { fireEvent, render } from '@testing-library/react';
import CalcItem from '../components/CalcItem';

describe('Renders a individual buttons for the calculator', () => {
  const myFunc = () => {};
  const { btn } = render(<CalcItem
    item="+"
    itemClass="class"
    calc={myFunc}
  />);
  test('render', () => {
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
