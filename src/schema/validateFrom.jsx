import * as yup from 'yup';

export const validade = yup.object({
  avatar_url: yup
    .string()
    .max(128, 'O link do avatar deve ter no máximo 128 caracteres')
    .url()
    .nullable(),
  nome: yup
    .string()
    .max(32, 'Nome deve ter no máximo 32 caracteres')
    .required('Nome é obrigatório'),
  cpf: yup
    .string()
    .max(18, 'CPF deve ter no máximo 18 caracteres')
    .required('CPF é obrigatório'),
  data_nascimento: yup.date().typeError('Data de nascimento inválida'),
  limite: yup.number().required('Limite é obrigatório'),
  saldo: yup.number().required('Saldo é obrigatório'),
  logradouro: yup
    .string()
    .max(32, 'Logradouro deve ter no máximo 32 caracteres')
    .required('Logradouro é obrigatório'),
  cep: yup
    .string()
    .max(10, 'CEP deve ter no máximo 10 caracteres')
    .required('CEP é obrigatório'),
  bairro: yup
    .string()
    .min(1)
    .max(32, 'Bairro deve ter no máximo 32 caracteres')
    .required('Bairro é obrigatório'),
  numero: yup
    .string()
    .max(6, 'Número deve ter no máximo 6 caracteres')
    .nullable(),
  cidade: yup
    .string()
    .max(32, 'Cidade deve ter no máximo 32 caracteres')
    .required('Cidade é obrigatório'),
  uf: yup
    .string()
    .min(2, 'UF deve ter no mínimo 2 caracteres')
    .max(2, 'UF deve ter no máximo 2 caracteres')
    .required('UF é obrigatório'),
});
