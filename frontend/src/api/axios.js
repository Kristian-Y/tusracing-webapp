import axios from 'axios';

// Create a reusable axios instance for backend calls
// Base URL can be configured via REACT_APP_API_URL in .env (e.g. REACT_APP_API_URL=http://localhost:5000/api)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  withCredentials: false, // include cookies if your backend uses them
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: response interceptor example (uncomment to handle auth globally)
// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     // handle global errors here, e.g., 401 -> redirect to login
//     return Promise.reject(err);
//   }
// );

export default api;
