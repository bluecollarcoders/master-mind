import React from "react";

const DEFAULT_ATTEMPTS = { values: "---", exist: "---", location: "---" };

const formatValues = (values) => {
  return values.join("-");
};

function AttempHistory({ attempts, currentAttempt }) {
  const renderAttempts = [];
  for (let i = 0; i < 9; i++) {
    let { values, exist, location } =
      attempts[i]?.values || DEFAULT_ATTEMPTS ? attempts[i] : DEFAULT_ATTEMPTS;

    values = values !== DEFAULT_ATTEMPTS.values ? formatValues(values) : values;

    renderAttempts.push(
      <tr className="table-attempt" key={i}>
        <td className="attempt">{values}</td>
        <td className="attempt">{exist}</td>
        <td className="attempt">{location}</td>
      </tr>
    );
  }
  return <tbody>{renderAttempts}</tbody>;
}

export default AttempHistory;
