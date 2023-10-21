import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Buscador from "./Buscador";

const MiApi = () => {
  const [narutoData, setNarutoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchSuperhero = () => {
    const apiUrl = `https://narutodb.xyz/api/village`;
    axios
      .get(apiUrl)
      .then((response) => {
        const villagesArray = response.data.villages[17].characters;
        setNarutoData(villagesArray);
        setFilteredData(villagesArray);
      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };

  useEffect(() => {
    searchSuperhero();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = narutoData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ordenar los elementos filtrados por nombre en orden alfabético
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredData(filtered);
  };

  return (
    <Container>
      <h1>Ninjas de la Aldea Oculta de las Nubes</h1>
      <Buscador onSearch={handleSearch} />
      <div className="mt-5 d-flex justify-content-center gap-3 contenedor-card">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Card key={item.id} style={{ width: "18rem", height: "18rem" }}>
              <Card.Img
                variant="top"
                src={item.images}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h1>¡Cargando!</h1>
        )}
      </div>
    </Container>
  );
};

export default MiApi;
