// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CalcItem(props) {
  const { item, itemClass } = props;
  return (
    <button type="button" className={itemClass}>
      {item}
    </button>
  );
}

CalcItem.propTypes = {
  item: PropTypes.string.isRequired,
  itemClass: PropTypes.string.isRequired,
};

function Calculator() {
  return (
    <article className="calculator">
      <input className="resultBar" placeholder="0" />
      <div className="calculatorItems">
        <CalcItem item="AC" itemClass="symbol" />
        <CalcItem item="+/-" itemClass="symbol" />
        <CalcItem item="%" itemClass="symbol" />
        <CalcItem item="÷" itemClass="symbolOrange" />
        <CalcItem item="7" itemClass="symbol" />
        <CalcItem item="8" itemClass="symbol" />
        <CalcItem item="9" itemClass="symbol" />
        <CalcItem item="X" itemClass="symbolOrange" />
        <CalcItem item="4" itemClass="symbol" />
        <CalcItem item="5" itemClass="symbol" />
        <CalcItem item="6" itemClass="symbol" />
        <CalcItem item="-" itemClass="symbolOrange" />
        <CalcItem item="1" itemClass="symbol" />
        <CalcItem item="2" itemClass="symbol" />
        <CalcItem item="3" itemClass="symbol" />
        <CalcItem item="+" itemClass="symbolOrange" />
        <CalcItem item="0" itemClass="symbol0" />
        <CalcItem item="." itemClass="symbol" />
        <CalcItem item="=" itemClass="symbolOrange" />

      </div>
    </article>
  );
}

export default Calculator;
