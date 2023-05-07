import React from "react";
import styled from "styled-components";

const TodoItem = styled.li`
  width: 100%;
  border: 1px solid #222;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

export default function Todo({ todo }) {
  return (
    <TodoItem key={todo.id}>
      <input type="checkbox" />
      <span>{todo.text}</span>
      <button>삭제하기</button>
    </TodoItem>
  );
}
