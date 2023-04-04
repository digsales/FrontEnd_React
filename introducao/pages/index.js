import Cabecalho from "../components/Cabecalho";
import { Button, Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function Home() {
  return (
    <>
      <Pagina titulo="Página Inicial">
        <Container>
          <h1>Hello World</h1>
          <p>Parágrafo 1</p>
          <p>Parágrafo 2</p>
          <p>Parágrafo 3</p>
          <p>Parágrafo 4</p>
        </Container>
      </Pagina>
    </>
  );
}
