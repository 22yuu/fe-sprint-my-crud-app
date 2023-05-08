import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const TodoInput = styled.div`
  width: 100%;

  & > form {
    width: 100%;
    display: flex;
    padding: 8px;
    box-sizing: border-box;
  }

  & > form > input {
    flex: 1 0 auto;
    font-size: 1.4rem;
    padding: 0.7rem 1rem;
    border: none;
    outline: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  & > form > button {
    cursor: pointer;
    background-color: #222;
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;
    padding: 0 2rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <TodoInput>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Todo...!"
          value={text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </TodoInput>
  );
}
