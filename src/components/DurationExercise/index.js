import React, { useState, useEffect } from "react";

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

  //time format
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}</h1>

      <h2>{minutes}:{seconds}</h2>

      <button onClick={() => setStart(true)}>
        Start
      </button>

      <br /><br />

      <button onClick={() => setStart(false)}>
        Stop
      </button>

      <br /><br />

      <button onClick={() => {
        setStart(false);
        setTime(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;