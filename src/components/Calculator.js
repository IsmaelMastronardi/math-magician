import { useState } from 'react';
import calculate from '../logic/calculate';
import ResultBar from './CalculatorBar';
import CalculatorButtons from './CalcButtons';

function Calculator() {
  const [myData, setMyData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (item) => {
    setMyData(calculate(myData, item));
  };
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
  return (
    <article className="calculator">
      <ResultBar item={myData.next || myData.operation || myData.total || '0'} />
      <div className="calculatorItems">
        <CalculatorButtons
          arr={calcSymbols}
          handleClick={handleClick}
        />
      </div>
    </article>
  );
}

export default Calculator;
