import axios from 'axios';

export const userApiClient = axios.create({
  baseURL: 'http://localhost:3001/users',
});

export async function getUserDataById(id: number) {
  return (await userApiClient.get(`/${id}`)).data;
}

export async function getUsers(): Promise<any[]> {
  return (await userApiClient.get('')).data;
}
