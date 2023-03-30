import Cabecalho from "../components/Cabecalho";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <h1>Página Inicial</h1>
      <Container>
        <div>Arroz</div>
      </Container>
    </>
  );
}
