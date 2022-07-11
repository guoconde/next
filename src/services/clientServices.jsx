import api from './api';

export async function clients(page) {
  const response = await api.get(`/clients/${page}`);

  return response.data;
}

export async function clientsFullList() {
  const response = await api.get('/clients');

  return response.data;
}

export async function insertClient(data) {
  const response = await api.post('/insertClient', data);

  return response.data;
}

export async function updateClient(data, id) {
  const response = await api.put(`/edit/${id}`, data);

  return response.data;
}

export async function deleteClient(id) {
  const response = await api.delete(`/delete/${id}`);

  return response.data;
}
