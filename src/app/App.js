import React from "react";
import Break from "../break/Break";
import Session from "../session/Session";
import Timer from "../timer/Timer";

function App() {
  return (
    <main id="content">
      <h1 id="title">POMODORO CLOCK</h1>
      <div id="firstRow">
        <Break />
        <Session />
      </div>
      <div>
        <Timer />
      </div>
    </main>
  );
}

export default App;
