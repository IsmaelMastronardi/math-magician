import PropTypes from 'prop-types';

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

export default CalcItem;
