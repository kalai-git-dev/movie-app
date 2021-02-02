import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={Movie} exact />
      </Switch>
    </Router>
  );
}

export default App;
