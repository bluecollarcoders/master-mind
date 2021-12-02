import React from "react";

const DEFAULT_ATTEMPS = { values: "---", exist: "---", location: "---" };

const formatValues = (values) => {
  return values.join("-");
};

const AttempHistory = ({ attempts, currentAttempt }) => {
  const renderAttempts = [];
  for (let i = 0; i < 9; i++) {
    let { values, exist, location } = attempts[i]?.values
      ? attempts[i]
      : DEFAULT_ATTEMPS;

    values = values != DEFAULT_ATTEMPS.values ? formatValues(values) : values;

    renderAttempts.push(
      <tr className="table-attempt" key={i}>
        <td className="attempt">{values}</td>
        <td className="attempt">{exist}</td>
        <td className="attempt">{location}</td>
      </tr>
    );
  }
  return <tbody>{renderAttempts}</tbody>;
};

export default AttempHistory;
