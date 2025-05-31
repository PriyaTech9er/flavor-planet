import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Change to your backend URL when deployed
});

export default api; 