import { useEffect, useState } from "react";
import "./Calculator.scss";
import BillInput from "../BillInput/BillInput";
import TipInput from "../TipInput/TipInput";
import PeopleInput from "../PeopleInput/PeopleInput";

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

  const handleTipChange = (newTip) => {
    setTip(newTip);
  };

  const handleBillChange = (newBill) => {
    setBill(newBill);
  }

  const handleNumOfPeopleChange = (newNumOfPeople) => {
    setNumOfPeople(newNumOfPeople);
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
        <TipInput customTip={customTip} handleTipChange={handleTipChange} />
        <PeopleInput numOfPeople={numOfPeople} handleNumOfPeopleChange={handleNumOfPeopleChange} />
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
