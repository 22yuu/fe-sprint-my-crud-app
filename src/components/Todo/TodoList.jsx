import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoHeader from "./TodoHeader";
import Todo from "./Todo";
import styled from "styled-components";
import AddTodo from "./AddTodo";

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

export default function TodoList() {
  const initialValue = [
    {
      id: uuidv4(),
      text: "밥먹기",
      status: "active",
    },
    {
      id: uuidv4(),
      text: "공부하기",
      status: "active",
    },
    {
      id: uuidv4(),
      text: "코딩하기",
      status: "active",
    },
  ];
  const [todos, setTodos] = useState(initialValue);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <Wrapper>
      <TodoHeader />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </Wrapper>
  );
}
