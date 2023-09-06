import axios from 'axios';

export const productApiClient = axios.create({
  baseURL: 'http://localhost:3002/orders',
});

export async function getOrders() {
  return (await productApiClient.get('')).data;
}
