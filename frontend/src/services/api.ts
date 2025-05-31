import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
  ? '/api'  // In production, use relative path which will be handled by Vercel rewrites
  : 'http://localhost:3001'; // In development, use local backend

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api; 