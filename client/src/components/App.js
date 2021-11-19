import { Route, Routes } from "react-router";
import Home from "./Home";
import NavBar from "./NavBar";
import Plan from "./Plan";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route exact path="/plans/:id"> */}
          {/* <Plan /> */}
        {/* </Route> */}
        <Route
        path="plans/:id"
        element={<Plan />}/>
      </Routes>
    </>
  );
}

export default App;