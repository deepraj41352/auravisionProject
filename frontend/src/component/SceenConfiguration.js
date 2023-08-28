import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Store } from '../Store';

export default function SceenConfiguration() {
  const { state } = useContext(Store);
  const { countColumn, countRow, data } = state;
  console.log('data', data);
  return (
    <>
      <div className="screenConf">
        <Row className="p-3">
          <Col>
            <h6>SCREEN CONFIGURATION</h6>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Row className="bg-dark m-0 py-[5px]">
              <Col>
                <Row className="Color py-1">
                  <Col>
                    <span className="righttextSize  ">COLUMNS</span>
                  </Col>
                  <Col>
                    <span className="righttextSize  ">ROWS</span>
                  </Col>
                </Row>
                <Row className="py-1">
                  <Col>
                    <span className="righttextSize  ">{countColumn}</span>
                  </Col>
                  <Col>
                    <span className="righttextSize  ">{countRow}</span>
                  </Col>
                </Row>
                <Row className="color-2 py-1">
                  <Col>
                    <span className="righttextSize  ">TOTAL PANELS</span>
                  </Col>
                  <Col>
                    <span className="righttextSize  ">
                      {countColumn * countRow}
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-2">
          <Col className="p-0">
            <Row className="bg-dark m-0 ">
              <Col>
                <Row className="Color py-1">
                  <Col>
                    <span className="righttextSize  ">
                      OVERALL SCREEN DIMENSIONS
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="righttextSize  ">WIDTH</span>
                  </Col>
                  <Col>
                    <span className="righttextSize pl-10 py-5">HEIGHT</span>
                  </Col>
                  <Col>
                    <span className="righttextSize pl-10 py-5">TOTAL AREA</span>
                  </Col>
                </Row>

                <Row className="color-2 ">
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      1,200 mm
                    </span>
                  </Col>
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      675 mm
                    </span>
                  </Col>
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      0.81 sqm
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-2">
          <Col className="p-0">
            <Row className="bg-dark m-0">
              <Col>
                <Row className="Color py-1">
                  <Col>
                    <span className="righttextSize  ">
                      OVERALL SCREEN RESOLUTION
                    </span>
                  </Col>
                </Row>
                <Row className="py-1">
                  <Col>
                    <span className="righttextSize  ">WIDTH</span>
                  </Col>
                  <Col>
                    <span className="righttextSize pl-10 py-5">HEIGHT</span>
                  </Col>
                  <Col>
                    <span className="righttextSize pl-10 py-5">TOTAL AREA</span>
                  </Col>
                </Row>

                <Row className="color-2 py-1">
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      1,200 mm
                    </span>
                  </Col>
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      675 mm
                    </span>
                  </Col>
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      0.81 sqm
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-2">
          <Col className="p-0">
            <Row className="bg-dark m-0 ">
              <Col>
                <Row className="Color py-1">
                  <Col>
                    <span className="righttextSize  ">POWER CONSUMPTION</span>
                  </Col>
                </Row>
                <Row className="py-1">
                  <Col>
                    <span className="righttextSize  ">MAX POWER</span>
                  </Col>
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      0.49 Kw
                    </span>
                  </Col>
                </Row>

                <Row className="color-2 py-1 ">
                  <Col>
                    <span className="righttextSize   ">AVG POWER</span>
                  </Col>
                  <Col>
                    <span className="righttextSize pb-2 pl-10 text-lowercase">
                      0.16 Kw
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Row className="bg-dark m-0 ">
              <Col>
                <Row className="Color py-1">
                  <Col>
                    <span className="righttextSize  ">OTHER DETAILS</span>
                  </Col>
                </Row>
                <Row className="py-1">
                  <Col>
                    <span className="righttextSize  ">OTHER DETAILS</span>
                  </Col>
                  <Col>
                    <span className="righttextSize  ">1,661.7BTU/hr</span>
                  </Col>
                </Row>

                <Row className="color-2 py-1 ">
                  <Col>
                    <span className="righttextSize   ">HEAT DISSIPATION</span>
                  </Col>
                  <Col>
                    <span className="righttextSize pb-2 pl-10 text-lowercase">
                      553.9 BTU/hr
                    </span>
                  </Col>
                </Row>

                <Row className="py-1">
                  <Col>
                    <span className="righttextSize  ">TOTAL SCREEN WEIGHT</span>
                  </Col>
                  <Col>
                    <span className="righttextSize   text-lowercase">
                      28 kg
                    </span>
                  </Col>
                </Row>

                <Row className="color-2 py-1 ">
                  <Col>
                    <span className="righttextSize  ">MIN VIEW DISTANCE</span>
                  </Col>
                  <Col>
                    <span className="righttextSize  text-lowercase">
                      1.02 m
                    </span>
                  </Col>
                </Row>

                <Row className="py-1">
                  <Col>
                    <span className="righttextSize  ">
                      OPTIMAL VIEW DISTANCE
                    </span>
                  </Col>
                  <Col>
                    <span className="righttextSize ">1.16 ~ 3.1m</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-2 mx-1 pb-5 ">
          <Col className="m-1 px-0">
            <div className="buttonImg ">
              <Button className="buttons   py-2 ">DOWNLOAD PDF</Button>
            </div>
          </Col>
          <Col className="m-1 px-0">
            <div className="buttonImg ">
              <Button className="buttons   py-2 ">SEND BY EMAIL</Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
