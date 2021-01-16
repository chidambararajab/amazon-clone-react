import React from "react";
import "./App.css";
import Header from "./Component/Header.js";
import Home from "./Component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Component/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        {<Header />}
        <Switch>
          <Route path="/checkout">{<Checkout />}</Route>
          <Route path="/">{<Home />}</Route>
        </Switch>

        {/* FOOTER */}
      </div>
    </Router>
  );
}

export default App;
