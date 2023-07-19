import styled from 'styled-components';

export const ContainerItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 5px;

  p {
    margin: 0;
  }
  button {
    width: fit-content;
    padding: 5px;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
    border: 1px;
  }
`;
