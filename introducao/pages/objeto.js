import React from "react";
import { Card, Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

const objeto = () => {
  const carros = [
    {
      marca: "Honda",
      modelo: "Civic",
      ano: "2015",
      cor: "Branco",
      foto: "https://s3.ecompletocarros.dev/images/lojas/274/veiculos/99198/veiculoInfoVeiculoImagesMobile/vehicle_image_1651268857_cdc679bebbe282e170ab6fe0dca8445e.jpeg",
    },
    {
      marca: "Hyundai",
      modelo: "Rucson",
      ano: "2014",
      cor: "Preto",
      foto: "https://s3.ecompletocarros.dev/images/lojas/274/veiculos/99198/veiculoInfoVeiculoImagesMobile/vehicle_image_1651268857_cdc679bebbe282e170ab6fe0dca8445e.jpeg",
    },
    {
      marca: "Chevrolet",
      modelo: "Celta",
      ano: "2012",
      cor: "Vermelho",
      foto: "https://s3.ecompletocarros.dev/images/lojas/274/veiculos/99198/veiculoInfoVeiculoImagesMobile/vehicle_image_1651268857_cdc679bebbe282e170ab6fe0dca8445e.jpeg",
    },
    {
      marca: "Fiat",
      modelo: "Tampra",
      ano: "2011",
      cor: "Azul",
      foto: "https://s3.ecompletocarros.dev/images/lojas/274/veiculos/99198/veiculoInfoVeiculoImagesMobile/vehicle_image_1651268857_cdc679bebbe282e170ab6fe0dca8445e.jpeg",
    },
    {
      marca: "Fiat",
      modelo: "Marea",
      ano: "2010",
      cor: "Verde",
      foto: "https://s3.ecompletocarros.dev/images/lojas/274/veiculos/99198/veiculoInfoVeiculoImagesMobile/vehicle_image_1651268857_cdc679bebbe282e170ab6fe0dca8445e.jpeg",
    },
    {
      marca: "Fiat",
      modelo: "Doblo",
      ano: "2015",
      cor: "Amarelo",
      foto: "https://s3.ecompletocarros.dev/images/lojas/274/veiculos/99198/veiculoInfoVeiculoImagesMobile/vehicle_image_1651268857_cdc679bebbe282e170ab6fe0dca8445e.jpeg",
    },
  ];
  return (
    <Pagina titulo="Objetos">
      <Container>
        {carros.map((item) => (
          <Card>
            <h1>
              {item.marca} - {item.modelo}
            </h1>
            <p>Ano: {item.ano}</p>
            <p>Cor: {item.cor}</p>
            <img style={{ width: "200px" }} src={item.foto} />
          </Card>
        ))}
      </Container>
    </Pagina>
  );
};

export default objeto;
