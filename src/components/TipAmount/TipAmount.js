import "./TipAmount.scss";
import PropTypes from "prop-types";

const TipAmount = ({ tipPerPerson }) => (
  <div className="tip-amount">
    <label>
      Tip Amount <br /> <span>/ person</span>
    </label>
    <label className="result-text">{`$${tipPerPerson}`}</label>
  </div>
);

TipAmount.propTypes = {
  tipPerPerson: PropTypes.string.isRequired,
};

export default TipAmount;
