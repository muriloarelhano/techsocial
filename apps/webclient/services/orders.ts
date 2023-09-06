import axios from 'axios';
import { CreateOrderProps } from '../types/order';

export const productApiClient = axios.create({
  baseURL: 'http://localhost:3002/orders',
});

export async function getOrders() {
  return (await productApiClient.get('')).data;
}

export async function createOrder(payload: CreateOrderProps) {
  return (await productApiClient.post('', payload)).data;
}
