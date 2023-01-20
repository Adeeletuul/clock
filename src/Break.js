import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Break = ({ breakTime, breakTimeCounter }) => {
  return (
    <div id="break">
      <h2 id="break-label">Break Length</h2>
      <div className="counter">
        <button
          type="button"
          id="break-decrement"
          onClick={() => breakTimeCounter("decrement")}
          disabled={breakTime === 1}
        >
          <RemoveCircleIcon />
        </button>
        <p id="break-length">{breakTime}</p>
        <button
          type="button"
          id="break-increment"
          onClick={() => breakTimeCounter("increment")}
          disabled={breakTime === 60}
        >
          <AddCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default Break;
