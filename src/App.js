import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/checkout">
            {console.log("Checkout")}
            <Checkout />
          </Route>
          <Route exact path="/">
          {console.log("Home")}

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
