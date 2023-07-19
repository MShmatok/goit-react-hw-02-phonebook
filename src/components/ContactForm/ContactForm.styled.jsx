import styled from 'styled-components';

export const ContainerForma = styled.form`
  width: 100%;
  padding: 25px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 25px;

  button {
    width: fit-content;
    padding: 10px;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
    border: 1px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  input {
    width: 50%;
  }
`;
