import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';

const TodoItem = styled.li`
  width: 100%;
  border: 1px solid #222;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;

  &.completed {
    color: #ddd;
    text-decoration: line-through;
  }

  & > button {
    display: flex;
    font-size: 1.2rem;
    cursor: pointer;
    background: #ddd;
    border-radius: 50%;
    padding: 8px;
  }

  & > button:hover {
    transform: scale(1.2);
  }
`;

export default function Todo({ todo, onDelete }) {
  const [checked, setChecked] = useState(
    todo.status === 'completed' ? true : false
  );

  const onHandleDelete = () => {
    onDelete(todo.id);
  };

  const onHandleChangeChecked = () => {
    setChecked(!checked);
  };

  return (
    <TodoItem key={todo.id} className={checked ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onHandleChangeChecked}
      />
      <span>{todo.text}</span>
      <button onClick={onHandleDelete} data-testid="delete-todo">
        {<BsTrash />}
      </button>
    </TodoItem>
  );
}
