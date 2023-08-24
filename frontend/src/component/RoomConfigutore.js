import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

export default function RoomConfigutore() {
  return (
    <>

      <Row >
        <Col className='my-2'>
          <h6>
            ROOM CONFIGURATOR
          </h6>
        </Col>
        <Col className="bg-dark px-2 mx-2 ">
          <Row>
            <Col md={12} className="d-flex flex-column justify-content-center mt-3">
              <span className="textSize pb-2">ENVIRONMENT</span>
              <Button className=" px-5 textSize Color">INDOOR</Button>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="d-flex flex-column justify-content-center my-3">
              <span className="textSize pb-2">ROOM TYPE</span>
              <Button className=" px-4 textSize Color">STANDARD ROOM</Button>
            </Col>
            <Row className='mb-3'>
              <Col md={6}>
                <Row>
                  <span className="textSize pb-2">width (w)</span>
                </Row>
                <Row>
                  <Col md={3} className="d-flex">
                    <Button className="btns">
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </Button>
                    <span className="textSize bg-light text-dark text-lights px-2">2</span>
                    <Button className="btns" >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <span className="textSize pb-2">Height (H)</span>
                </Row>
                <Row>
                  <Col className="d-flex">
                    <Button className="btns">
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </Button>
                    <span className="textSize bg-light text-dark text-lights px-2">2</span>
                    <Button
                      className="btns"
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>

    </>);
}
