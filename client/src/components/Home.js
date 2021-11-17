import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/plans")
      .then((r) => r.json())
      .then(setPlans);
  }, []);

  function handleDelete(id) {
    fetch(`/plans/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setPlans((plans) =>
          plans.filter((plan) => plan.id !== id)
        );
      }
    });
  }

  return (
    <section className="container">
      {plans.map((plan) => (
        <div key={plan.id} className="card">
          <h2>
            <Link to={`/plans/${plan.id}`}>{plan.name}</Link>
          </h2>
          <p>Category: {plan.category}</p>
          <button onClick={() => handleDelete(plan.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default Home;
