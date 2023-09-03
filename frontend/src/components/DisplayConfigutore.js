import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import SelectConfigration from './SelectConfigration';
import { Store } from '../Store';
import ViewSingleConfig from './ViewSingleConfig';

export default function DisplayConfigutore() {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { config, countRows, countColumns, imageShow } = state;

  const [configModelVisible, setConfigModelVisible] = useState(false);
  const [singleConfigModel, setSingleConfigModel] = useState(false);
  const [countColumn, setCountColumn] = useState(countColumns);
  const [countRow, setCountRow] = useState(countRows);

  function handleModelConfigration() {
    setConfigModelVisible(true);
  }

  const handleViewSingleConfig = () => setSingleConfigModel(true);

  function handleChange(e) {
    ctxDispatch({
      type: 'IMGUPLOAD',
      payload: URL.createObjectURL(e.target.files[0]),
    });
    ctxDispatch({
      type: 'SET_ADDIMAGE',
    });
    ctxDispatch({ type: 'ROOMTHEM', payload: null });
  }
  function handleRemoveImg() {
    ctxDispatch({
      type: 'IMGUPLOAD',
      payload: null,
    });
    ctxDispatch({
      type: 'SET_REMOVEIMAGE',
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
    ctxDispatch({
      type: 'COUNTCOLUMN',
      payload: countColumn,
    });
  }, [ctxDispatch, countRow, countColumn]);

  // useEffect(() => {}, [ctxDispatch, countColumn]);

  return (
    <>
      <Row>
        <Col className="py-3 px-0 text-center">
          <h6>DISPLAY CONFIGURATION</h6>
        </Col>
        <Col className="bgColor mr-2 p-0">
          <Row className="w-100 m-0">
            <Col
              md={12}
              className="d-flex textSize displayModelRow1 justify-content-around my-2 p-0"
            >
              <span>DISPLAY MODEL</span>

              <span
                href="#"
                className={`text-success displayConModel`}
                onClick={config.model ? handleViewSingleConfig : undefined}
              >
                VIEW DETAILS
              </span>
              <ViewSingleConfig
                show={singleConfigModel}
                setShow={setSingleConfigModel}
              />
            </Col>
            <Col md={12} className="d-flex justify-content-center mb-3">
              <Button
                className="w-100 textSize Color"
                onClick={handleModelConfigration}
              >
                {config.model || 'SELECT MODEL'}
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
              {imageShow ? (
                <Button
                  className="w-100 textSize Color"
                  onClick={handleRemoveImg}
                >
                  Remove media
                </Button>
              ) : (
                <label className="w-100 text-center textSize Color text-uppercase ChangeMedia">
                  Change media
                  <input
                    type="file"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              )}
            </Col>
            {imageShow ? (
              <Col md={12} className="w-100 mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label  text-lowercase"
                    for="flexCheckDefault"
                  >
                    keep ratio
                  </label>
                </div>
              </Col>
            ) : (
              ''
            )}

            <Col md={12} className="d-flex justify-content-center mb-3 ">
              <p className="textSize">Height From Ground (m)</p>
            </Col>
            <Row>
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
          </Row>
        </Col>
      </Row>
    </>
  );
}
