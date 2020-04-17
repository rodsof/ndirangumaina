import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Login from "./components/Login";
import clientAxios from "./config/axios";
import axios from "axios";
import UserProfile from "./components/UserProfile";
import Error404 from "./components/Error404";
import VRScene from "./components/VRScene";
import { API_URL_PROFILES } from "./constants";

// check tokenAuthorization
// const token = localStorage.getItem("token");
// if (token) {
//   tokenAuth(token);
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      user: "",
      results: []
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      clientAxios.get( `SpatialArdhi/profiles?search=${localStorage.getItem("email")}`)
        .then((res) => {
          this.setState({ user: res.data[0], logged_in: true });
        });
    }
    this.getResults();
  }

  getResults = () => {
		clientAxios.get('/SpatialArdhi/data').then(res => this.setState({ results: res.data }));
	  };
	
  resetState = () => {
    this.componentDidMount();
    this.getResults();
	  };
  render() {
    return (
      <Router>
        <Switch>
        <Route exact  path='/' component={Login} />} />
          <Route exact  path='/profile' render={(props) => <UserProfile {...props} user={this.state.user} resetState={this.resetState} />} />
          <Route exact path='/home' render={(props) => <Home {...props} user={this.state.user} results={this.state.results} resetState={this.resetState} />} />
          <Route path="/404" component={Error404} />
          <Route path="/virtual" render={(props) => <VRScene {...props} user={this.state.user} results={this.state.results}/>}  />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
