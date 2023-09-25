import { Row, Table, Modal } from 'react-bootstrap';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Store } from '../Store';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.payload) {
    case "FATCH_REQUEST":
      return { ...state, loading: true };
    case "FATCH_SUCCESS":
      return { ...state, configData: action.payload, loading: false };
    case "FATCH_FAIL":
      return { ...state, loading: false, error: action.payload }
  }
}

export default function SelectConfigration({ showConfig, setShowConfig }) {
  // const [configData, setConfigData] = useState(data.configurationData || []);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { envTypes } = state;
  const [{ loading, error, configData }, dispatch] = useReducer(reducer, { loading: false, error: '' })

  const handleCongigClick = (config) => {
    ctxDispatch({ type: 'FATCH_CONFIGDATA', payload: config });
    ctxDispatch({ type: 'SET_FULLBOX_ON' });
    setShowConfig(false);
  };

  const handleClose = () => setShowConfig(false);

  useEffect(() => {
    const fatchConfigData = async () => {
      try {
        dispatch({ type: "FATCH_REQUEST" });
        const { data } = await axios.get('/api/seed/');
        console.log(data)
        dispatch({ type: "FATCH_SUCCESS", payload: data });

      } catch (error) {
        dispatch({ type: "FATCH_FAIL", payload: error });
      }
    }
    return fatchConfigData
  }, [])
  return (

    <>
      <Modal
        show={showConfig}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="boxPop PopContain"
      >
        <Modal.Header closeButton closeVariant="white" className="border-0">
          <Modal.Title className="text-center pt-3 pb-4 flexCenter">
            SELECT MODEL TO BE CONFIGURED
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div id="tableContainer">
              <Table striped bordered hover variant="dark" className="px-5">
                <thead>
                  <tr className="px-5 textSize">
                    <th className="px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell">
                      CATEGORY
                    </th>
                    <th className="px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell">
                      MODEL
                    </th>
                    <th className="px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell">
                      DESCRIPTION
                    </th>
                    <th className="px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell">
                      PIXEL PITCH
                    </th>
                    <th className="px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell">
                      LED TYPE
                    </th>
                    <th className="px-2 py-3 text-left text-2xs font-medium uppercase tracking-wider md:table-cell">
                      BRIGHTNESS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {configData.map((config) => (
                    <tr
                      key={config._id}
                      className="textSize confitTable"
                      onClick={() => handleCongigClick(config, config.category)}
                    >
                      <td>{config.category}</td>
                      <td>{config.model}</td>
                      <td>{config.description}</td>
                      <td>{config.pixelPitch}</td>
                      <td>{config.ledType}</td>
                      <td>{config.brightness}</td>
                    </tr>
                  ))} */}
                </tbody>
              </Table>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
