import React from "react";
import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary py-5 text-center text-white mb-3">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <div
        style={{ width: "100%" }}
        className="bg-secondary position-fixed bottom-0 text-white text-center py-2"
      >
        <p>Todos os direitos reservados</p>
      </div>
    </>
  );
};

export default Pagina;
