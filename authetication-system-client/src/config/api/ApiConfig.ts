import axios from 'axios';
import { API_URL } from '../constants';

export const ApiIntance = axios.create({
  baseURL: API_URL, // Replace with your API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Enable cookies for cross-site requests
})
