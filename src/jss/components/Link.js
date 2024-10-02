import styled from "styled-components";
import React from "react";
// export const Link = (props) => {
//     return <a className="props.className">

//     </a>
// }
// let {className, children} = props

export const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

export const StyleLink = styled(Link)`
  color: green;
  font-weight: bold;
`;
