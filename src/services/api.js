import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081',
});

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

api.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('token');
    if (authToken && config.headers) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;