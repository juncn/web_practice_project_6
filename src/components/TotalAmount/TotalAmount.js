import "./TotalAmount.scss";

const TotalAmount = ({ totalPerPerson }) => (
  <div className="total">
    <label>
      Total <br /> <span>/ person</span>
    </label>
    <label className="result-text">{`$${totalPerPerson}`}</label>
  </div>
);

export default TotalAmount;
