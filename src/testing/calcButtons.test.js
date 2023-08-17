import { render } from '@testing-library/react';
import CalculatorButtons from '../components/CalcButtons';

describe('Renders buttons for the calculator', () => {
  test('render', () => {
    const calcSymbols = [
      { symbol: 'AC', class: 'greyButton' },
      { symbol: '+/-', class: 'greyButton' },
      { symbol: '%', class: 'greyButton' },
      { symbol: '÷', class: 'orangeButton' },
      { symbol: '7', class: 'greyButton' },
      { symbol: '8', class: 'greyButton' },
      { symbol: '9', class: 'greyButton' },
      { symbol: 'x', class: 'orangeButton' },
      { symbol: '4', class: 'greyButton' },
      { symbol: '5', class: 'greyButton' },
      { symbol: '6', class: 'greyButton' },
      { symbol: '-', class: 'orangeButton' },
      { symbol: '1', class: 'greyButton' },
      { symbol: '2', class: 'greyButton' },
      { symbol: '3', class: 'greyButton' },
      { symbol: '+', class: 'orangeButton' },
      { symbol: '0', class: 'greyButton0' },
      { symbol: '.', class: 'greyButton' },
      { symbol: '=', class: 'orangeButton' },
    ];
    const handleClick = () => {
    };
    const { buttons } = render(<CalculatorButtons arr={calcSymbols} handleClick={handleClick} />);
    expect(buttons).toMatchSnapshot();
  });
});
