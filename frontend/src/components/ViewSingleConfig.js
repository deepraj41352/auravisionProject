import { Row, Table, Modal } from 'react-bootstrap';
import data from '../DummyData';
import { useContext, useState } from 'react';
import { Store } from '../Store';


export default function SelectConfigration({ show, setShow }) {
    const { state } = useContext(Store);
    const { config } = state;



    const handleClose = () => setShow(false);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="boxPop PopContain"
            >
                <Modal.Header closeButton closeVariant="white"></Modal.Header>
                <Modal.Body className='px-0' >
                    <Row>
                        <Modal.Title className='text-center pt-3 pb-4'>{config.model}</Modal.Title>
                    </Row>
                    <Row className='justify-content-center'>
                        <div id="tableContainer">
                            <Table striped bordered hover variant="dark" className='px-5'>
                                <tbody>

                                    <tr className="confitTable" >
                                        <td>MODEL</td>
                                        <td>{config.model}</td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>pixel Pitch (mm)</td>
                                        <td>{config.pixelPitch}</td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>LED Type</td>
                                        <td>{config.ledType}</td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>Cabinet Size W x H x D</td>
                                        <td>{config.cabinetSizeW} mm x {config.cabinetSizeH} mm</td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>Cabinet Resolution</td>
                                        <td>{config.cabinetResW} px x {config.cabinetResH} px</td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>Module Size</td>
                                        <td>{config.moduleSizeW} mm x {config.moduleSizeH} mm </td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>Module Resolution</td>
                                        <td>{config.moduleResW} px x {config.moduleResH} px</td>

                                    </tr>
                                    <tr className="textSize">
                                        <td>Module Config</td>
                                        <td>{config.moduleConfig} </td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>Weight/Cabinet</td>
                                        <td>{config.weight} kg</td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>Max Power Consumption</td>
                                        <td>{config.maxPower} W/m <sub>2</sub> (max.)</td>
                                    </tr>
                                    <tr className="textSize">
                                        <td>Avg Power Consumption</td>
                                        <td>{config.avgPower} W/m <sub>2</sub> (typ.)</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}