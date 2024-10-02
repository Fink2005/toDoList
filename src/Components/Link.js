import styled from "styled-components";
import React from "react";

export const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

export const StyleLink = styled(Link)`
  background-color: red;
  font-weight: bold;
  color: #fff !important;
`;
