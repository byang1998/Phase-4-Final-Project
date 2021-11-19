import { Link } from "react-router-dom";
//import logo from "../logo.png";

function NavBar() {
  return (
    <header>
      <div className="logo">
       {/* <img src={logo} alt="Gym logo" /> */}
        <h1>BodyBuilding Plans</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default NavBar;
