import { Row, Table, Modal } from 'react-bootstrap';
import data from '../DummyData';
import { useState } from 'react';


export default function SelectConfigration({ showConfig, setShowConfig }) {
    const [configData, setConfigData] = useState(data.configurationData || []);

    const handleClose = () => setShowConfig(false);
    return (
        <>
            <Modal
                show={showConfig}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="boxPop PopContain"
            >
                <Modal.Header closeButton closeVariant="white"></Modal.Header>
                <Modal.Body >
                    <Row>
                        <Modal.Title className='text-center pt-3 pb-4'>SELECT MODEL TO BE CONFIGURED</Modal.Title>
                    </Row>
                    <Row>
                        <div id="tableContainer">
                            <Table striped bordered hover variant="dark" className='px-5'>
                                <thead>
                                    <tr className='px-5 textSize'>
                                        <th className='px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell'>
                                            CATEGORY</th>
                                        <th className='px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell' >MODEL</th>
                                        <th className='px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell'>DESCRIPTION</th>
                                        <th className='px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell'>PIXEL PITCH</th>
                                        <th className='px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell'>LED TYPE</th>
                                        <th className='px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell'>BRIGHTNESS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {configData.map((config) => (

                                        <tr key={config.id} className="textSize ">
                                            <td>{config.category}</td>
                                            <td>{config.model}</td>
                                            <td>{config.description}</td>
                                            <td>{config.pixelPitch}</td>
                                            <td>{config.ledType}</td>
                                            <td>{config.brightness}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}