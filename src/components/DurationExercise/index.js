import React, { useState, useEffect } from "react";
import "../../App.css";

function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;

    if (start === true) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [start, time]);

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className="container">
      <h1>{name}</h1>

      <div className="display-box">
        {minutes}:{seconds}
      </div>

      <button
        className="button green"
        onClick={() => setStart(true)}
      >
        Start
      </button>

      <button
        className="button red"
        onClick={() => setStart(false)}
      >
        Stop
      </button>

      <br />

      <button
        className="button yellow"
        onClick={() => {
          setStart(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;