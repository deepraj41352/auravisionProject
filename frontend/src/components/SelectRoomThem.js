import { Row, Image, Col, Modal } from 'react-bootstrap';
import data from '../DummyData';
import { useContext, useState } from 'react';
import { Store } from '../Store';

export default function SelectYourEvt({ showroom, setShowroom, roomType }) {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const [roomData, setRoomData] = useState(data.roomType || []);

  const handleRoomTypeClick = (room) => {
    ctxDispatch({ type: 'ROOMTYPE', payload: room });
    ctxDispatch({ type: 'IMGUPLOAD', payload: null });
    ctxDispatch({ type: 'ROOMTHEM', payload: roomType.image });
    console.log(roomType.image);
    setShowroom(false);
  };
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
        <Modal.Header closeButton closeVariant="white" className="border-0">
          <Modal.Title className="text-center pt-3 pb-4 flexCenter">
            SELECT ROOM TYPE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {roomData.map((room) => (
              <Col key={room.id} md={4} className="my-2">
                <p>{room.roomTheme}</p>
                <Image
                  src={room.image}
                  alt={room.roomTheme}
                  className="roomImage"
                  onClick={() => handleRoomTypeClick(room)}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
