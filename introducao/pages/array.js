import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

const array = () => {
  const carros = ["Celton", "Uno", "Tempra", "Civic", "Marea", "Doblô"];

  // const pessoa = { nome: "Orion", idade: 21, telefone: "(61) 98765-4321" };

  // const nome = "Orion";
  // const idade = 21;
  // const telefone = "(61) 98765-4321";

  return (
    <>
      <Pagina titulo="Arrays">
        <Container>
          <h1>Lista Ordenada</h1>
          <br />
          {carros.map((item, index) => (
            <p>
              {index + 1} - {item}
            </p>
          ))}
        </Container>
      </Pagina>
    </>
  );
};

export default array;
