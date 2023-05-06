import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";
import Rodape from "./Rodape";

const Pagina = (props) => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Cabecalho />

      <div className="py-3 text-white text-center mb-3 bg-secondary">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>

      <Rodape />
    </div>
  );
};

export default Pagina;
