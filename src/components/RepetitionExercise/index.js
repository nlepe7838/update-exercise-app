import React, { useState } from "react";
import "../../App.css";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{name}</h1>

      <div className="display-box">{count}</div>

      <button
        className="button green"
        onClick={() => setCount(count + 1)}
      >
        +1 Rep
      </button>

      <br />

      <button
        className="button yellow"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default RepetitionExercise;