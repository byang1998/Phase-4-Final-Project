import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import SinglePlan from './SinglePlan'

function Home() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/plans")
      .then((r) => r.json())
      .then(setPlans);
  }, []);

  // useEffect(() => {
  //   console.log("changed")
  // }, [plans]);


  return (
  
    
    <section className="container">
      {plans.map((plan) => (
        <SinglePlan {...plan} setPlans={setPlans} plans={plans} />
      ))}
    </section>
  );
}

export default Home;
