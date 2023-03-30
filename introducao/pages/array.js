import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";

const array = () => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary py-5 text-center text-white mb-3">
        <Container>
          <h1>Array</h1>
        </Container>
      </div>

      <div>array</div>

      <div
        style={{ width: "100%" }}
        className="bg-secondary position-fixed bottom-0 text-center text-white"
      >
        <p>Todos os direitos reservados </p>
      </div>
    </>
  );
};

export default array;
