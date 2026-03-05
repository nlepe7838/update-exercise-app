import React, { useState } from "react";

function GoalExercise({ name }) {
  const [count, setCount] = useState(0);
  const goal = 20;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}</h1>

      <h2>{count} / {goal}</h2>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <br /><br />

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <br /><br />

      {count >= goal && <p>Goal Reached!</p>}
    </div>
  );
}

export default GoalExercise;