import * as yup from 'yup';

export const validade = yup.object({
  avatar_url: yup.string().url().nullable(),
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  data_nascimento: yup.date('Data de nascimento inválida'),
  limite: yup.number().required('Limite é obrigatório'),
  saldo: yup.number().required('Saldo é obrigatório'),
  logradouro: yup.string().required('Logradouro é obrigatório'),
  cep: yup.string().required('CEP é obrigatório'),
  bairro: yup.string().min(1).required('Bairro é obrigatório'),
  numero: yup.string().nullable(),
  cidade: yup.string().required('Cidade é obrigatório'),
  uf: yup.string().required('UF é obrigatório'),
});
