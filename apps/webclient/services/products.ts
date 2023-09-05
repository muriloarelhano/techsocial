import axios from 'axios';

export const productApiClient = axios.create({
  baseURL: 'http://localhost:3002/products',
});

export function getProducts() {}
