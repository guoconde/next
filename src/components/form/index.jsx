import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

export default function FormClient({ title }) {
  return (
    <CenteredDiv>
      <Card
        style={{
          width: '600px',
          borderRadius: '8px',
        }}
      >
        <Card.Header className='card-header'>{title}</Card.Header>
        <Card.Body
          style={{
            padding: '15px',
          }}
        >
          <Form>
            <Form.Group className='div-picture'>
              <div>AVATAR</div>
              <Button className='btn-plus'>+</Button>
              <Button className='btn-minus'>-</Button>
            </Form.Group>

            <Form.Label>Nome</Form.Label>
            <Form.Control type='text' placeholder='Digite aqui...' />

            <Row>
              <Col xs md='100%'>
                <Form.Label>CPF</Form.Label>
                <Form.Control type='text' placeholder='000.000.000-00' />
              </Col>
              <Col xs md='100%'>
                <Form.Label>Nascimento</Form.Label>
                <Form.Control type='date' defaultValue='00/00/0000' />
              </Col>
            </Row>

            <Row>
              <Col xs md='100%'>
                <Form.Label>Saldo</Form.Label>
                <Form.Control type='number' placeholder='R$ 0.00' />
              </Col>
              <Col xs md='100%'>
                <Form.Label>Limite</Form.Label>
                <Form.Control type='number' placeholder='0.00' />
              </Col>
            </Row>

            <Row>
              <Col xs md='100%'>
                <Form.Label>Cep</Form.Label>
                <Form.Control type='text' placeholder='00.000-000' />
              </Col>
              <Col xs md='100%'>
                <Button className='btn-complete' type='button'>
                  COMPLETAR
                </Button>
              </Col>
            </Row>

            <Form.Label>Logradouro</Form.Label>
            <Form.Control type='text' placeholder='Endereço...' />

            <Row>
              <Col xs md='100%'>
                <Form.Label>Bairro</Form.Label>
                <Form.Control type='text' placeholder='Endereço...' />
              </Col>
              <Col xs md='100%'>
                <Form.Label>Número</Form.Label>
                <Form.Control type='text' placeholder='Endereço...' />
              </Col>
            </Row>

            <Row>
              <Col xs md='100%'>
                <Form.Label>Cidade</Form.Label>
                <Form.Control type='text' placeholder='Cidade' />
              </Col>
              <Col xs md='100%'>
                <Form.Label>UF</Form.Label>
                <Form.Control type='text' placeholder='UF' />
              </Col>
            </Row>

            <Button className='btn-green' type='submit'>
              SALVAR
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </CenteredDiv>
  );
}

const CenteredDiv = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: grey;

  .card-header {
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);
  }

  .div-picture {
    width: 120px;
    height: 120px;

    margin: 10px auto;

    border-radius: 65px;
    border: 1px solid #d8d8d8;

    color: #d8d8d8;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
  }

  Button.btn-plus {
    width: 30px;
    height: 30px;

    font-weight: bold;
    border-radius: 51%;
    background-color: #00ff00;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0;
    bottom: 0;
  }

  Button.btn-minus {
    width: 30px;
    height: 30px;

    font-weight: bold;
    border-radius: 51%;
    background-color: #ff0000;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    bottom: 0;
  }

  input {
    margin-bottom: 7px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);

    background-color: #d6dfe78b;
    color: gray;
  }

  button {
    width: 100%;
    margin-top: 20px;
    border: none;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
  }

  button.btn-green {
    background-color: #00b000;
  }

  button.btn-complete {
    margin-top: 31px;

    background-color: #60e2ff;

    color: white;
  }
`;
