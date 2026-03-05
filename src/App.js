//update version
import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import GoalExercise from "./components/GoalExercise";

function App() {
  const [exercise, setExercise] = useState(null);
  const [type, setType] = useState(null);

  // Show Repetition screen
  if (type === "repetition") {
    return <RepetitionExercise name={exercise} />;
  }

  // Show Duration screen
  if (type === "duration") {
    return <DurationExercise name={exercise} />;
  }

  // Show Goal screen (NEW TYPE)
  if (type === "goal") {
    return <GoalExercise name={exercise} />;
  }

  // Otherwise show menu
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Exercise Menu</h1>

      <br />

      <button onClick={() => {
        setExercise("Push Ups");
        setType("repetition");
      }}>
        Push Ups
      </button>

      <br /><br />

      <button onClick={() => {
        setExercise("Running");
        setType("duration");
      }}>
        Running
      </button>

      <br /><br />

      <button onClick={() => {
        setExercise("Plank");
        setType("duration");
      }}>
        Plank
      </button>

      <br /><br />

      <button onClick={() => {
        setExercise("Jump Rope");
        setType("goal");
      }}>
        Jump Rope
      </button>

    </div>
  );
}

export default App;