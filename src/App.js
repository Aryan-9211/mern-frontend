import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/signin">
        <Signin />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>
    </div>
  );
}

export default App;
