import * as actions from "./SessionActions";
import * as timerActions from "../timer/TimerActions";

const initialState = {
  sessionTime: 25,
};

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DECREASE_SESSION:
      if (state.sessionTime > 1) {
        return {
          sessionTime: state.sessionTime - 1,
        };
      }
      return state;
    case actions.INCREASE_SESSION:
      if (state.sessionTime < 60) {
        return {
          sessionTime: state.sessionTime + 1,
        };
      }
      return state;
    case timerActions.RESET_TIMER:
      return initialState;
    default:
      return state;
  }
};

export default SessionReducer;
