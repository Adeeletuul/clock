import * as actions from "./TimerActions";

const initialState = {
  timerOn: false,
  seconds: 25 * 60,
  session: "Session",
};

const TimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SESSIONTIME_TO_TIMER:
      return { ...state, seconds: action.payload };
    case actions.START_TIMER:
      return {
        ...state,
        timerOn: true,
      };
    case actions.PAUSE_TIMER:
      return {
        ...state,
        timerOn: false,
      };
    case actions.BREAK_TIMER:
      return {
        ...state,
        seconds: action.payload,
        session: "Break",
      };
    case actions.SESSION_TIMER:
      return {
        ...state,
        seconds: action.payload,
        session: "Session",
      };
    case actions.REDUCE_TIMER:
      return {
        ...state,
        seconds: state.seconds - 1,
      };
    case actions.RESET_TIMER:
      return initialState;
    default:
      return state;
  }
};

export default TimerReducer;
