import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";


function Welcome() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, []);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Benvenuto</Modal.Title>
                </Modal.Header>
                <Modal.Body>Benvenuto nel nostro super shop di libri</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Welcome;