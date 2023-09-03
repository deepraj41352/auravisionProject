import React, { useContext } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Store } from '../Store';

export default function CenterRoom() {
  const { state } = useContext(Store);
  const { countColumns, countRows, config, imgUpload, roomThem } = state;

  return (
    <>
      <Row className="mt-5 mx-2">
        <Col className="p-0">
          <Row>
            <Col>
              <img
                src="/assets/Center/ceiling.png"
                alt=""
                className="ceilingImg"
              />
            </Col>
          </Row>
          <Row>
            <Col className="leftWall" md={2}></Col>
            <Col className="p-0 w-full d-flex flex-column position-relative bg-cover bg-center align-items-center justify-content-end wall-gradient">
              <div className="position-absolute w-full h-full">
                <h3 className=" position-absolute text-center border-bottom border-dark md:leading-[0.1em] text-3xs md:text-sm topCenter">
                  <span className="bg-black py-0 px-1 ">
                    {(config.cabinetSizeW * countColumns) / 1000} m
                  </span>
                </h3>
                <h3 className=" position-absolute text-center border-bottom border-dark md:leading-[0.1em] text-3xs md:text-sm rightCenter">
                  <span className="bg-black py-0 px-1 ">
                    {(config.cabinetSizeH * countRows) / 1000} m
                  </span>
                </h3>
                <h3 className=" position-absolute text-center border-bottom border-black md:leading-[0.1em] text-3xs md:text-sm bottomCenter">
                  <span className="bg-black py-0 px-1 ">1.00 m</span>
                </h3>
                <h3 className="text-capitalize  position-absolute text-center border-bottom border-dark md:leading-[0.1em] text-3xs md:text-sm leftCenter">
                  <span className="bg-black py-0 px-1 ">NaN m</span>
                </h3>
                <div className="position-absolute text-black z-10 bg-black leftTop">
                  <div className="bg-cover bg-center cursor-pointer px-2 py-1">
                    <p className="text-white">
                      {config.cabinetResW * countColumns} X{' '}
                      {config.cabinetResH * countRows}
                    </p>
                  </div>
                </div>
                <div className="position-absolute text-black z-10 rightTop">
                  <div className="bg-cover bg-center cursor-pointer px-2 py-1 bgImg">
                    <p className="text-white"> {config.model}</p>
                  </div>
                </div>
              </div>
              <Image className='centerThemeImg position-absolute' src={roomThem.themImg ? roomThem.themImg : ''} alt="roomthem" />
              <div
                className="position-relative bg-center  d-inline-block border border-black ImgCenter"
                style={{

                  backgroundImage: `url(${roomThem.bgImg || imgUpload})`,
                }}
              ></div>

            </Col>
            <Col className="rightWall" md={2}></Col>
          </Row>
          <Row>
            <Col>
              <img
                src="/assets/Center/floor.png"
                alt=""
                className="ceilingImg"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
