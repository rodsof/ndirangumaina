import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import tokenAuth from './config/token';
import RutaPrivada from './components/routes/PrivateRoute';
import UserProfile from "./components/UserProfile";
import Error404 from "./components/Error404";


// check tokenAuthorization
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={SignIn} />
          <Route exact path="/profile" component={UserProfile} />
          <Route path="/404" component={Error404} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
