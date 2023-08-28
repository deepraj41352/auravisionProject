<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import RoomConfigutore from '../component/RoomConfigutore';
import DisplayConfigutore from '../component/DisplayConfigutore';
=======
import React from 'react';
import RoomConfigutore from '../components/RoomConfigutore';
import DisplayConfigutore from '../components/DisplayConfigutore';
>>>>>>> 5582c8acbdd91141148c5c8a3bca4fb34203c111
import { Col, Row, Image } from 'react-bootstrap';
import CenterRoom from '../component/CenterRoom';
import SceenConfiguration from '../component/SceenConfiguration';
import { Store } from '../Store';
import data from '../DummyData';
export default function HomeScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [datas, setDatas] = useState(data.configurationData || []);

  useEffect(() => {
    ctxDispatch({
      type: 'DATA',
      payload: datas,
    });
  }, [datas]);

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
