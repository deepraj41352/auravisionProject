import React from 'react';
import { Row, Col, Modal, Form, Button } from 'react-bootstrap';

export default function SendEmail({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="boxPop PopContain"
      >
        <Modal.Header closeButton closeVariant="white" className="border-0">
          <Modal.Title className="text-center pt-3 pb-4 flexCenter">
            PLEASE FILL THE INFORMATION BELOW
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Project name *</Form.Label>
                    <Form.Control type="text" className="inputFild" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="rext" className="inputFild" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" className="inputFild" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Country *</Form.Label>
                    <Form.Select className="inputFild">
                      <option>Disabled select</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" className="inputFild" />
                  </Form.Group>
                </Col>
                <Col className="mt-2">
                  <Form.Group className="mt-1" controlId="formBasicCheckbox">
                    <Form.Label></Form.Label>
                    <Form.Check type="checkbox" label="Attach spec sheet" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="my-2 p-5 mx-auto w-50">
                <Col className="m-1 px-0">
                  <div className="buttonImg w-100">
                    <Button className="downloadbuttons w-100" type="submit">
                      SEND EMAIL
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
