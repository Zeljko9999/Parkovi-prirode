import React from "react";
import "./App.css";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Park from "./components/park/park";
import Comments from "./components/comments/comments";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/park/:id" render={(routeProps: any) => {
              return (
                <Park {...routeProps} />
              )
            }} />
            <Route path="/comments">
              <Comments />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
