import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import clientAxios from '../config/axios'


class NewPropertyForm extends React.Component {
  state = {
    title: "",
    image: "",
    video: ""
  };

  componentDidMount() {
    if (this.props.property) {
      const { id, title, image, video } = this.props.result;
      this.setState({ id, title, image, video });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createProperty = e => {
    e.preventDefault();
    var form = new FormData(document.forms.namedItem("realEstate"));
    form.append("user_profile",this.props.user.id);
    clientAxios.post('data/?format=json',form, { params: { id: this.props.user.id } } ).then(() => {
      this.props.toggle();
    });
  };

  editProperty = e => {
    e.preventDefault();
    var form = new FormData(document.forms.namedItem("realEstate"));
    clientAxios.put('data/'+this.props.result.id+'/', form ).then(() => {
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };
  render() {

    return (
      <Form name="realEstate" onSubmit={this.props.result ? this.editProperty : this.createProperty} encType="multipart/form-data">
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Video:</Label>
          <Input
            type="file"
            name="video"
            onChange={this.onChange}
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