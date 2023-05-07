import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itmes: center;
  text-align: center;
  margin-bottom: 2rem;

  & > ul {
    display: flex;
  }

  & > ul li {
    margin-left: 10px;
  }
`;

export default function TodoHeader() {
  return (
    <Header>
      <h2>Task</h2>
      <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </Header>
  );
}
