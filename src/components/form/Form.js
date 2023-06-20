import { useState } from "react";

import styles from "./Form.module.css";
import FormAction from "./FormAction";

const initialUserInput = {
  "current-savings": "10000",
  "yearly-contribution": "1200",
  "expected-return": "7",
  duration: "10"
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (id, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [id]: value
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  // console.log(userInput);

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => inputChangeHandler(e.target.id, e.target.value)}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => inputChangeHandler(e.target.id, e.target.value)}
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => inputChangeHandler(e.target.id, e.target.value)}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => inputChangeHandler(e.target.id, e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
      <FormAction />
    </form>
  );
};

export default Form;
