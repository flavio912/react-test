import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, ButtonGroup, Button, ListGroup, Spinner, Form } from 'react-bootstrap';

import { getContacts } from '../redux/actions/contactActions';
import ContactDetailModal from './ContactDetailModal';

function USContactsModal() {
  const [params] = useState({companyId: 171, countryId: 226});
  const [contactList, setContactList] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [curContact, setCurContact] = useState({});
  const dispatch = useDispatch();
  const { list: contacts, listLoaded } = useSelector((state: any) => state.contact);
  
  useEffect(() => {
    dispatch(getContacts({
      ...params,
      ...{refresh: true}
    }));
  }, [dispatch, params]);

  useEffect(() => {
    if (!contacts) return;
    
    setContactList(contacts);
  }, [contacts])

  const filterContacts = (value: any) => {
    dispatch(getContacts({
      ...params,
      ...{ query: value }
    }));
  }

  const filterEvenOnly = (value: any) => {
    if(value) {
      setContactList(contactList.filter((item: any) => item.id % 2 === 0));
    }else {
      setContactList(contacts);
    }
  }

  return (
    <>
      {!showDetail ? (
        <Modal show={true} centered size="lg">
          <Modal.Header className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">US Contacts</h4>
            <ButtonGroup aria-label="Basic example">
              <Button className="purple">
                <Link to="/all">All Contacts</Link>
              </Button>
              <Button className="orange">
                <Link to="/us">
                  US Contacts
                </Link>
              </Button>
              <Button className="purple-outlined">
                <Link to="/">
                  Close
                </Link>
              </Button>
            </ButtonGroup>
          </Modal.Header>
          <Modal.Body>
            {listLoaded ? (
              <div className="contact-list">
                <Form className="mb-2">
                  <Form.Control type="text" placeholder="Search..." onChange={(e) => filterContacts(e.target.value)} />
                </Form>
                <ListGroup>
                  { contactList && contactList.length > 0 && contactList.map((contact: any) => {
                    return (
                      <ListGroup.Item onClick={() => {setCurContact(contact); setShowDetail(true)}}>
                        {contact.id} - {contact.first_name} {contact.last_name} - {contact.phone_number}
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>            
              </div>
            ):(
              <Spinner animation="border" variant="primary" />
            )}
          </Modal.Body>
          <Modal.Footer>        
            <label>
              <input type="checkbox" id="onlyEven " name="onlyEven" onChange={(e) => filterEvenOnly(e.target.checked)} /> Only even
            </label>
          </Modal.Footer>
        </Modal>
      ):(
        <ContactDetailModal contact={curContact} onHide={() => setShowDetail(false)} />
      )}
    </> 
  );
}

export default USContactsModal;
