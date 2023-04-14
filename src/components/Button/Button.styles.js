import styled from 'styled-components';

export const StyledButton = styled.div`
  width: 120px;
  height: 50px;
  color: white;
  background-color: ${(props) =>
    props.backgroundColor === 'primary'
      ? 'blue'
      : props.backgroundColor === 'secondary'
      ? 'gray'
      : props.backgroundColor};
  border-radius: 5px;
  padding: 0.8em 0.5em;
  text-align: center;
  font-size: 16px;
`;
