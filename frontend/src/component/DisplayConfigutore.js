import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import SelectConfigration from './SelectConfigration';
import { Store } from '../Store';

export default function DisplayConfigutore() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [configModelVisible, setConfigModelVisible] = useState(false);
  const [countColumn, setCountColumn] = useState(2);
  const [countRow, setCountRow] = useState(2);

  const handleModelConfigration = () => setConfigModelVisible(true);
  function handleChange(e) {
    ctxDispatch({
      type: 'IMGUPLOAD',
      payload: URL.createObjectURL(e.target.files[0]),
    });
  }

  const decrementRow = () => {
    if (countRow >= 2) {
      setCountRow(countRow - 1);
    }
  };
  const decrementColumn = () => {
    if (countColumn >= 2) {
      setCountColumn(countColumn - 1);
    }
  };
  useEffect(() => {
    ctxDispatch({
      type: 'COUNTROW',
      payload: countRow,
    });
  }, [countRow]);

  useEffect(() => {
    ctxDispatch({
      type: 'COUNTCOLUMN',
      payload: countColumn,
    });
  }, [countColumn]);

  return (
    <>
      <Row>
        <Col className="my-2">
          <h6>DISPLAY CONFIGURATION</h6>
        </Col>
        <Col>
          <Col className="bg-dark px-2">
            <Col
              md={12}
              className="d-flex textSize displayModelRow1 justify-content-around my-2 py-3 "
            >
              <span>DISPLAY MODEL</span>
              <span>
                <a href="#" className="text-success bold">
                  VIEW DETAILS{' '}
                </a>
              </span>
            </Col>
            <Col md={12} className="d-flex justify-content-center mb-3">
              <Button
                className=" px-5 textSize Color"
                onClick={handleModelConfigration}
              >
                SELECT MODEL
              </Button>
              <SelectConfigration
                showConfig={configModelVisible}
                setShowConfig={setConfigModelVisible}
              />
            </Col>
            <Col md={12}>
              <Row md={12}>
                <Col md={6}>
                  <Row>
                    <span className="textSize pb-2">Column </span>
                  </Row>
                  <Row>
                    <Col md={3} className="d-flex">
                      <Button
                        className="btns btnLeft"
                        onClick={decrementColumn}
                      >
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </Button>
                      <span className="textSize bg-light text-dark text-lights px-2">
                        {countColumn}
                      </span>
                      <Button
                        className="btns btnRight"
                        onClick={() => setCountColumn(countColumn + 1)}
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <span className="textSize pb-2">Rows</span>
                  </Row>
                  <Row>
                    <Col className="d-flex">
                      <Button className="btns btnLeft" onClick={decrementRow}>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </Button>
                      <span className="textSize bg-light text-dark text-lights px-2">
                        {countRow}
                      </span>
                      <Button
                        className="btns btnRight "
                        onClick={() => setCountRow(countRow + 1)}
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={12} className="d-flex justify-content-center my-3 ">
              <label className="px-5 my-3 textSize Color">
                Change media
                <input type="file" onChange={handleChange} className="hidden" />
              </label>
            </Col>
            <Col md={12} className="d-flex justify-conten-center">
              <Row>
                <p className="textSize">Height From Ground (m)</p>
                <Col className="d-flex  mb-3">
                  <Button className="px-4 Color bigBtn btnLeft">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </Button>
                  <span className=" bg-light text-center text-dark text-lights px-4">
                    2
                  </span>
                  <Button className="px-4 Color bigBtn btnRight">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  );
}
