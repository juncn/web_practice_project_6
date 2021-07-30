import "./ResetButton.scss";
import PropTypes from "prop-types";

const ResetButton = ({ handleReset, active }) => (
  <div className="reset">
    <button className="reset-btn" onClick={handleReset} disabled={active}>
      Reset
    </button>
  </div>
);

ResetButton.propTypes = {
  active: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default ResetButton;
