import React from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  onHide: Function,
  contact: any
}

function ContactDetailModal({onHide, contact}: Props) {
  return (
    <Modal show={true} onHide={onHide} centered>
      <Modal.Header closeButton>
        <h4>Contact - {contact.id}</h4>
      </Modal.Header>
      <Modal.Body>
        <h4>Full Name:</h4>
        <span>{contact.first_name} {contact.last_name}</span>
        <h4>Email:</h4>
        <span>{contact.email}</span>
        <h4>Phone:</h4>
        <span>{contact.phone_number}</span>
      </Modal.Body>
    </Modal>
  );
}

export default ContactDetailModal;
