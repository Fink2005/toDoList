import styled from "styled-components";

export const Table = styled.table`
  color: ${(props) => props.theme.color};
  width: 100%;
  max-width: 100%;
  margin-bottom: 1 rem;
  background-color: transparent;
  border-spacing: 2px;
  border-color: ${(props) => props.theme.color};
`;

export const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border: 2px solid ${(props) => props.theme.color};
`;

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border: 1px solid ${(props) => props.theme.color};
`;

export const Td = styled.td`
  display: table-row;
  padding: 75rem;
  vertical-align: top;
  border: 1px solid ${(props) => props.theme.color};
`;

export const Th = styled.th`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  text-align: inherit;
  border-top: 1px solid ${(props) => props.theme.color};
  padding: 0.75rem;
  vertical-align: center;
  // border: 1px solid ${(props) => props.color};
`;
