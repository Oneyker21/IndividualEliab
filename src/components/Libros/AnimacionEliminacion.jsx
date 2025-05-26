import React from 'react';
import { Modal } from 'react-bootstrap';
import '../../App.css';

const AnimacionEliminacion = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="modal-eliminacion"
      backdrop="static"
    >
      <Modal.Body className="text-center py-5">
        <div className="animacion-eliminacion">
          <i className="bi bi-trash3-fill"></i>
        </div>
        <h4 className="mt-4">Eliminando libro...</h4>
        <p className="text-muted">Por favor, espere un momento</p>
      </Modal.Body>
    </Modal>
  );
};

export default AnimacionEliminacion;
