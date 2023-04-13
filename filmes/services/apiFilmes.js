import axios from "axios";

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDFkZTg3NWJhMzhlOWI1OGViODBkY2YxZGI2NTE0OSIsInN1YiI6IjY0MzczOTgxOTQ1ZDM2MDBkZmM4OWI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PK5PfKuzY57aJaMXiln4p-qRPqmaxu1GtS09Y1m2_o4",
  },
});

export default apiFilmes;
