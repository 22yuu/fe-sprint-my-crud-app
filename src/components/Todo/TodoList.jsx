import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoHeader from "./TodoHeader";
import Todo from "./Todo";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #222;
  margin: 0 1rem;
  padding: 0 1rem;

  & > ul {
    height: 70%;
  }
`;

const TodoInput = styled.div`
  width: 100%;

  border: 1px solid #222;
`;

export default function TodoList() {
  const initialValue = [
    {
      id: uuidv4(),
      text: "밥먹기",
      state: "active",
    },
    {
      id: uuidv4(),
      text: "공부하기",
      state: "active",
    },
    {
      id: uuidv4(),
      text: "코딩하기",
      state: "active",
    },
  ];
  const [todos, setTodos] = useState(initialValue);

  return (
    <Wrapper>
      <TodoHeader />
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
      <TodoInput>
        <input type="text" />
        <button>Add</button>
      </TodoInput>
    </Wrapper>
  );
}
