import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_DATA } from "../constants";

class NewPropertyForm extends React.Component {
  state = {
    id: 0,
    user_profile: this.props.user.id,
    title: "",
    image: "",
    video: ""
  };

  componentDidMount() {
    if (this.props.property) {
      const { id, title, image, video } = this.props.property;
      this.setState({ id, title, image, video });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createProperty = e => {
    e.preventDefault();
    axios.post(API_URL_DATA, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };


  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.createProperty}>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image:</Label>
          <Input
            type="file"
            name="image"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Video:</Label>
          <Input
            type="file"
            name="video"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image)}
          />
        </FormGroup>
        <Button
          color="danger"
        >UPLOAD</Button>
      </Form>
    );
  }
}

export default NewPropertyForm;