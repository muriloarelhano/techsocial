import axios from 'axios';
import { CreateOrderProps } from '../types/order';

export const productApiClient = axios.create({
  baseURL: 'http://localhost:3002/orders',
});

export async function getOrders() {
  return (await productApiClient.get('')).data;
}

export async function getOrdersByUser(userId: string) {
  return (await productApiClient.get(`/user/${userId}`)).data;
}

export async function createOrder(payload: CreateOrderProps) {
  return (await productApiClient.post('', payload)).data;
}
