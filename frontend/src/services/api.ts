import axios from 'axios';

const baseURL = import.meta.env.PROD 
  ? '/api'  // In production, use relative path which will be handled by Vercel rewrites
  : 'http://localhost:3001'; // In development, use local backend

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api; 