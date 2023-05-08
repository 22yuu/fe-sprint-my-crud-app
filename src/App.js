import Header from './components/Header';
import ContentContainer from './containers/ContentContainer';
import TodoContainer from './containers/TodoContainer';
import { useEffect, useState } from 'react';

const filters = ['all', 'active', 'completed'];

function App() {
  const [todos, setTodos] = useState(() => getTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (target) => {
    const filtered = todos.filter((todo) => todo.id !== target);

    setTodos([...filtered]);
  };

  return (
    <>
      <TodoContainer>
        <Header />
        <ContentContainer
          todos={todos}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      </TodoContainer>
    </>
  );
}

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export default App;
