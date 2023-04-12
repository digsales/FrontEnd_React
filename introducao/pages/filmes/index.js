import React, { useState } from "react";
import { useEffect } from "react";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";

const index = () => {
  const [filmes, setFilmes] = useState([
    "Pokemon",
    "Bleach",
    "Naruto",
    "Berserk",
    useEffect(() => {
      apiFilmes.get("/movie/popular").then((resultado) => {
        console.log(resultado.data.results);
      });
    }, []),
  ]);
  return (
    <Pagina titulo="filmes">
      <h1>Animes</h1>
      <p></p>

      {filmes.map((item) => (
        <p>{item}</p>
      ))}
    </Pagina>
  );
};

export default index;
