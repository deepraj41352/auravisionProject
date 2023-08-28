import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Store } from '../Store';

export default function CenterRoom() {
  const { state } = useContext(Store);
  const { imgUpload } = state;
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
            <Col className="p-0 wall-gradient">
              <img src={imgUpload} alt="" />
              <div className="position-absolute">
                <h3 className="text-capitalize  position-absolute text-center border-b border-black md:leading-[0.1em] text-3xs md:text-sm">
                  NaN
                </h3>
              </div>
            </Col>
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
