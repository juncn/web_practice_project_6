import { useEffect, useState } from "react";
import "./Calculator.scss";
import BillInput from "../BillInput/BillInput";

const Calculator = () => {
  const [bill, setBill] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [tip, setTip] = useState(15);
  const [customTip, setCustomTip] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    console.log(bill, typeof bill);
    const finalTipPercent = customTip > 0 ? customTip : tip;
    setTipPerPerson(
      parseFloat((bill * (finalTipPercent / 100)) / numOfPeople).toFixed(2)
    );
  }, [bill, numOfPeople, tip, customTip]);

  useEffect(() => {
    const finalTotalPerPerson = parseFloat(
      bill / numOfPeople + parseFloat(tipPerPerson)
    ).toFixed(2);
    setTotalPerPerson(finalTotalPerPerson);
  }, [bill, numOfPeople, tipPerPerson]);

  const handleTipChange = (e) => {
    if (e.target.type === "submit") {
      setTip(+parseFloat(e.target.textContent));
      setCustomTip(0);
    }
  };

  const handleBillChange = (newBill) => {
    setBill(newBill);
  }

  const handleReset = () => {
    setBill(0);
    setNumOfPeople(1);
    setTip(15);
    setCustomTip("");
  };

  return (
    <main>
      <section className="input-section">
        <BillInput bill={bill} handleBillChange={handleBillChange} />
        <div className="tip">
          <label className="label">Select Tip &#37;</label>
          <div className="tip-percent" onClick={(e) => handleTipChange(e)}>
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
                setCustomTip(Math.abs(e.target.value).toFixed(2) || 0)
              }
            />
          </div>
        </div>
        <div className="people">
          <label className="label" htmlFor="num-of-people">
            Number of People
          </label>
          <input
            className="input"
            id="num-of-people"
            type="number"
            placeholder="1"
            min="1"
            step="1"
            pattern="/d+"
            value={numOfPeople || 1}
            onChange={(e) =>
              setNumOfPeople(Math.abs(Math.ceil(e.target.value) || 1))
            }
          />
        </div>
      </section>
      <section className="result-section">
        <div className="tip-amount">
          <label>
            Tip Amount <br /> <span>/ person</span>
          </label>
          <label className="result-text">{`$${tipPerPerson}`}</label>
        </div>
        <div className="total">
          <label>
            Total <br /> <span>/ person</span>
          </label>
          <label className="result-text">{`$${totalPerPerson}`}</label>
        </div>
        <div className="reset">
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
