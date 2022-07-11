/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

export const CenteredDiv = styled.div`
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

    display: flex;
    justify-content: space-between;
    align-items: center;
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

    background-size: contain;
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
