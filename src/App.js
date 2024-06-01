import "./App.css";
import React, { useState } from "react";

function App() {
  let val = "00:00:00 AM";
  const [time, setTime] = useState(val);

  const clicked = () => {
    const curTime = new Date().toLocaleTimeString();
    // console.log(curTime);
    setTime(curTime);
  };
  return (
    <>
      <div className="container">
        <h1> {time} </h1>
        <button onClick={clicked}> Get Time </button>
      </div>
    </>
  );
}

export default App;
