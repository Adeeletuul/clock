export const INCREASE_SESSION = "session/increaseSession";
export const DECREASE_SESSION = "session/decreaseSession";

export const increaseSession = () => ({
  type: INCREASE_SESSION,
});

export const decreaseSession = () => ({
  type: DECREASE_SESSION,
});
