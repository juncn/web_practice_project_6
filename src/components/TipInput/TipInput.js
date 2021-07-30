import "./TipInput.scss";
import PropTypes from "prop-types";

const TipInput = ({ tip, customTip, handleTipChange, handleCustomTipChange }) => {
  const handleOnChange = (e) => {
    if (e.target.type === "radio") {
      if (customTip !== "") {
        handleCustomTipChange("");
      }
      handleTipChange(e.target.value);
    }
  }

  const handleCustomPercentChange = (e) => {
    if (e.target.value === "") {
      handleTipChange("15");
    } else {
      handleTipChange("");
    }
    handleCustomTipChange(e.target.value.toString());
  }

  return (
    <div className="tip">
      <label className="label">Select Tip &#37;</label>
      <div className="tip-percent" onChange={e => handleOnChange(e)}>
        <input readOnly className="tip-input" type="radio" name="tip" value="5" id="5percent" checked={tip === "5"} />
        <label className="tip-label" htmlFor="5percent">5&#37;</label>
        <input readOnly className="tip-input" type="radio" name="tip" value="10" id="10percent" checked={tip === "10"} />
        <label className="tip-label" htmlFor="10percent">10&#37;</label>
        <input readOnly className="tip-input" type="radio" name="tip" value="15" id="15percent" checked={tip === "15"} />
        <label className="tip-label" htmlFor="15percent">15&#37;</label>
        <input readOnly className="tip-input" type="radio" name="tip" value="25" id="25percent" checked={tip === "25"} />
        <label className="tip-label" htmlFor="25percent">25&#37;</label>
        <input readOnly className="tip-input" type="radio" name="tip" value="50" id="50percent" checked={tip === "50"} />
        <label className="tip-label" htmlFor="50percent">50&#37;</label>
        <input
          className="custom-percent"
          type="number"
          placeholder="Custom"
          step="1"
          value={customTip}
          onChange={(e) => handleCustomPercentChange(e)}
        />
      </div>
    </div>
  );
};

TipInput.propTypes = {
  tip: PropTypes.string.isRequired,
  customTip: PropTypes.string.isRequired,
  handleTipChange: PropTypes.func.isRequired,
  handleCustomTipChange: PropTypes.func.isRequired,
};

export default TipInput;
