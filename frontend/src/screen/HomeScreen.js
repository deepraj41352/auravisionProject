import React from 'react';
import RoomConfigutore from '../components/RoomConfigutore';
import DisplayConfigutore from '../components/DisplayConfigutore';
import { Col, Row, Image } from 'react-bootstrap';
import CenterRoom from '../components/CenterRoom';
import SceenConfiguration from '../components/SceenConfiguration';
export default function HomeScreen() {
  return (
    <div className="HomeContainer container-fluid">
      <Row className="d-flex justify-content-center">
        <Image src="/assets/logo.png" className="homeLogo" alt="auruvisiton" />
      </Row>
      <Row>
        <Col md={2} className=" mainCol">
          <Row>
            <Col>
              <RoomConfigutore />
            </Col>
          </Row>
          <Row>
            <Col className=" p-2">
              <DisplayConfigutore />
            </Col>
          </Row>
        </Col>
        <Col md={8} className="mainCol ">
          <CenterRoom />
        </Col>
        <Col md={2} className="mainCol p-0 lg:mr-1 ">
          <SceenConfiguration />
        </Col>
      </Row>
    </div>
  );
}
