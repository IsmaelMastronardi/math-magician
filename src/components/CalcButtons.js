// import { element } from 'prop-types';
import PropTypes from 'prop-types';
import CalcItem from './CalcItem';

function CalculatorButtons({ arr, handleClick }) {
  return (
    <div className="calculatorItems">
      {arr.map((item) => (
        <CalcItem
          key={item.symbol}
          item={item.symbol}
          itemClass={item.class}
          calc={() => handleClick(item.symbol)}
        />
      ))}
    </div>
  );
}

CalculatorButtons.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorButtons;
