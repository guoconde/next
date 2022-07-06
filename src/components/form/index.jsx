import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { CenteredDiv } from './style';

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
