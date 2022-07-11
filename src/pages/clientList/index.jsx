import React, { useEffect, useState } from 'react';
import { Button, Card, Pagination, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CenteredDiv } from '../../components/table/style';
import { clientsFullList } from '../../services/clientServices';
import Client from './clients';

export default function ListClient() {
  const navigate = useNavigate();
  const [list, setList] = useState([1]);
  const [page, setPage] = useState(1);

  async function loadClients() {
    const promisse = await clientsFullList();
    const array = [];
    const pagination = Math.ceil(promisse.length / 10);

    for (let i = 1; i <= pagination; i++) {
      array.push(i);
    }
    setList(array);
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <CenteredDiv>
      <Card
        style={{
          boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.2)',
          minHeight: '880px',
          minWidth: '1000px',
        }}
      >
        <Card.Header
          style={{
            boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>LISTAGEM DE CLIENTES</span>
          <Button type='button' onClick={() => navigate('/create')}>
            ADICIONAR CLIENTE
          </Button>
        </Card.Header>
        <Card.Body>
          <Table
            borderless
            style={{
              borderCollapse: 'separate',
              borderSpacing: '0 15px',
              padding: 0,
              color: 'gray',
            }}
          >
            <thead>
              <tr>
                <th colSpan={2}>#</th>
                <th>NOME</th>
                <th>CPF</th>
                <th colSpan={3}>LIMITE</th>
              </tr>
            </thead>
            <Client page={page} />
          </Table>
        </Card.Body>
        <Card.Footer
          style={{
            backgroundColor: 'white',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '20px',
          }}
        >
          <PaginationStyled style={{ display: 'flex', gap: '5px' }}>
            {page <= 1 ? (
              ''
            ) : (
              <Pagination.Prev onClick={() => setPage(page - 1)} />
            )}
            {list.map((e) => (
              <Pagination.Item
                active={e === page}
                onClick={() => setPage(e)}
                key={e}
              >
                {e}
              </Pagination.Item>
            ))}
            {page === list.length ? (
              ''
            ) : (
              <Pagination.Next onClick={() => setPage(page + 1)} />
            )}
          </PaginationStyled>
        </Card.Footer>
      </Card>
    </CenteredDiv>
  );
}

const PaginationStyled = styled(Pagination)`
  .page-item .page-link {
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color: grey;
  }

  .page-item.active .page-link {
    background-color: lightgray;
    border: 1px solid #cbcbcb;
  }
`;
