import React from "react";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import "./style.scss";

const CustomModal = ({ show, handleClose, ...props }) => {
  return (
    <Modal centered size="xl" show={show} onHide={handleClose} keyboard={false} className="custom-modal">
      <Modal.Body className="custom-body">
        <CloseButton onClick={handleClose} className="close-btn" />
        {props.children}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
