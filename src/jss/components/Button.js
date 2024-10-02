import styled from "styled-components";

export const Button = styled.button`
  color: red;
  font-size: ${(props) => (props.fontSize ? "30px" : "10px")};
  background-color: ${(props) => (props.bgNe ? "blue" : "white")};
  &:hover {
    color: white;
    transition: all 1s;
  }
  &.button-style {
    padding: 20px;
  }
`;

export const buttonNgu = styled(Button)`
  background-color: yellow;
  border-radius: 25px;
  color: black;
`;
