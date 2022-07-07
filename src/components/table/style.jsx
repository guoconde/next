import styled from 'styled-components';

export const CenteredDiv = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: grey;
`;

export const RowDiv = styled.tr`
  border-radius: 10px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);

  margin-bottom: 10px;

  > td.td-spacing {
    width: 300px;
  }

  color: gray;
`;
