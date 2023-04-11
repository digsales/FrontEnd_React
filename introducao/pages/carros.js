import React from "react";
import Pagina from "../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const carros = () => {
  const carros = [
    {
      marca: "Chevrolet",
      modelo: "Opala",
      ano: 1971,
      cor: "Verde",
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/11/chr5804-cr2-1-e1637378133536.jpg?quality=70&strip=info",
    },
    {
      marca: "Volkswagen",
      modelo: "Fusca",
      ano: 1945,
      cor: "Preto",
      foto: "https://media.gazetadopovo.com.br/2019/07/11130451/939736ae3457783d8d736d90b47ad623-full-660x372.jpeg",
    },
    {
      marca: "Volkswagen",
      modelo: "Brasília",
      ano: 1978,
      cor: "Branco",
      foto: "https://motortudo.com/wp-content/uploads/2021/01/VW-Brasilia-1978-carros-populares-antigos-1.jpg",
    },
    {
      marca: "Chevrolet",
      modelo: "Corvette",
      ano: 1975,
      cor: "Branco",
      foto: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/03q4/267415/corvette-chronology-1970s-feature-car-and-driver-photo-195961-s-original.jpg?fill=2:1&resize=1200:*",
    },
    {
      marca: "Chevrolet",
      modelo: "Camaro",
      ano: 1970,
      cor: "Azul",
      foto: "https://s2.glbimg.com/xsFlq3NqFH1rQmD7pXf1Dqz_PVw=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/S/g/2jr3iDThu3mZXAcB8d3A/2016-03-24-chevrolet-1970-camaro-rs-with-supercharged-lt4-concept-2015-1600x1200-wallpaper-01.png",
    },
    {
      marca: "Dodge",
      modelo: "Challenger",
      ano: 1969,
      cor: "Laranja",
      foto: "https://p.turbosquid.com/ts-thumb/f3/A14R57/9U8aRi5E/1thg/jpg/1600495112/600x600/fit_q87/b38a44cdbb7aaa986264342557576037adfea4e2/1thg.jpg",
    },
  ];
  return (
    <Pagina titulo="Carros">
      <Row className="mb-5">
        {carros.map((carro) => (
          <Col md={3} className="mb-4">
            <Card className="mb-3 col-12 row-3">
              <Card.Img
                variant="top"
                src={carro.foto}
                style={{ width: 259, height: 150 }}
              />
              <Card.Body>
                <Card.Title>
                  {carro.marca} - {carro.modelo}
                </Card.Title>
                <Card.Text>
                  Ano: <strong>{carro.ano}</strong>
                </Card.Text>
                <Button variant="primary">Detalhes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default carros;
