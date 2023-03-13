import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import myAudio from "../alarm.wav";
import { pauseTimer, resetTimer, startTimer } from "./TimerActions";

const Timer = () => {
  const timerOn = useSelector((state) => state.timer.timerOn);
  const seconds = useSelector((state) => state.timer.seconds);
  const session = useSelector((state) => state.timer.session);

  const dispatch = useDispatch();

  const { min, sec } = useMemo(() => {
    const min = Math.floor(seconds / 60).toString();
    const sec = (seconds - min * 60).toString();
    return {
      min: "0".repeat(2 - min.length) + min,
      sec: "0".repeat(2 - sec.length) + sec,
    };
  }, [seconds]);
  console.log(seconds, min, sec);

  const handleStart = () => {
    if (!timerOn) {
      dispatch(startTimer());
    } else {
      dispatch(pauseTimer());
    }
  };

  const handleReset = () => {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    dispatch(resetTimer());
  };

  // useEffect(() => {
  //   if (seconds <= 0) {
  //     console.log("BEEP");
  //     document.getElementById("beep").currentTime = 0;
  //     document.getElementById("beep").play();
  //     setTimeout(() => {
  //       document.getElementById("beep").currentTime = 0;
  //       document.getElementById("beep").pause();
  //     }, 5000);
  //   }
  // }, [seconds]);

  if (seconds <= 0) {
    console.log("BEEP");
    const audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.play();
    // setTimeout(() => {
    //   audio.pause();
    //   audio.currentTime = 0;
    // }, 1000);
  }

  return (
    <div id="timer">
      <h2 id="timer-label">{session}</h2>
      <p id="time-left">
        {min}:{sec}
      </p>
      <audio id="beep">
        <source src={myAudio} type="audio/wav" />
      </audio>
      <div id="sessionButtons">
        <button type="button" id="start_stop" onClick={handleStart}>
          <PlayCircleFilledIcon />
        </button>
        <button type="button" id="reset" onClick={handleReset}>
          <ReplayCircleFilledIcon />
        </button>
      </div>
    </div>
  );
};

export default Timer;
