import React from "react";
import AttempHistory from "../components/AttempHistory";

const PlayerHistory = ({ attempts, currentAttempt }) => {
  return (
    <div className="table container">
      <table id="history-tables">
        <thead>
          <tr className="table-titles-container">
            <td className="table-title">Attempts</td>
            <td className="table-title">Exist</td>
            <td className="table-title">Location</td>
          </tr>
        </thead>
        <AttempHistory attemps={attempts} currentAttempt={currentAttempt} />
      </table>
    </div>
  );
};

export default PlayerHistory;
