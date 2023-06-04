import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

const index = () => {
  const [cursos, setCursos] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/cursos").then((res) => {
      setCursos(res.data);
    });
  }

  function excluir(id) {
    axios.delete(`/api/cursos/${id}`);
    getAll();
  }

  return (
    <Pagina titulo="Cursos">
      <Link href={"/cursos/form"} className="btn btn-primary mb-2">
        Adicionar
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/cursos/${item.id}`}>
                  <BsPencilSquare className="me-2 text-primary" />
                </Link>
                <BsFillTrashFill
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
