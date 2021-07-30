import "./TotalAmount.scss";
import PropTypes from "prop-types";

const TotalAmount = ({ totalPerPerson }) => (
  <div className="total">
    <label>
      Total <br /> <span>/ person</span>
    </label>
    <label className="result-text">{`$${totalPerPerson}`}</label>
  </div>
);

TotalAmount.propTypes = {
  totalPerPerson: PropTypes.string.isRequired,
};

export default TotalAmount;
