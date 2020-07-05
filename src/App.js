import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import clientAxios from "./config/axios";
import UserProfile from "./components/UserProfile";
import Error404 from "./components/Error404";
import VRScene from "./components/VRScene";
import Users from "./components/Users";
import PannellumReact from "./components/PanellumReact";
// si tengo problemas para npm start es porque en package.json cambie homepage
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      user: {},
      results: [],
      users: []
    };
  }

  componentDidMount() {
        this.getResults();
    if (this.state.logged_in) {
      clientAxios.get( `profiles/?format=json&search=${localStorage.getItem("email")}`)
        .then((res) => {
          this.setState({ user: res.data[0], logged_in: true });
        });
    }
  }

  logout = async() => {
       localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.setState({ user: {}, logged_in: false});
    let history = useHistory();
    history.push("/");
  }

 getResults = async() => {
    await	clientAxios.get('data/?format=json').then(res => this.setState({ results: res.data }));
    await	clientAxios.get('profiles/?format=json').then(res => this.setState({ users: res.data }));
	  };
	
  resetState = () => {
    this.componentDidMount();
    };
    
  search = async(title) => {
    if(title !== " " && title !== undefined){
      await clientAxios.get('data/?format=json', { params: { search: title }} ).then(res =>  {
        this.setState({ results : res.data } );
      });
      await clientAxios.get('profiles/?format=json', { params: { search: title }} ).then(res =>  {
        this.setState({ users : res.data } );
      });
  }
  }
  render() {
    return (
      <Router>
        <Switch>
        <Route exact  path='/' component={Login} />
          <Route exact  path='/profile' render={(props) => <UserProfile {...props} user={this.state.user} resetState={this.resetState} logout={this.logout}/>} />
          <Route exact path='/home' render={(props) => <Home {...props} user={this.state.user} results={this.state.results} resetState={this.resetState} search={this.search} logout={this.logout}/>} />
          <Route path="/404" component={Error404} />
          <Route path="/virtual-tour" component={PannellumReact} />
          <Route path="/virtual" render={(props) => <VRScene {...props} user={this.state.user} results={this.state.results} logout={ this.logout }/>}  />
          <Route path="/users" render={(props) => <Users {...props} user={this.state.user} results={this.state.users}  search={this.search} logout={ this.logout }/>}  />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
