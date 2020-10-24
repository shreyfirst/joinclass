import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
