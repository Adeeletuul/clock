import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { decreaseSession, increaseSession } from "./SessionActions";
import { sessionTimeToTimer } from "../timer/TimerActions";

const Session = () => {
  const timerOn = useSelector((state) => state.timer.timerOn);
  const sessionTime = useSelector((state) => state.session.sessionTime);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sessionTimeToTimer(sessionTime));
  }, [sessionTime]);

  const handleDecrementClick = () => {
    if (!timerOn) {
      dispatch(decreaseSession());
    }
  };

  const handleIncrementClick = () => {
    if (!timerOn) {
      dispatch(increaseSession());
    }
  };

  return (
    <div id="session">
      <h2 id="session-label">Session Length</h2>
      <div className="counter">
        <button
          type="button"
          id="session-decrement"
          onClick={handleDecrementClick}
          disabled={sessionTime <= 1}
        >
          <RemoveCircleIcon />
        </button>
        <p id="session-length">{sessionTime}</p>
        <button
          type="button"
          id="session-increment"
          onClick={handleIncrementClick}
          disabled={sessionTime === 60}
        >
          <AddCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default Session;
