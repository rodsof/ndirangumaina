import React, { Fragment } from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import NewUserModal from "./NewUserModal";
import axios from "axios";
import { API_URL_LOGIN, API_URL_PROFILES } from "../constants";

class Login extends React.Component {

  state = {
    username: "",
    password: "",
    error: null
  };
componentDidMount(){
  if (localStorage.getItem("token")){
    this.props.history.push("/home");
  }
}
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  login = e => {
    e.preventDefault();
    axios.post(API_URL_LOGIN, this.state ).then(res =>  {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email',this.state.username);
        this.props.history.push("/home");
      }).catch(error => this.setState({
        error: "Login error"
      }));
  };


  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <Form onSubmit={this.login} encType="multipart/form-data">
              <FormGroup>
                <Label for="username">Email:</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.username)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.password)}
                />
              </FormGroup>
              { this.state.error ? 
             <Alert  color="danger"> {this.state.error} </Alert>  :
             null
            }
              <Button color="danger">LOGIN</Button>
              <NewUserModal 
              create={true} 
              />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
