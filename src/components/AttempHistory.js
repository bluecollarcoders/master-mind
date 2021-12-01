import React from "react";

const DEFAULT_ATTEMPS = { values: "---", average: "---", percentage: "---" };

const formatValues = (values) => {
  return values.join("-");
};

const AttempHistory = ({ attemps, currentAttempt }) => {
  const renderAttempts = [];
  for (let i = 0; i < 9; i++) {
    let { values, average, percentage } = attemps[i]?.values
      ? attemps[i]
      : DEFAULT_ATTEMPS;

    values = values != DEFAULT_ATTEMPS.values ? formatValues(values) : values;

    renderAttempts.push(
      <tr className="attempt" key={i}>
        <td className="attempt">{values}</td>
        <td className="attempt">{average}</td>
        <td className="attempt">{percentage}</td>
      </tr>
    );
  }
  return <tbody>{renderAttempts}</tbody>;
};

export default AttempHistory;
