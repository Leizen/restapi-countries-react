import axios from "axios";

export const api = axios.create({
  baseURL: "https://restcountries.com/v2/",
});

export const nameApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/name/"
});

export const border = axios.create({
  baseURL: "https://restcountries.com/v3.1/alpha?codes="
});

