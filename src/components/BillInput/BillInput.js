import "./BillInput.scss";
import PropTypes from "prop-types";

const BillInput = ({ bill, handleBillChange }) => {
  return (
    <div className="bill">
      <label className="label" htmlFor="bill-input">
        Bill
      </label>
      <input
        className="input"
        id="bill-input"
        type="number"
        min="0"
        max="1000000"
        placeholder="0"
        value={bill}
        onChange={(e) => handleBillChange(+Math.abs(e.target.value).toFixed(2))}
      />
    </div>
  );
};

BillInput.propTypes = {
  bill: PropTypes.number.isRequired,
  handleBillChange: PropTypes.func.isRequired,
};

export default BillInput;
