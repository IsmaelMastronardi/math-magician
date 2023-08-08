function CalcItem(props) {
  const item = props;
  return (
    <button type="button" className="symbol">
      {item}
    </button>
  );
}
function CalcItem0(props) {
  const item = props;
  return (
    <button type="button" className="symbol0">
      {item}
    </button>
  );
}

function ResultBar() {
  return (
    <article className="calculator">
      <input className="resultBar" placeholder="0" />
      <div className="calculatorItems">
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem('10')}
        {CalcItem0('0')}
        {CalcItem('8')}
        {CalcItem('8')}
      </div>
    </article>
  );
}

export default ResultBar;
