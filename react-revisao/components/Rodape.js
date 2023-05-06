import React from "react";

const Rodape = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#008000",
      }}
      className=" position-static bottom-0 py-3 text-white text-center "
    >
      <p>Todos os direitos reservados</p>
      <p>
        <a
          href="https://github.com/digsales"
          style={{ textDecoration: "none", color: "#9BD400" }}
        >
          Diogo Sales
        </a>
      </p>
    </div>
  );
};

export default Rodape;
