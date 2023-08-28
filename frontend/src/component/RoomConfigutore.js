import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import SelectYourEvt from './SelectYourEvt';
import SelectRoomThem from './SelectRoomThem';
import { Store } from '../Store';

export default function RoomConfigutore() {
  const { state } = useContext(Store);
  const { envTypes, roomType } = state;
  const [envTypeModalVisible, setEnvTypeModalVisible] = useState(false);
  const [triggerRerender, setTriggerRerender] = useState(false);
  const [roomThemModelVisible, setRoomThemModelVisible] = useState(false);

  const handleEnvType = () => setEnvTypeModalVisible(true);

  const handleRoomThem = () => setRoomThemModelVisible(true);

  useEffect(() => {
    setTriggerRerender(!triggerRerender);
  }, [envTypes, roomType]);

  return (
    <>
      <Row>
        <Col className="p-3">
          <h6>ROOM CONFIGURATOR</h6>
        </Col>
        <Col className="bg-dark px-2 mr-2 ">
          <Row>
            <Col
              md={12}
              className="d-flex flex-column justify-content-center my-3"
            >
              <span className="textSize pb-2">ENVIRONMENT</span>
              <Button className=" px-5 textSize Color" onClick={handleEnvType}>
                {envTypes.envName || 'INDOOR'}
              </Button>
              <SelectYourEvt
                show={envTypeModalVisible}
                setShow={setEnvTypeModalVisible}
              />
            </Col>
          </Row>

          <Row>
            {envTypes.envName === 'OUTDOOR' ? (
              ''
            ) : (
              <Col
                md={12}
                className="d-flex flex-column justify-content-center mb-3"
              >
                <span className="textSize pb-2">ROOM TYPE</span>
                <Button
                  className=" px-4 textSize Color"
                  onClick={handleRoomThem}
                >
                  {roomType.roomTheme || 'STANDARD ROOM'}
                </Button>
                <SelectRoomThem
                  showroom={roomThemModelVisible}
                  setShowroom={setRoomThemModelVisible}
                />
              </Col>
            )}

            <Col md={12}>
              <Row className="mb-3">
                <Col md={6}>
                  <Row>
                    <span className="textSize pb-2">width (w)</span>
                  </Row>
                  <Row>
                    <Col md={3} className="d-flex">
                      <Button className="btns btnLeft">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </Button>
                      <span className="textSize bg-light text-dark text-lights px-2">
                        2
                      </span>
                      <Button className="btns btnRight">
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
                      <Button className="btns btnLeft">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </Button>
                      <span className="textSize bg-light text-dark text-lights px-2">
                        2
                      </span>
                      <Button className="btns btnRight">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
