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

function InputBar(props) {
  const { item } = props;
  return (
    <p>
      {item}
    </p>
  );
}

InputBar.propTypes = {
  item: PropTypes.string.isRequired,
};

function Calculator() {
  const [myData, setMyData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (item) => {
    setMyData(calculate(myData, item));
  };
  return (
    <article className="calculator">
      <InputBar item={myData.total || myData.next || myData.operation || '0'} />
      <div className="calculatorItems">
        <CalcItem item="AC" itemClass="symbol" calc={() => handleClick('AC')} />
        <CalcItem item="+/-" itemClass="symbol" calc={() => handleClick('+/-')} />
        <CalcItem item="%" itemClass="symbol" calc={() => handleClick('%')} />
        <CalcItem item="÷" itemClass="symbolOrange" calc={() => handleClick('÷')} />
        <CalcItem item="7" itemClass="symbol" calc={() => handleClick('7')} />
        <CalcItem item="8" itemClass="symbol" calc={() => handleClick('8')} />
        <CalcItem item="9" itemClass="symbol" calc={() => handleClick('9')} />
        <CalcItem item="X" itemClass="symbolOrange" calc={() => handleClick('x')} />
        <CalcItem item="4" itemClass="symbol" calc={() => handleClick('4')} />
        <CalcItem item="5" itemClass="symbol" calc={() => handleClick('5')} />
        <CalcItem item="6" itemClass="symbol" calc={() => handleClick('6')} />
        <CalcItem item="-" itemClass="symbolOrange" calc={() => handleClick('-')} />
        <CalcItem item="1" itemClass="symbol" calc={() => handleClick('1')} />
        <CalcItem item="2" itemClass="symbol" calc={() => handleClick('2')} />
        <CalcItem item="3" itemClass="symbol" calc={() => handleClick('3')} />
        <CalcItem item="+" itemClass="symbolOrange" calc={() => handleClick('+')} />
        <CalcItem item="0" itemClass="symbol0" calc={() => handleClick('0')} />
        <CalcItem item="." itemClass="symbol" calc={() => handleClick('.')} />
        <CalcItem item="=" itemClass="symbolOrange" calc={() => handleClick('=')} />
      </div>
    </article>
  );
}

export default Calculator;
