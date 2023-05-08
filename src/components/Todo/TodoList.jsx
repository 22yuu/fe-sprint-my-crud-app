import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

export default function TodoList({ todos, handleDelete, handleAdd }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}
