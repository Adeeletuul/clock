import { combineReducers } from "redux";
import SessionReducer from "../session/SessionReducer";
import TimerReducer from "../timer/TimerReducer";
import BreakReducer from "../break/BreakReducer";

const rootReducer = combineReducers({
  session: SessionReducer,
  timer: TimerReducer,
  break: BreakReducer,
});

export default rootReducer;
