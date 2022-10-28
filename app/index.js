import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TopStories from "./components/topStories";
import Nav from "./components/Nav";
import New from "./components/New";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Comments from "./components/Comments";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//routes defined for the app
//add some comment
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={TopStories} />
          <Route path="/new" component={New} />
          <Route path="/user" component={User} />
          <Route path="/post" component={Comments} />
          <Route render={() => <p> 404</p>} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
