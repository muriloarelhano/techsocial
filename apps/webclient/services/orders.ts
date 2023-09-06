import axios from 'axios';
import { OrderProps } from '../types/order';

export const productApiClient = axios.create({
  baseURL: 'http://localhost:3002/orders',
});

export async function getOrders() {
  return (await productApiClient.get('')).data;
}
export async function getOrderById(id: string): Promise<OrderProps> {
  return (await productApiClient.get(`/${id}`)).data;
}

export async function getOrdersByUser(userId: string) {
  return (await productApiClient.get(`/user/${userId}`)).data;
}

export async function createOrder(payload: OrderProps) {
  return (await productApiClient.post('', payload)).data;
}

export async function updateOrder(payload: OrderProps) {
  return (await productApiClient.patch(`/${payload.id}`, payload)).data;
}

export async function deleteOrder(id: string) {
  return (await productApiClient.delete(`/${id}`)).data;
}
