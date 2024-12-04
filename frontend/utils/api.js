import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const login = (formData) => API.post('/auth/login', formData);
