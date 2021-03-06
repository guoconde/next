/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { UploadButton } from 'react-uploader';
import { Uploader } from 'uploader';
import InputMask from 'react-input-mask';
import dayjs from 'dayjs';
import { CenteredDiv } from './style';
import { getInfoByCep } from '../../services/viaCepApi';
import { validade } from '../../schema/validateFrom';
import styledToastify from '../alert';
import { insertClient, updateClient } from '../../services/clientServices';

export default function FormClient({ title }) {
  const navigate = useNavigate();
  const client = useLocation().state;
  const imgDefault =
    'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-black-default-avatar-image_2237212.jpg';

  const uploader = new Uploader({
    apiKey: 'free',
  });

  const [nome, setNome] = useState(client ? client.nome : '');
  const [cpf, setCpf] = useState(client ? client.cpf : '');
  const [dataNascimento, setDataNascimento] = useState(
    client ? dayjs(client.data_nascimento).format('YYYY-MM-DD') : ''
  );
  const [saldo, setSaldo] = useState(client ? Number(client.saldo) : '');
  const [limite, setLimite] = useState(client ? Number(client.limite) : '');
  const [cep, setCep] = useState(client ? client.cep : '');
  const [logradouro, setLogradouro] = useState(client ? client.logradouro : '');
  const [bairro, setBairro] = useState(client ? client.bairro : '');
  const [numero, setNumero] = useState(client ? client.numero : null);
  const [cidade, setCidade] = useState(client ? client.cidade : '');
  const [uf, setUf] = useState(client ? client.uf : '');
  const [avatar, setAvatar] = useState(client ? client.avatar_url : imgDefault);

  async function handleCEP(value) {
    try {
      const REGEX = /\D/g;
      const valueFiltered = value.replace(REGEX, '');

      const data = await getInfoByCep(valueFiltered);

      setBairro(data.bairro);
      setLogradouro(data.logradouro);
      setCidade(data.localidade);
      setUf(data.uf);
    } catch (error) {
      styledToastify('CEP inv??lido', true);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = {
        avatar_url: avatar,
        nome,
        cpf,
        data_nascimento: dataNascimento,
        limite: Number(limite),
        saldo: Number(saldo),
        logradouro,
        cep,
        bairro,
        numero,
        cidade,
        uf,
      };

      await validade.validate(data);

      if (title === 'EDI????O DE CLIENTE') {
        styledToastify('Edi????o feita com sucesso');
        await updateClient(data, client.id);
      } else {
        styledToastify('Cliente cadastrado com sucesso');
        await insertClient(data);
      }

      navigate('/');
    } catch (error) {
      styledToastify(error.errors[0], true);
    }
  }

  useEffect(() => {}, [bairro]);

  return (
    <CenteredDiv>
      <Card
        style={{
          width: '600px',
          borderRadius: '8px',
        }}
      >
        <Card.Header>
          <span>{title}</span>
          <Button
            style={{ width: 'auto', margin: 0 }}
            type='button'
            onClick={() => navigate('/')}
          >
            TABELA DE CLIENTES
          </Button>
        </Card.Header>
        <Card.Body
          style={{
            padding: '15px',
          }}
        >
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group
              style={{ backgroundImage: `url(${avatar})` }}
              className='div-picture'
            >
              <UploadButton
                uploader={uploader}
                options={{
                  multi: false,
                  mimeTypes: ['image/jpeg', 'image/png'],
                }}
                onComplete={(files) => {
                  setAvatar(files[0].fileUrl);
                }}
              >
                {({ onClick }) => (
                  <Button type='button' onClick={onClick} className='btn-plus'>
                    +
                  </Button>
                )}
              </UploadButton>
              <Button
                onClick={() => setAvatar(imgDefault)}
                className='btn-minus'
              >
                -
              </Button>
            </Form.Group>

            <Form.Label>Nome</Form.Label>
            <Form.Control
              type='text'
              value={nome}
              defaultValue={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder='Digite aqui...'
            />

            <Row>
              <Col xs md='100%'>
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  as={InputMask}
                  mask='999.999.999-99'
                  type='text'
                  value={cpf}
                  defaultValue={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder='000.000.000-00'
                />
              </Col>
              <Col xs md='100%'>
                <Form.Label>Nascimento</Form.Label>
                <Form.Control
                  type='date'
                  value={dataNascimento}
                  defaultValue={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col xs md='100%'>
                <Form.Label>Saldo</Form.Label>
                <Form.Control
                  type='number'
                  min='0.00'
                  step='0.01'
                  value={saldo}
                  defaultValue={saldo}
                  onChange={(e) => setSaldo(e.target.value)}
                  placeholder='R$ 0,00'
                />
              </Col>
              <Col xs md='100%'>
                <Form.Label>Limite</Form.Label>
                <Form.Control
                  type='number'
                  min='0.00'
                  step='0.01'
                  value={limite}
                  defaultValue={limite}
                  onChange={(e) => setLimite(e.target.value)}
                  placeholder='R$ 0,00'
                />
              </Col>
            </Row>

            <Row>
              <Col xs md='100%'>
                <Form.Label>Cep</Form.Label>
                <Form.Control
                  as={InputMask}
                  mask='99.999-999'
                  type='text'
                  onChange={(e) => setCep(e.target.value)}
                  defaultValue={cep}
                  placeholder='00.000-000'
                />
              </Col>
              <Col xs md='100%'>
                <Button
                  onClick={() => handleCEP(cep)}
                  className='btn-complete'
                  type='button'
                >
                  COMPLETAR
                </Button>
              </Col>
            </Row>

            <Form.Label>Logradouro</Form.Label>
            <Form.Control
              type='text'
              disabled
              value={logradouro}
              defaultValue={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              placeholder='Endere??o...'
            />

            <Row>
              <Col xs md='100%'>
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  type='text'
                  disabled
                  value={bairro}
                  defaultValue={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder='Endere??o...'
                />
              </Col>
              <Col xs md='100%'>
                <Form.Label>N??mero</Form.Label>
                <Form.Control
                  type='text'
                  value={numero}
                  defaultValue={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder='Endere??o...'
                />
              </Col>
            </Row>

            <Row>
              <Col xs md='100%'>
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  type='text'
                  value={cidade}
                  disabled
                  defaultValue={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder='Cidade'
                />
              </Col>
              <Col xs md='100%'>
                <Form.Label>UF</Form.Label>
                <Form.Control
                  type='text'
                  disabled
                  minLength='2'
                  maxLength='2'
                  value={uf}
                  defaultValue={uf}
                  onChange={(e) => setUf(e.target.value)}
                  placeholder='UF'
                />
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
