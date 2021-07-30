import "./TipAmount.scss";

const TipAmount = ({ tipPerPerson }) => (
  <div className="tip-amount">
    <label>
      Tip Amount <br /> <span>/ person</span>
    </label>
    <label className="result-text">{`$${tipPerPerson}`}</label>
  </div>
);

export default TipAmount;
