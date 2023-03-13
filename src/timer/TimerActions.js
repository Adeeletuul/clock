export const START_TIMER = "timer/startTimer";

export const SESSION_TIMER = "timer/sessionTimer";
export const PAUSE_TIMER = "timer/pauseTimer";
export const BREAK_TIMER = "timer/breakTimer";
export const RESET_TIMER = "timer/resetTimer";
export const SESSIONTIME_TO_TIMER = "timer/sessionTimeToTimer";

export const REDUCE_TIMER = "timer/reduceTimer";

let timer = 0;

export const sessionTimeToTimer = (sessionTime) => {
  const seconds = sessionTime * 60;
  return {
    type: SESSIONTIME_TO_TIMER,
    payload: seconds,
  };
};

export const startTimer = () => (dispatch, getState) => {
  dispatch({
    type: START_TIMER,
  });
  timer = setInterval(() => {
    const secondsLeft = getState().timer.seconds;
    if (secondsLeft <= 0) {
      clearInterval(timer);

      setTimeout(() => {
        if (getState().timer.session === "Session") {
          dispatch(breakTimer());
        } else {
          const sessionTime = getState().session.sessionTime;
          dispatch({
            type: SESSION_TIMER,
            payload: sessionTime * 60,
          });
        }
        dispatch(startTimer());
      }, 1000);
    } else {
      dispatch({
        type: REDUCE_TIMER,
      });
    }
  }, 1000);
};

export const pauseTimer = () => {
  clearInterval(timer);
  return {
    type: PAUSE_TIMER,
  };
};

export const breakTimer = () => (dispatch, getState) => {
  const breakTime = getState().break.breakTime;
  dispatch({
    type: BREAK_TIMER,
    payload: breakTime * 60,
  });
};

export const resetTimer = () => {
  clearInterval(timer);
  return {
    type: RESET_TIMER,
  };
};
