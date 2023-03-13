import * as actions from "./BreakActions";
import * as timerActions from "../timer/TimerActions";

const initialState = { breakTime: 5 };

const BreakReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DECREASE_BREAK:
      return { breakTime: state.breakTime - 1 };
    case actions.INCREASE_BREAK:
      return { breakTime: state.breakTime + 1 };
    case timerActions.RESET_TIMER:
      return initialState;
    default:
      return state;
  }
};

export default BreakReducer;
