import {Link} from 'react-router-dom'
import {useState} from 'react'

function SinglePlan({id, name, category, setPlans, plans}) {
    const [title, setTitle] = useState([]);

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
    
      function handleUpdate(id) {
        const nameobj = {
          name: title
        }
        fetch(`/plans/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nameobj),
        }).then((r) => {
          return r.json()
        }).then(data => {
          let plan = plans.find(p => p.id === data.id);
          plan.name = data.name
        //   console.log(plans)
            
          setPlans([...plans])
        })
      }
    
    function handleChange(e) {
      setTitle(e.target.value)
    
    }
        

  return (
    <div key={id} className="card">
    <h2>
      <Link to={`/plans/${id}`}>{name}</Link>
    </h2>
    <p>Category: {category}</p>
    <button onClick={() => handleDelete(id)}>Delete</button>

  
    <input value={title}  onChange={(e) => handleChange(e)}  type="text" name="name" placeholder="name" />
    <button onClick={() => handleUpdate(id)}>Update</button>
  </div>
  );
}

export default SinglePlan;
