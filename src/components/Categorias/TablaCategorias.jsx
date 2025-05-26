import React from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const TablaCategorias = ({ categorias, openEditModal, openDeleteModal }) => {
  if (!categorias || categorias.length === 0) {
    return <p>No hay categorías disponibles.</p>;
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria) => (
          <tr key={categoria.id}>
            <td>{categoria.nombreCategoria}</td>
            <td>{categoria.descripcionCategoria}</td>
            <td>
              <Button
                variant="outline-warning"
                size="sm"
                className="me-2"
                onClick={() => openEditModal(categoria)}
              >
                <i className="bi bi-pencil"></i>
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => openDeleteModal(categoria)}
              >
                <i className="bi bi-trash"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaCategorias;