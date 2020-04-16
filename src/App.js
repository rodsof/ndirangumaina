import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/routes/PrivateRoute";
import tokenAuth from "./config/token";
import axios from "axios";
import UserProfile from "./components/UserProfile";
import Error404 from "./components/Error404";
import VRScene from "./components/VRScene";
import { API_URL_PROFILES } from "./constants";

// check tokenAuthorization
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      user: "",
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      axios.get(API_URL_PROFILES)
        .then((res) => {
          this.setState({ user: res.data[1], logged_in: true });
        });
    }
  }

  render() {
    return (
      <Router>
        <Switch>
        <Route exact  path='/' component={Login} />} />
          <Route exact  path='/profile' render={(props) => <UserProfile {...props} user={this.state.user} />} />
          <Route exact path='/home' render={(props) => <Home {...props} user={this.state.user} />} />
          <Route path="/404" component={Error404} />
          <Route path="/virtual" component={VRScene} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
