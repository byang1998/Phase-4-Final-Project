import { Link } from "react-router-dom";
import logo from "../logo.png";

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Gym logo" />
        <h1>BodyBuilding Plans</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Navbar;
