import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RowDiv, StyledMiniAvatar } from '../../components/table/style';
import { clients, deleteClient } from '../../services/clientServices';

export default function Client({ page }) {
  const navigate = useNavigate();
  const [clientList, setClientList] = useState([]);

  async function loadClients() {
    const promisse = await clients(page);
    setClientList(promisse);
  }

  useEffect(() => {
    loadClients();
  }, [page]);

  async function handleDelete(id) {
    const confirmDelete = confirm('Você realmente quer excluir este cliente?');

    if (confirmDelete) {
      await deleteClient(id);
      await loadClients();
      window.location.reload();
    }
  }

  if (clientList.length === 0) return <h1>Loading...</h1>;

  return (
    <tbody>
      {clientList.map((e) => (
        <RowDiv key={e.id}>
          <td>{e.id.toString().padStart(3, 0)}</td>
          <td>
            <StyledMiniAvatar
              style={{
                backgroundImage: `url(${e.avatar_url})`,
                backgroundSize: 'contain',
              }}
            />
          </td>
          <td>{e.nome.toLocaleUpperCase()}</td>
          <td className='td-spacing'>{e.cpf}</td>
          <td>
            R${' '}
            {Number(e.limite).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
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
              onClick={() => handleDelete(e.id)}
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
