import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081', // Verifique se o seu Java está na 8081 ou 8080
});

export default api;