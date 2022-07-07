import React from 'react';
import { Button } from 'react-bootstrap';
import { RowDiv } from '../../components/table/style';

export default function Client() {
  const clientLi = [
    {
      id: 1,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      limite: 0,
    },
    {
      id: 2,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      limite: 0,
    },
    {
      id: 3,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      limite: 0,
    },
    {
      id: 4,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      limite: 0,
    },
    {
      id: 5,
      avatar: 'avatar',
      nome: 'john doe da silva',
      cpf: '000.000.000-33',
      limite: 0,
    },
  ];

  return (
    <tbody>
      {clientLi.map((e) => (
        <RowDiv>
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
