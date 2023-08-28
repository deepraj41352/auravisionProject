import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function CenterRoom() {
  return (
    <>
      <Row className="mt-5 mx-2">
        <Col className="p-0">
          <Row>
            <Col>
              <img
                src="/assets/Center/ceiling.png"
                alt=""
                className="ceilingImg"
              />
            </Col>
          </Row>
          <Row>
            <Col className="leftWall" md={2}></Col>
            <Col className="p-0 wall-gradient"></Col>
            <Col className="rightWall" md={2}></Col>
          </Row>
          <Row>
            <Col>
              <img
                src="/assets/Center/floor.png"
                alt=""
                className="ceilingImg"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
