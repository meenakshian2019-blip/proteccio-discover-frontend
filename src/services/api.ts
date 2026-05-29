import axios from "axios";

const BASE_URL = "https://proteccio-discover.onrender.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": "proteccio123",
  },
});