import { Row, Image, Col, Modal } from 'react-bootstrap';
import data from '../DummyData';
import { useContext, useState } from 'react';
import { Store } from '../Store';

export default function SelectYourEvt({ showroom, setShowroom }) {
    const { state, dispatch: ctxDispatch } = useContext(Store);

    const [roomData, setRoomData] = useState(data.roomType || []);

    const handleRoomTypeClick = (room) => {

        ctxDispatch({ type: 'ROOMTYPE', payload: room });

        setShowroom(false)
    }
    const handleClose = () => setShowroom(false);
    return (
        <>
            <Modal
                show={showroom}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="boxPop PopContain"
            >
                <Modal.Header closeButton closeVariant="white"></Modal.Header>
                <Modal.Body >
                    <Row>
                        <Modal.Title className='text-center pt-3 pb-4'>SELECT ROOM TYPE</Modal.Title>
                    </Row>
                    <Row>
                        {roomData.map((room) => (
                            <Col key={room.id} md={4} className='my-2'>
                                <p>{room.roomTheme}</p>
                                <Image src={room.image} alt={room.roomTheme} className='roomImage' onClick={() => handleRoomTypeClick(room)} />
                            </Col>
                        ))}
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}