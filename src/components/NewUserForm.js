import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_PROFILES } from "../constants";
import { API_URL_ADMIN } from "../constants";

class NewUserForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    document: "",
    organization:"",
    bio:"",
    is_active:true,
    is_staff:false,
    phone: ""
  };

  componentDidMount() {
    if (this.props.student) {
      const { pk, name, document, email, phone } = this.props.student;
      this.setState({ pk, name, document, email, phone });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    axios.post(API_URL_PROFILES, this.state).then(() => {
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.put(API_URL_PROFILES + this.state.ID, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
  
  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
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
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
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
          />
        </FormGroup>
        <FormGroup>
        <Label>
          Is Active &nbsp;&nbsp;&nbsp;&nbsp;
          <Input
            type="checkbox"
            name="is_active"
            onChange={this.onChange}
            defaultChecked= {this.state.is_active}
          />
          </Label>
        </FormGroup>
        <FormGroup>
        <Label>
        Is Staff &nbsp;&nbsp;&nbsp;&nbsp;
          <Input
            type="checkbox"
            name="is_staff"
            onChange={this.onChange}
            defaultChecked= {this.state.is_staff}
          />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="bio">Document:</Label>
          <Input
            type="text"
            name="document"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button
          type="button" 
          color="danger"
        >REGISTER</Button>
      </Form>
    );
  }
}

export default NewUserForm;