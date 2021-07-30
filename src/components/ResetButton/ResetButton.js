const ResetButton = ({ handleReset, active }) => (
  <div className="reset">
    <button className="reset-btn" onClick={handleReset} disabled={active}>
      Reset
    </button>
  </div>
);

export default ResetButton;
