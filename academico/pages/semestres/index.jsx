import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

const index = () => {
  const [semestres, setSemestres] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/semestres").then((res) => {
      setSemestres(res.data);
    });
  }

  function excluir(id) {
    axios.delete(`/api/semestres/${id}`);
    getAll();
  }

  return (
    <Pagina titulo="Semestres">
      <Link href={"/semestres/form"} className="btn btn-primary mb-2 ">
        Adicionar
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Data Início</th>
            <th>Data Fim</th>
          </tr>
        </thead>
        <tbody>
          {semestres.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/semestres/${item.id}`}>
                  <BsPencilSquare className="me-2 text-primary" />
                </Link>
                <BsFillTrashFill
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.dataInicio}</td>
              <td>{item.dataFim}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
