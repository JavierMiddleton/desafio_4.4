import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Ingresa el nombre de tu ninja favorito de la Aldea Oculta de las Nubes"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default Buscador;
