import { useEffect, useState } from "react";
import "./Calculator.scss";
import BillInput from "../BillInput/BillInput";
import TipInput from "../TipInput/TipInput";
import PeopleInput from "../PeopleInput/PeopleInput";
import TipAmount from "../TipAmount/TipAmount";
import TotalAmount from "../TotalAmount/TotalAmount";
import ResetButton from "../ResetButton/ResetButton";

const Calculator = () => {
  const DEFAULT_TIP = "15";
  const DEFAULT_CUSTOM_TIP = "";

  const [isBtnActive, setIsBtnActive] = useState(true);
  const [bill, setBill] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [tip, setTip] = useState(DEFAULT_TIP);
  const [customTip, setCustomTip] = useState(DEFAULT_CUSTOM_TIP);
  const [tipPerPerson, setTipPerPerson] = useState("");
  const [totalPerPerson, setTotalPerPerson] = useState("");

  useEffect(() => {
    if (bill) {
      setIsBtnActive(false);
    } else {
      setIsBtnActive(true);
    }
  }, [bill]);

  useEffect(() => {
    const finalCustomTip = customTip !== "" ? parseFloat(customTip) : parseFloat(0);
    const finalTip = finalCustomTip > 0 ? parseFloat(finalCustomTip) : parseFloat(tip);
    const finalTipPerPerson = parseFloat(bill) * (finalTip / 100) / numOfPeople;
    setTipPerPerson(finalTipPerPerson.toFixed(2));
    
    const finalTotalPerPerson = parseFloat(bill) / numOfPeople + parseFloat(tipPerPerson);
    setTotalPerPerson(finalTotalPerPerson.toFixed(2));
  }, [bill, numOfPeople, tip, customTip, tipPerPerson]);

  const handleTipChange = (newTip) => {
    setTip(newTip);
  };

  const handleCustomTipChange = (newCustomTip) => {
    if (newCustomTip) {
      setCustomTip(Math.abs(Math.round(newCustomTip)).toString());
    } else {
      setCustomTip(DEFAULT_CUSTOM_TIP);
    }
  };

  const handleBillChange = (newBill) => {
    setBill(newBill);
  };

  const handleNumOfPeopleChange = (newNumOfPeople) => {
    setNumOfPeople(newNumOfPeople);
  };

  const handleReset = () => {
    setBill(0);
    setNumOfPeople(1);
    setTip(DEFAULT_TIP);
    setCustomTip(DEFAULT_CUSTOM_TIP);
    setIsBtnActive(true);
  };

  return (
    <main>
      <section className="input-section">
        <BillInput bill={bill} handleBillChange={handleBillChange} />
        <TipInput
          tip={tip}
          customTip={customTip}
          handleTipChange={handleTipChange}
          handleCustomTipChange={handleCustomTipChange}
        />
        <PeopleInput
          numOfPeople={numOfPeople}
          handleNumOfPeopleChange={handleNumOfPeopleChange}
        />
      </section>
      <section className="result-section">
        <TipAmount tipPerPerson={tipPerPerson} />
        <TotalAmount totalPerPerson={totalPerPerson} />
        <ResetButton handleReset={handleReset} active={isBtnActive} />
      </section>
    </main>
  );
};

export default Calculator;
