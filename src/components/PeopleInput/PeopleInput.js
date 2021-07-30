import "./PeopleInput.scss";
import PropTypes from "prop-types";

const PeopleInput = ({ numOfPeople, handleNumOfPeopleChange }) => {
  return (
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
          handleNumOfPeopleChange(Math.abs(Math.ceil(e.target.value) || 1))
        }
      />
    </div>
  );
};

PeopleInput.propTypes = {
  numOfPeople: PropTypes.number.isRequired,
  handleNumOfPeopleChange: PropTypes.func.isRequired,
};

export default PeopleInput;
