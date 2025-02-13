import axios from 'axios';
import { ApiPrefix } from '../constants';

export const ApiIntance = axios.create({
  baseURL: `http://localhost:3001/${ApiPrefix}`, // Replace with your API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Enable cookies for cross-site requests
})
