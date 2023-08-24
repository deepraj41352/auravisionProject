import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

export default function DisplayConfigutore() {
  return (
    <>
      <Row >
        <Col className='my-2'>
          <h6>
            DISPLAY CONFIGURATION
          </h6>
        </Col>
        <Col >
          <Col className="bg-dark px-2">
            <div className="d-flex textSize displayModelRow1 justify-content-around my-2 py-3 ">
              <span >DISPLAY MODEL</span>
              <span ><a href="#" className="text-success">VIEW DETAILS </a></span>
            </div>
            <Col md={12} className="d-flex justify-content-center mb-3">
              <Button className=" px-5 textSize Color">SELECT MODEL</Button>
            </Col>
            <Row>
              <Col md={6}>
                <Row>
                  <span className="textSize pb-2">Colomns</span>
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
                  <span className="textSize pb-2">Rows</span>
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
            <Row>
              <Col className="d-flex justify-content-center my-3">
                <Button className="px-5 my-3 textSize Color">CHANGE MEDIA</Button>
              </Col>
            </Row>
            <Row>
              <p className='textSize'>Height From Ground (m)</p>
              <Col className="d-flex justify-conten-center mb-3">
                <Button className="px-4 Color" >
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </Button>
                <span className=" bg-light text-center text-dark text-lights px-4">2</span>
                <Button className="px-4 Color">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  )
}
