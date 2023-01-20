import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";
import { useState, useRef, useEffect, useCallback } from "react";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timerMinutes, setTimerMinutes] = useState("25");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timerOn, setTimerOn] = useState(false);
  const [pause, setPause] = useState(false);
  const [session, setSession] = useState("Session");
  const countDown = useRef();

  useEffect(() => {
    return () => {
      clearInterval(countDown.current);
    };
  }, [countDown]);

  const breakTimeCounter = (counter) => {
    switch (counter) {
      case "decrement":
        setBreakTime(breakTime - 1);
        break;
      case "increment":
        setBreakTime(breakTime + 1);
        break;
      default:
        setBreakTime(breakTime);
    }
  };

  const sessionTimeCounter = (counter) => {
    if (timerOn === false) {
      if (sessionTime <= 10) {
        switch (counter) {
          case "decrement":
            setSessionTime(sessionTime - 1);
            setTimerMinutes("0" + (parseInt(sessionTime) - 1));
            setTimerSeconds("00");
            break;
          case "increment":
            setSessionTime(sessionTime + 1);
            setTimerMinutes("0" + (parseInt(sessionTime) + 1));
            setTimerSeconds("00");
            break;
          default:
            setSession(sessionTime);
        }
      } else if (sessionTime > 10) {
        switch (counter) {
          case "decrement":
            setSessionTime(sessionTime - 1);
            setTimerMinutes(parseInt(sessionTime) - 1);
            setTimerSeconds("00");
            break;
          case "increment":
            setSessionTime(sessionTime + 1);
            setTimerMinutes(parseInt(sessionTime) + 1);
            setTimerSeconds("00");
            break;
          default:
            setSession(sessionTime);
        }
      }
    }
  };

  const startTimer = useCallback(
    (min, sec) => {
      console.log("startTimer", min, sec, timerOn);
      setTimerOn(true);

      let seconds = parseInt(min, 10) * 60 + parseInt(sec, 10);
      const now = Date.now();
      const then = now + seconds * 1000;
      if (countDown.current) {
        clearInterval(countDown.current);
      }

      countDown.current = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        console.log("secondsleft", secondsLeft);
        if (timerMinutes === "00" && timerSeconds === "00") {
          document.getElementById("beep").play();
        }
        if (secondsLeft >= 0) {
          console.log("displayTimeLeft", secondsLeft);
          displayTimeLeft(secondsLeft);
        }
      }, 1000);
    },
    [timerOn, countDown, timerMinutes, timerSeconds]
  );

  const pauseTimer = () => {
    console.log("startTimer else");
    clearInterval(countDown.current);
    setTimerOn(false);
    setTimerMinutes(timerMinutes);
    setTimerSeconds(timerSeconds);
  };

  const displayTimeLeft = (seconds) => {
    const remainderMinutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    if (remainderSeconds >= 10) {
      setTimerSeconds(remainderSeconds);
    } else {
      setTimerSeconds("0" + remainderSeconds);
    }

    if (remainderMinutes >= 10) {
      setTimerMinutes(remainderMinutes);
    } else if (remainderMinutes > 0) {
      setTimerMinutes("0" + remainderMinutes);
    } else {
      setTimerMinutes("00");
    }
  };
  console.log(pause);

  const startBreak = useCallback(() => {
    console.log("called startBreak", pause);
    if (pause === false) {
      console.log("start pause", breakTime);
      setSession("Break");
      if (breakTime > 9) {
        setTimerMinutes(breakTime);
        setTimerSeconds("00");
        setTimerOn(false);
        setPause(true);
        startTimer(breakTime, "00");
      } else {
        setTimerMinutes("0" + breakTime);
        setTimerSeconds("00");
        setTimerOn(false);
        setPause(true);
        startTimer(breakTime, "00");
      }
    } else {
      console.log("start session");
      setSession("Session");
      if (sessionTime > 9) {
        setTimerMinutes(sessionTime);
        setTimerSeconds("00");
        setTimerOn(false);
        setPause(false);
        startTimer(sessionTime, "00");
      } else {
        setTimerMinutes("0" + sessionTime);
        setTimerSeconds("00");
        setTimerOn(false);
        setPause(false);
        startTimer(sessionTime, "00");
      }
    }
  }, [pause, breakTime, sessionTime, startTimer]);

  useEffect(() => {
    console.log(timerMinutes, timerSeconds);
    if (timerMinutes === "00" && timerSeconds === "00") {
      clearInterval(countDown.current);
      setTimerOn(false);
      startBreak();
    }
  }, [timerMinutes, timerSeconds, countDown, startBreak]);

  const resetTimer = () => {
    clearInterval(countDown.current);
    setTimerOn(false);
    setTimerMinutes("25");
    setTimerSeconds("00");
    setBreakTime(5);
    setSessionTime(25);
    document.getElementById("beep").currentTime = 0;
    document.getElementById("beep").pause();
  };

  const handleStartButton = () => {
    if (!timerOn) {
      startTimer(timerMinutes, timerSeconds);
    } else {
      pauseTimer();
    }
  };

  return (
    <main id="content">
      <h1 id="title">POMODORO CLOCK</h1>
      <div id="firstRow">
        <Break breakTime={breakTime} breakTimeCounter={breakTimeCounter} />
        <Session
          sessionTime={sessionTime}
          sessionTimeCounter={sessionTimeCounter}
        />
      </div>
      <div>
        <Timer
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
          startTimer={handleStartButton}
          resetTimer={resetTimer}
          session={session}
        />
      </div>
    </main>
  );
}

export default App;
