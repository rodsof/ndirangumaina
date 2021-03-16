import React, { Component, Fragment, useContext, useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import { DataContext } from "../context/DataContext";



const ConfirmRemovalModal = (props) => {
  const [modal, setModal] = useState(false)
  const dataContext = useContext(DataContext)
  const { deleteProperty } = dataContext;
  const toggle = () => {
    setModal(!modal);
  };

  const deleteProp = id => {
    deleteProperty(id);
    toggle();
  };

  return (
    <Fragment>
      <Button color="danger" onClick={() => toggle()}>
        Remove
        </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Do you really wanna delete this?
          </ModalHeader>

        <ModalFooter>
          <Button type="button" onClick={() => toggle()}>
            Cancel
            </Button>
          <Button
            type="button"
            color="danger"
            onClick={() => deleteProp(props.result.id)}
          >
            Yes
            </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}

export default ConfirmRemovalModal;