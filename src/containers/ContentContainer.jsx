import React from 'react';
import styled from 'styled-components';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoList from '../components/Todo/TodoList';
import Calendar from '../components/Calendar/Calendar';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 33rem;
`;
const TodoWrapper = styled.div`
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

export default function ContentContainer({ todos, handleDelete, handleAdd }) {
  return (
    <Container>
      <TodoWrapper>
        <TodoHeader />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      </TodoWrapper>
      <Calendar />
    </Container>
  );
}
