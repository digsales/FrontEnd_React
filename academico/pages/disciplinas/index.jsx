import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

const index = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/disciplinas").then((res) => {
      setDisciplinas(res.data);
    });
  }

  function excluir(id) {
    axios.delete(`/api/disciplinas/${id}`);
    getAll();
  }

  return (
    <Pagina titulo="Disciplinas">
      <Link href={"/disciplinas/form"} className="btn btn-primary mb-2">
        Adicionar
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/disciplinas/${item.id}`}>
                  <BsPencilSquare className="me-2 text-primary" />
                </Link>
                <BsFillTrashFill
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
