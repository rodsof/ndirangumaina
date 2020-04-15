import React, { Fragment } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import NewUserModal from "./NewUserModal";
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_URL_LOGIN } from "../constants";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  login = e => {
    e.preventDefault();
    axios.post(API_URL_LOGIN, this.state).then(() => {
      this.props.toggle();
    });
  };

  render() {
    return (
      <div class="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <Form onSubmit={this.login}>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.name)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input
                  type="text"
                  name="password"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.name)}
                />
              </FormGroup>
              <Button color="danger">LOGIN</Button>
              <NewUserModal 
              create={true} 
              />
            </Form>
            <Link to={'/home'} className="link">Skip Login </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
