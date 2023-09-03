import React, { useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Store } from '../Store';
import DownloadPDF from './DownloadPDF';
import SendEmail from './SendEmail';

export default function SceenConfiguration() {
  const { state } = useContext(Store);
  const { countColumns, countRows, config } = state;
  const [show, setShow] = useState(false);
  const [showSendMail, setShowSendMail] = useState(false);

  const handleShow = () => setShow(true);
  const handleShowSendMail = () => setShowSendMail(true);

  return (
    <>
      <div className="screenConf">
        <Row className="py-3 px-0 text-center">
          <Col>
            <h6>SCREEN CONFIGURATION</h6>
          </Col>
        </Row>
        <Row>
          <Col className="bgColor mr-2 ">
            <Row className="Color p-0 w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">COLUMNS</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">ROWS</span>
              </Col>
            </Row>
            <Row className="w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">{countColumns}</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">{countRows}</span>
              </Col>
            </Row>
            <Row className="w-100 m-0 color-2">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize">TOTAL PANELS</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">
                  {countColumns * countRows}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="my-2">
          <Col className="bgColor mr-2 ">
            <Row className="Color p-0 w-100 m-0">
              <Col
                md={12}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">
                  OVERALL SCREEN DIMENSIONS
                </span>
              </Col>
            </Row>
            <Row className="w-100 m-0">
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">WIDTH</span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize">HEIGHT</span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize">TOTAL AREA</span>
              </Col>
            </Row>
            <Row className="w-100 m-0 color-2">
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   text-lowercase">
                  {config.cabinetSizeW * countColumns} mm
                </span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   text-lowercase">
                  {config.cabinetSizeH * countRows} mm
                </span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   text-lowercase">
                  {(config.cabinetSizeW *
                    countColumns *
                    config.cabinetSizeH *
                    countRows) /
                    1000000}{' '}
                  sqm
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="my-2">
          <Col className="bgColor mr-2 ">
            <Row className="Color p-0 w-100 m-0">
              <Col
                md={12}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">
                  OVERALL SCREEN RESOLUTION
                </span>
              </Col>
            </Row>
            <Row className="w-100 m-0">
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">WIDTH</span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize">HEIGHT</span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize">TOTAL AREA</span>
              </Col>
            </Row>

            <Row className="w-100 m-0 color-2">
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   text-lowercase">
                  {config.cabinetResW * countColumns} px
                </span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   text-lowercase">
                  {config.cabinetResH * countRows} px
                </span>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   text-lowercase">
                  {config.cabinetResW *
                    countColumns *
                    config.cabinetResH *
                    countRows}{' '}
                  px
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="my-2">
          <Col className="bgColor ">
            <Row className="Color p-0 w-100 m-0">
              <Col
                md={12}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">POWER CONSUMPTION</span>
              </Col>
            </Row>
            <Row className="w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">MAX POWER</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   text-lowercase">
                  {(
                    (config.maxPower * countColumns * countRows) /
                    5000
                  ).toFixed(2)}{' '}
                  kw
                </span>
              </Col>
            </Row>

            <Row className="color-2 w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize   ">AVG POWER</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize pb-2 pl-10 text-lowercase">
                  {(
                    (config.avgPower * countColumns * countRows) /
                    5000
                  ).toFixed(2)}{' '}
                  kw
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="bgColor mr-2 ">
            <Row className="Color p-0 w-100 m-0">
              <Col
                md={12}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  ">OTHER DETAILS</span>
              </Col>
            </Row>

            <Row className="w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center  my-3 p-0"
              >
                <span className="righttextSize lh-1 ">
                  HEAT DISSIPATION (MAX)
                </span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize lh-1 ">
                  {3.4192 *
                    ((config.maxPower * countColumns * countRows) / 5).toFixed(
                      2
                    )}{' '}
                  BTU/hr
                </span>
              </Col>
            </Row>

            <Row className="color-2 w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize ">HEAT DISSIPATION</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize text-lowercase">
                  {(
                    3.4192 *
                    ((config.avgPower * countColumns * countRows) / 5)
                  ).toFixed(2)}{' '}
                  BTU/hr
                </span>
              </Col>
            </Row>

            <Row className="w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center  my-3 p-0"
              >
                <span className="righttextSize lh-1">TOTAL SCREEN WEIGHT</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center  my-3 p-0"
              >
                <span className="righttextSize  text-lowercase">
                  {config.weight * countColumns * countRows} kg
                </span>
              </Col>
            </Row>

            <Row className="color-2 w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  lh-1">MIN VIEW DISTANCE</span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize lh-1 text-lowercase">
                  1.02 m
                </span>
              </Col>
            </Row>

            <Row className=" w-100 m-0">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize  lh-1">
                  OPTIMAL VIEW DISTANCE
                </span>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center my-3 p-0"
              >
                <span className="righttextSize lh-1">1.16 ~ 3.1m</span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="my-2 mx-1 pb-5 ">
          <Col className="m-1 px-0">
            <div className="buttonImg w-100">
              <Button className="buttons w-100" onClick={handleShow}>
                DOWNLOAD PDF
              </Button>
            </div>
            <DownloadPDF show={show} setShow={setShow} />
          </Col>
          <Col className="m-1 px-0">
            <div className="buttonImg w-100">
              <Button className="buttons w-100" onClick={handleShowSendMail}>
                SEND BY EMAIL
              </Button>
            </div>
            <SendEmail show={showSendMail} setShow={setShowSendMail} />
          </Col>
        </Row>
      </div>
    </>
  );
}
