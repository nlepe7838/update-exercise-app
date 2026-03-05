//update version
import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import GoalExercise from "./components/GoalExercise";
import "./App.css";

function App() {
  const [exercise, setExercise] = useState(null);
  const [type, setType] = useState(null);

  if (type === "repetition") {
    return <RepetitionExercise name={exercise} />;
  }

  if (type === "duration") {
    return <DurationExercise name={exercise} />;
  }

  if (type === "goal") {
    return <GoalExercise name={exercise} />;
  }

return (
    <div className="container">
      <h1>Exercise Menu</h1>

      <button
        className="button menu-button"
        onClick={() => {
          setExercise("Push Ups");
          setType("repetition");
        }}
      >
        Push Ups
      </button>

      <br />

      <button
        className="button menu-button"
        onClick={() => {
          setExercise("Running");
          setType("duration");
        }}
      >
        Running
      </button>

      <br />

      <button
        className="button menu-button"
        onClick={() => {
          setExercise("Plank");
          setType("duration");
        }}
      >
        Plank
      </button>

      <br />

      <button
        className="button menu-button"
        onClick={() => {
          setExercise("Jump Rope");
          setType("goal");
        }}
      >
        Jump Rope
      </button>
    </div>
  );
}

export default App;