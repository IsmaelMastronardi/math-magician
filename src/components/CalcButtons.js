// import { element } from 'prop-types';
import PropTypes from 'prop-types';
import CalcItem from './CalcItem';

function CalculatorButtons({ arr, handleClick }) {
  console.log(arr);
  return (
    <>
      {arr.map((item) => (
        <CalcItem
          key={item.symbol}
          item={item.symbol}
          itemClass={item.class}
          calc={() => handleClick(item.symbol)}
        />
      ))}
    </>
  );
}

CalculatorButtons.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorButtons;
