import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewPropertyForm from "./NewPropertyForm";

class NewPropertyModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Real Estate";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Add a new Real Estate";

      button = (
        <Button
          color="danger"
          className="float-right"
          onClick={this.toggle}
        >
          UPLOAD
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <NewPropertyForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              user={this.props.user}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewPropertyModal;