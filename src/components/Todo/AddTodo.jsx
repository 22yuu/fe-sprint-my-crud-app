import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const TodoInput = styled.div`
  width: 100%;

  border: 1px solid #222;
`;

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
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
