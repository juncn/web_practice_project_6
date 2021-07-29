const TipInput = ({ customTip, handleTipChange }) => {
  return (
    <div className="tip">
      <label className="label">Select Tip &#37;</label>
      <div className="tip-percent">
        <button className="tip-percent-btn">5&#37;</button>
        <button className="tip-percent-btn">10&#37;</button>
        <button className="tip-percent-btn">15&#37;</button>
        <button className="tip-percent-btn">25&#37;</button>
        <button className="tip-percent-btn">50&#37;</button>
        <input
          className="custom-percent"
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(e) =>
            handleTipChange(+Math.abs(e.target.value).toFixed(2) || 0)
          }
        />
      </div>
    </div>
  );
};

export default TipInput;
