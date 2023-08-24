import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import SelectYourEvt from './SelectYourEvt';

export default function RoomConfigutore() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        <Row>
          <Col>
            <span className="roomheader">ROOM CONFIGURATOR</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
          </Col>
          <SelectYourEvt show={show} setShow={setShow} />
        </Row>
      </Row>
    </>
  );
}
