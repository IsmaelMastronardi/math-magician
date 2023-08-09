// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

function CalcItem(props) {
  const { item, itemClass, calc } = props;
  return (
    <button
      type="button"
      className={itemClass}
      onClick={calc}
    >
      {item}
    </button>
  );
}

CalcItem.propTypes = {
  item: PropTypes.string.isRequired,
  itemClass: PropTypes.string.isRequired,
  calc: PropTypes.func.isRequired,
};

function Calculator() {
  const [myData, setMyData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = () => {
    setMyData(calculate(myData, 'AC'));
  };
  return (
    <article className="calculator">
      <input className="resultBar" value={myData.total || 1} />
      <div className="calculatorItems">
        <CalcItem item="AC" itemClass="symbol" calc={() => handleClick} />
        {/* <CalcItem item="+/-" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="%" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="÷" itemClass="symbolOrange" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="7" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="8" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="9" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="X" itemClass="symbolOrange" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="4" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="5" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="6" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="-" itemClass="symbolOrange" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="1" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="2" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="3" itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="+" itemClass="symbolOrange" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="0" itemClass="symbol0" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="." itemClass="symbol" calc={() => calculate(calcDataObj, 'AC')} />
        <CalcItem item="=" itemClass="symbolOrange" calc={() => calculate(calcDataObj, 'AC')} /> */}
      </div>
    </article>
  );
}

export default Calculator;
