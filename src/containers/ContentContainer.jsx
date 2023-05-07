import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 33rem;
`;
export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}
