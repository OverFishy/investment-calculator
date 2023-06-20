const Result = ({ result, initialInvestment }) => {
  const { year, yearlyInterest, savingsEndOfYear, yearlyContribution } = result;
  const totalInvestment =
    savingsEndOfYear - initialInvestment - yearlyContribution * year;
  const investedCapital = initialInvestment + yearlyContribution * year;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // formatter.format(yourValue);

  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(savingsEndOfYear)}</td>
      <td>{formatter.format(yearlyInterest)}</td>
      <td>{formatter.format(totalInvestment)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  );
};

export default Result;
