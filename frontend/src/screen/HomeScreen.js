import React, { useContext, useEffect, useState } from 'react';
import RoomConfigutore from '../components/RoomConfigutore';
import DisplayConfigutore from '../components/DisplayConfigutore';
import { Col, Row, Image } from 'react-bootstrap';
import CenterRoom from '../components/CenterRoom';
import SceenConfiguration from '../components/SceenConfiguration';
import { Store } from '../Store';
import data from '../DummyData';

export default function HomeScreen() {
  const { state } = useContext(Store);
  const { fullBox } = state;
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
            <Col>
              <DisplayConfigutore />
            </Col>
          </Row>
        </Col>
        <Col md={8} className="mainCol ">
          <CenterRoom />
        </Col>
        <Col md={2} className="mainCol p-0 lg:mr-1 ">
          {fullBox ? <SceenConfiguration /> : ' '}
        </Col>
      </Row>
    </div>
  );
}
