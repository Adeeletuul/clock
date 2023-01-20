import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Session = ({ sessionTime, sessionTimeCounter }) => {
  return (
    <div id="session">
      <h2 id="session-label">Session Length</h2>
      <div className="counter">
        <button
          type="button"
          id="session-decrement"
          onClick={() => sessionTimeCounter("decrement")}
          disabled={sessionTime === 1}
        >
          <RemoveCircleIcon />
        </button>
        <p id="session-length">{sessionTime}</p>
        <button
          type="button"
          id="session-increment"
          onClick={() => sessionTimeCounter("increment")}
          disabled={sessionTime === 60}
        >
          <AddCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default Session;
