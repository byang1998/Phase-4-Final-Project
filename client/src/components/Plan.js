import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewWorkoutForm from "./PizzaForm";

function Home() {
  const [{ data: restaurant, error, status }, setPlan] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/plans/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((plan) =>
          setPlan({ data: plan, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setPlan({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  function handleAddWorkout(newWorkout) {
    setPlan({
      data: {
        ...plan,
        workouts: [...plan.workouts, newWorkout],
      },
      error: null,
      status: "resolved",
    });
  }

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section className="container">
      <div className="card">
        <h1>{plan.name}</h1>
        <p>{plan.category}</p>
      </div>
      <div className="card">
        <h2>Workouts</h2>
        {plan.workouts.map((workout) => (
          <div key={workout.id}>
            <h3>{workout.name}</h3>
            <p>
              <em>{pizza.exercises}</em>
            </p>
          </div>
        ))}
      </div>
      <div className="card">
        <h3>Add New Workouts</h3>
        <NewWorkoutForm planId={plan.id} onAddWorkout={handleAddWorkout} />
      </div>
    </section>
  );
}

export default Home;