import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081',
});

const token = typeof window !== 'undefined' ? window.localStorage.getItem('token') : null;
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

api.interceptors.request.use(
  (config) => {
    const authToken = typeof window !== 'undefined' ? window.localStorage.getItem('token') : null;
    if (authToken && config.headers) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;