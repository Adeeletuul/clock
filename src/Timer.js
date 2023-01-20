import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import myAudio from "./alarm.wav";

const Timer = ({
  timerMinutes,
  timerSeconds,
  startTimer,
  resetTimer,
  session,
}) => {
  return (
    <div id="timer">
      <h2 id="timer-label">{session}</h2>
      <p id="time-left">
        {timerMinutes}:{timerSeconds}
        <audio id="beep" src={myAudio} type="audio/wav"></audio>
      </p>
      <div id="sessionButtons">
        <button type="button" id="start_stop" onClick={startTimer}>
          <PlayCircleFilledIcon />
        </button>
        <button type="button" id="reset" onClick={resetTimer}>
          <ReplayCircleFilledIcon />
        </button>
      </div>
    </div>
  );
};

export default Timer;
