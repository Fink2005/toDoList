import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  color: ${(props) => props.theme.color};
  font-size: 17px;
  padding: 0.25em 0.5em;
  transition: all 0.5s;
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.borderButton};

  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: ${(props) => props.theme.hoverBgColor};
    border: ${(props) => props.theme.borderColor};
  }
`;
