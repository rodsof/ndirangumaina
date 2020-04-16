import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_PROFILES, API_URL_DATA } from "../constants";
import clientAxios from '../config/axios';

class NewUserForm extends React.Component {
  state = {
    name: "",
    email: "",
    organization:"",
    bio:"",
    password: ""
  };

  componentDidMount() {
    if (this.props.user) {
      const { id, name, email, bio, organization } = this.props.user;
      this.setState({ id, name,  email , bio, organization });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    console.log("entra");
    e.preventDefault();
    axios.post(API_URL_PROFILES, this.state).then(() => {
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.get(API_URL_DATA).then((res)=> {
      console.log(res);
    })
    axios.put(API_URL_PROFILES+this.props.user.id+ '/' ,
    {
      headers: {
        'Authorization': 'Token a300f14adcc916a7334b63128fc00f15df442879'
      }
    }).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
  
  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser} enctype="multipart/form-data">
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="organization">Organization:</Label>
          <Input
            type="text"
            name="organization"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.organization)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bio">Bio:</Label>
          <Input
            type="text"
            name="bio"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.bio)}
            autoComplete={this.props.user.bio}

          />
        </FormGroup>
        {!this.props.create ? 
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password)}
            autoComplete={this.props.user.password}
          />
        </FormGroup>
        :
        null
      }
        {this.props.create ? 
        <Button
          type="submit" 
          color="danger"
        >REGISTER</Button> :
        <Button
          type="submit" 
          color="danger"
        >SAVE</Button>
      }
      </Form>
    );
  }
}

export default NewUserForm;