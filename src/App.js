import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD

import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import TopRated from "./pages/TopRated";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
=======
import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={Movie} exact />
<<<<<<< HEAD
        <Route path="/topRated" component={TopRated} exact />
=======
>>>>>>> aa70b9baa22a13cf0ce30ab6e18dcb686a62242f
      </Switch>
    </Router>
  );
}

export default App;
