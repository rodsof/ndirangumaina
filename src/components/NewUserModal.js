import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewUserForm from "./NewUserForm";

class NewUserModal extends Component {
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

    var title = "Editing User";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Register";

      button = (
        <Button
          color="danger"
          type="button" 
          className="float-right"
          style={{marginTop: '-35px', display: 'flex'}}
          onClick={this.toggle}
        >
          JOIN US
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewUserForm
              toggle={this.toggle}
              user={this.props.user}
              create={create}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewUserModal;
