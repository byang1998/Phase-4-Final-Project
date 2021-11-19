import { useEffect, useState } from "react";

function NewWorkoutForm({ planId, onAddWorkout }) {
  const [workouts, setWorkouts] = useState([]);
  const [workoutId, setWorkoutId] = useState("");

  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then(setWorkouts);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      workout_id: workoutId,
      plan_id: planId,
      sets: sets,
      reps: reps,
    };
    fetch("/workout_plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newWorkout) => {
          onAddWorkout(newWorkout);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.message));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="workout_id">Workout:</label>
      <select
        id="workout_id"
        name="workout_id"
        value={workoutId}
        onChange={(e) => setWorkoutId(e.target.value)}
      >
        <option value="">Select a Workout</option>
        {workouts.map((workout) => (
          <option key={workout.id} value={workout.id}>
            {workout.name}
          </option>
        ))}
      </select>
      <label htmlFor="workout_id">Sets:</label>
      <input
        type="number"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />
      <label htmlFor="workout_id">Reps:</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Add To Plan</button>
    </form>
  );
}

export default NewWorkoutForm;
