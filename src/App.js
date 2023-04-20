import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { Route, Switch } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";

// Define a new context for the user state with a default value of null
export const UserContext = createContext();

// Define a new component for handling routing
const Routing = () => {
  return (
    <Switch>
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

      <Route exact path="/logout">
        <Logout />
      </Route>
    </Switch>
  );
};

// Define the main App component
function App() {
  // Initialize the user state using the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Render the app with the user context provider
  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <NavigationBar />
        <Routing />
      </UserContext.Provider>
    </div>
  );
}

// Export the App component as the default export
export default App;
