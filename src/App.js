import React  from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Error404 from "./components/Error404";
import VRScene from "./components/VRScene";
import Users from "./components/Users";
import ResetPassword from "./components/ResetPassword";
import PrivateRoute from "./components/routes/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import DataProvider from "./context/DataContext";
import UsersProvider from "./context/UsersContext";

const App = () => {

  return (
    <AuthState>
      <DataProvider>
        <UsersProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/profile' component={UserProfile}/>
          <PrivateRoute exact path='/home' component={Home}/>
          <Route exact path="/reset-password" component={ResetPassword} />
          {/* <PrivateRoute exact path="/virtual-tour" component={PannellumReact} /> */}
          <PrivateRoute exact path="/virtual" component={VRScene} />
          <PrivateRoute exact path="/users" component={Users} />
          <Route component={Error404} />
        </Switch>
      </Router>
      </UsersProvider>
      </DataProvider>
    </AuthState>
  );

}

export default App;
