import React from 'react';
import RoomConfigutore from '../components/RoomConfigutore';
import DisplayConfigutore from '../components/DisplayConfigutore';
import { Col, Row, Image } from 'react-bootstrap';
export default function HomeScreen() {
  return (
    <div className='HomeContainer container-fluid'>
      <Row className="d-flex justify-content-center" >
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

        <Col md={8} className="borders mainCol">center</Col>
        <Col md={2} className="borders mainCol">
          Right
        </Col>
      </Row>


    </div>
  );
}
