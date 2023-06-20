import styles from "./Results.module.css";
import Result from "./Result";

const Results = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => {
          return (
            <Result
              result={result}
              key={result.year}
              initialInvestment={+props.initialInvestment}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
