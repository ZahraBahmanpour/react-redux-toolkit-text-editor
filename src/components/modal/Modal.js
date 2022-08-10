import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SaveModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Save</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>You have unsaved changes. Do you want to exit?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => handleClose(e, true)}>
          exit
        </Button>
        <Button variant="danger" onClick={(e) => handleClose(e, false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SaveModal;
