import React from "react";
import AttempHistory from "../components/AttempHistory";

const PlayerHistory = ({ attempts, currentAttempt }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>uses</td>
            <td>average</td>
            <td>percentage</td>
          </tr>
        </thead>
        <AttempHistory attemps={attempts} currentAttempt={currentAttempt} />
      </table>
    </div>
  );
};

export default PlayerHistory;
