import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 75rem;
  height: 40rem;
  border: 1px solid tomato;
  border-radius: 30px;
  //   background-color: rgb(221, 221, 221);
  background-color: rgba(133, 133, 133, 0.1);
  display: flex;
  flex-direction: column;
`;

export default function TodoContainer({ children }) {
  return <Container>{children}</Container>;
}
