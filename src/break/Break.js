import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { decreaseBreak, increaseBreak } from "./BreakActions";

const Break = () => {
  const breakTime = useSelector((state) => state.break.breakTime);

  const dispatch = useDispatch();

  const handleDecrementClick = () => {
    dispatch(decreaseBreak());
  };

  const handleIncrementClick = () => {
    dispatch(increaseBreak());
  };

  return (
    <div id="break">
      <h2 id="break-label">Break Length</h2>
      <div className="counter">
        <button
          type="button"
          id="break-decrement"
          onClick={handleDecrementClick}
          disabled={breakTime === 1}
        >
          <RemoveCircleIcon />
        </button>
        <p id="break-length">{breakTime}</p>
        <button
          type="button"
          id="break-increment"
          onClick={handleIncrementClick}
          disabled={breakTime === 60}
        >
          <AddCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default Break;
