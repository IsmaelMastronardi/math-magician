import PropTypes from 'prop-types';

function ResultBar(props) {
  const { item } = props;
  return (
    <p className="resultBar" data-testid="resultBarTestId">
      {item}
    </p>
  );
}

ResultBar.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ResultBar;
