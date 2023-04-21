import React from "react";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";
import { Card, Col, Row } from "react-bootstrap";

const index = ({ ator, imagens }) => {
  return (
    <Pagina titulo={ator.name}>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`}
              alt={ator.name}
            />
          </Card>
        </Col>
        <Col md={9} className="text-start p-3">
          <p>
            <strong>Data de Nascimento: </strong>{" "}
            {new Date(ator.birthday).toLocaleDateString()}
          </p>
          <p>
            <strong>Local de Nascimento: </strong>
            {ator.place_of_birth}
          </p>
          {ator.biography ? <p>{ator.biography}</p> : <></>}
          <Row>
            {imagens.profiles.map((item) => (
              <Col>
                <Card>
                  <Card.Img
                    src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiFilmes.get(`/person/${id}?language=pt-BR`);
  const resImagens = await apiFilmes.get(`/person/${id}/images`);
  const ator = await resultado.data;
  const imagens = await resImagens.data;
  return {
    props: { ator, imagens },
  };
}
