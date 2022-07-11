import axios from 'axios';

export async function getInfoByCep(value) {
  const response = await axios.get(`http://viacep.com.br/ws/${value}/json/`);

  return response.data;
}
