import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RowDiv } from '../../components/table/style';

export default function Client() {
  const navigate = useNavigate();
  const clientLi = [
    {
      id: 1,
      avatar_url: 'https://www.npmjs.com/package/react-toastify',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      data_nascimento: '2020-04-10',
      limite: 0,
      saldo: 12,
      logradouro: 'rua a',
      cep: '74.305-290',
      bairro: 'bairro aqui',
      numero: '12',
      cidade: 'city',
      uf: 'CT',
    },
    {
      id: 2,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      nascimento: new Date(1995, 3, 23),
      limite: 0,
      saldo: 12,
      logradouro: 'rua a',
      cep: '74.305-290',
      bairro: 'bairro aqui',
      numero: '12',
      cidade: 'city',
      uf: 'CT',
    },
    {
      id: 3,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      nascimento: new Date(1995, 3, 23),
      limite: 0,
      saldo: 12,
      logradouro: 'rua a',
      cep: '74.305-290',
      bairro: 'bairro aqui',
      numero: '12',
      cidade: 'city',
      uf: 'CT',
    },
    {
      id: 4,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      nascimento: new Date(1995, 3, 23),
      limite: 0,
      saldo: 12,
      logradouro: 'rua a',
      cep: '74.305-290',
      bairro: 'bairro aqui',
      numero: '12',
      cidade: 'city',
      uf: 'CT',
    },
    {
      id: 5,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      nascimento: new Date(1995, 3, 23),
      limite: 0,
      saldo: 12,
      logradouro: 'rua a',
      cep: '74.305-290',
      bairro: 'bairro aqui',
      numero: '12',
      cidade: 'city',
      uf: 'CT',
    },
  ];

  return (
    <tbody>
      {clientLi.map((e) => (
        <RowDiv key={e.id}>
          <td>{e.id.toString().padStart(3, 0)}</td>
          <td>{e.avatar}</td>
          <td>{e.nome.toLocaleUpperCase()}</td>
          <td className='td-spacing'>{e.cpf}</td>
          <td>
            R$ {e.limite.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </td>
          <td>
            <Button
              style={{
                color: 'white',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
              }}
              variant='warning'
              onClick={() => navigate('/edit', { state: e })}
            >
              EDITAR
            </Button>
          </td>
          <td>
            <Button
              style={{
                backgroundColor: 'red',
                border: 'none',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              EXCLUIR
            </Button>
          </td>
        </RowDiv>
      ))}
    </tbody>
  );
}
