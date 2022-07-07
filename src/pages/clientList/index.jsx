import React from 'react';
import { Button, Card, Col, Pagination, Row, Table } from 'react-bootstrap';
import styled from 'styled-components';
import { CenteredDiv } from '../../components/table/style';
import Client from './clients';

export default function ListClient() {
  const list = [1, 2, 3, 4];

  return (
    <CenteredDiv>
      <Card style={{ boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.2)' }}>
        <Card.Header
          style={{
            boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>LISTAGEM DE CLIENTES</span>
          <Button>ADICIONAR CLIENTE</Button>
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
            <Client />
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
            <Pagination.Prev />
            {list.map((e) => (
              <Pagination.Item>{e}</Pagination.Item>
            ))}
            <Pagination.Next />
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
`;
