import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import SelectYourEvt from './SelectYourEvt';
import SelectRoomThem from './SelectRoomThem';
import { Store } from '../Store';

export default function RoomConfigutore() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { envTypes, roomType } = state;
  const [envTypeModalVisible, setEnvTypeModalVisible] = useState(false);
  const [triggerRerender, setTriggerRerender] = useState(false);
  const [roomThemModelVisible, setRoomThemModelVisible] = useState(false);
  const [countHeight, setCountHeight] = useState(3);
  const [countWidth, setCountWidth] = useState(6);

  const handleEnvType = () => setEnvTypeModalVisible(true);

  const handleRoomThem = () => setRoomThemModelVisible(true);

  useEffect(() => {
    setTriggerRerender(!triggerRerender);
  }, [envTypes, roomType]);

  const decrementHeight = () => {
    if (countHeight >= 2) {
      setCountHeight(countHeight - 1);
    }
  };
  const decrementWidth = () => {
    if (countWidth >= 2) {
      setCountWidth(countWidth - 1);
    }
  };
  useEffect(() => {
    ctxDispatch({
      type: 'COUNTROW',
      payload: countHeight,
    });
    ctxDispatch({
      type: 'COUNTCOLUMN',
      payload: countWidth,
    });
  }, [ctxDispatch, countHeight, countWidth]);

  return (
    <>
      <Row>
        <Col className="py-3 px-0 text-center">
          <h6>ROOM CONFIGURATOR</h6>
        </Col>
      </Row>
      <Row>
        <Col className="bgColor mr-2 ">
          <Row className="w-100 m-0">
            <Col
              md={12}
              className="d-flex flex-column justify-content-center my-3 p-0"
            >
              <span className="textSize pb-2">ENVIRONMENT</span>
              <Button className="w-100 textSize Color" onClick={handleEnvType}>
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
                className="d-flex flex-column justify-content-center  mb-3"
              >
                <span className="textSize pb-2">ROOM TYPE</span>
                <Button
                  className="w-100 textSize Color text-uppercase"
                  onClick={handleRoomThem}
                >
                  {roomType.roomTheme || 'STANDARD ROOM'}
                </Button>
                <SelectRoomThem
                  showroom={roomThemModelVisible}
                  setShowroom={setRoomThemModelVisible}
                  roomType={roomType}
                />
              </Col>
            )}
            <Col md={12}>
              <Row className="mb-3">
                <Col md={6}>
                  <Row>
                    <span className="textSize pb-2 text-uppercase">
                      width (w)
                    </span>
                  </Row>
                  <Row>
                    <Col md={3} className="d-flex">
                      <Button className="btns btnLeft" onClick={decrementWidth}>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </Button>
                      <span className="textSize bg-light text-dark text-lights px-2">
                        {countWidth}
                      </span>
                      <Button className="btns btnRight" onClick={() => setCountWidth(countWidth + 1)}>
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
                      <Button className="btns btnLeft" onClick={decrementHeight}>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </Button>
                      <span className="textSize bg-light text-dark text-lights px-2">
                        {countHeight}
                      </span>
                      <Button className="btns btnRight" onClick={() => setCountHeight(countHeight + 1)}>
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
