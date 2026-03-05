import React, { useState } from "react";
import "../../App.css";

function GoalExercise({ name }) {
  const [count, setCount] = useState(0);
  const goal = 20;

  return (
    <div className="container">
      <h1>{name}</h1>

      <div className="display-box">
        {count} / {goal}
      </div>

      <button
        className="button green"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>

      <br />

      <button
        className="button yellow"
        onClick={() => setCount(0)}
      >
        Reset
      </button>

      {count >= goal && <p>Goal Reached!</p>}
    </div>
  );
}

export default GoalExercise;