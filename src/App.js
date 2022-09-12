import React, { useState } from "react";
import WindowTracker from "./WindowTracker";
import './style.css';
import './App.css';

function App() {
  const [show, setShow] = useState(true)

  function toggle() {
    setShow(prevShow => !prevShow)
  }
  return(
    <div className="container">
      <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>

  );
}

export default App;
