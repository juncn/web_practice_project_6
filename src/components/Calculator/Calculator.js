import "./Calculator.scss";

const Calculator = () => {
  return (
    <main>
      <section className="input-section">
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
          />
        </div>
        <div className="tip">
          <label className="label">Select Tip &#37;</label>
          <div className="tip-percent">
            <button className="tip-percent-btn">5&#37;</button>
            <button className="tip-percent-btn">10&#37;</button>
            <button className="tip-percent-btn">15&#37;</button>
            <button className="tip-percent-btn">25&#37;</button>
            <button className="tip-percent-btn">50&#37;</button>
            <input
              className="custom-percent"
              type="number"
              placeholder="Custom"
            />
          </div>
        </div>
        <div className="people">
          <label className="label" htmlFor="num-of-people">
            Number of People
          </label>
          <input className="input" id="num-of-people" type="number" placeholder="1" min="1" />
        </div>
      </section>
      <section className="result-section">
        <div className="tip-amount">
          <label>
            Tip Amount <br /> <span>/ person</span>
          </label>
          <label className="result-text">$0.00</label>
        </div>
        <div className="total">
          <label>
            Total <br /> <span>/ person</span>
          </label>
          <label className="result-text">$0.00</label>
        </div>
        <div className="reset">
          <button className="reset-btn">Reset</button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
