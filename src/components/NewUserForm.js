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
      const { id, name, email, bio, organization, password } = this.props.user;
      this.setState({ id, name,  email , bio, organization, password});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    var form = new FormData(document.forms.namedItem("user"));
    clientAxios.post(API_URL_PROFILES, form).then(() => {
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    clientAxios.put('SpatialArdhi/profiles/'+this.props.user.id+'/',this.state ).then(() => {
      this.props.toggle();
      this.props.resetState();
    });
  };
  
  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form name="user" onSubmit={this.props.user ? this.editUser : this.createUser} encType="multipart/form-data">
        <FormGroup>
          <Label for="image">Profile photo:</Label>
          <Input
            type="file"
            name="image"
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
            autoComplete={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
            autoComplete={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="organization">Organization:</Label>
          <Input
            type="text"
            name="organization"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.organization)}
            autoComplete={this.defaultIfEmpty(this.state.organization)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bio">Bio:</Label>
          <Input
            type="text"
            name="bio"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.bio)}
            autoComplete= {this.defaultIfEmpty(this.state.organization)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password)}
            autoComplete= {this.defaultIfEmpty(this.props.password)}
          />
        </FormGroup>
  
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