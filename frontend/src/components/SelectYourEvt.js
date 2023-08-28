import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../DummyData';
import { useContext, useState } from 'react';
import { Store } from '../Store';

export default function SelectYourEvt({ show, setShow }) {
    const { state, dispatch: ctxDispatch } = useContext(Store);

    const [envData, setEnvData] = useState(data.envType || []);

    const handleEnvTypClick = (env) => {

        ctxDispatch({ type: 'ENVType', payload: env });
        // setD(!d)
        setShow(false)
    }

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
                <Modal.Body className="">
                    <Row>
                        <Modal.Title>SELECT YOUR ENVIRONMENT</Modal.Title>
                    </Row>
                    <div className="buttonPop">
                        {envData.map((env) => (
                            <Row key={env.id}>
                                <Button className="px-8 bg-gradient-to-t from-[#333333] to-[#414141] hover:from-[#5d5c5c] hover:to-[#585858] rounded-md text-white py-4 mb-4 w-5/6 lg:w-48 text-center uppercase cursor-pointer"
                                    onClick={() => handleEnvTypClick(env)}>
                                    {env.envName}
                                </Button>
                            </Row>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}