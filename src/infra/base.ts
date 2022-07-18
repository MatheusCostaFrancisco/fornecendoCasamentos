import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const apiIBGE = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

export default api;
