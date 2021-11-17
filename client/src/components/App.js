import { Route, Switch } from "react-router";
import Home from "./Home";
import NavBar from "./Navbar";
import Plan from "./Restaurant";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/plans/:id">
          <Plan />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;