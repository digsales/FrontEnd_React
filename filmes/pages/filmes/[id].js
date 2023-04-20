import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";

const Detalhes = ({ filme }) => {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col md={3}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
          />
        </Col>

        <Col md={9}>
          <p>
            <strong>Data de Lançamento: </strong>
            {filme.release_date.replaceAll("-", "/")}
          </p>
          <p>
            <strong>Orçamento: </strong>
            R${filme.budget.toFixed(2).replace(".", ",")}
          </p>
          <p>
            <strong>Duração: </strong>
            {filme.runtime} min
          </p>
          <p>
            <strong>Nota: </strong>
            {filme.vote_average.toFixed(1).replace(".", ",")}/10
          </p>
          <div>
            <strong>Gêneros: </strong>
            <ul>
              {filme.genres.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
          <p>{filme.overview}</p>
        </Col>
      </Row>
      <p>
        <strong>Elenco:</strong>
      </p>
      <ul>
        {filme.crew.map((item) => (
          <li>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            />
          </li>
        ))}
      </ul>
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await apiFilmes.get(`/movie/${id}?language=pt-BR`);

  const filme = await resultado.data;
  const generos = filme.genres;
  return {
    props: { filme, generos }, // will be passed to the page component as props
  };
}
