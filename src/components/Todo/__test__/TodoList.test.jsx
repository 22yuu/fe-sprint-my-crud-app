import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { resq$, resq$$ } from 'resq';
import TodoList from '../TodoList';

describe('<TodoList />', () => {
  afterAll(() => {
    cleanup();
  });

  const mockTodos = [
    {
      id: '1234',
      text: '밥먹기',
      status: 'completed',
    },
    {
      id: '5678',
      text: '공부하기',
      status: 'active',
    },
    {
      id: '1544',
      text: '코딩하기',
      status: 'active',
    },
  ];

  it('Todo가 존재할 때 Todo 컴포너트가 정상적으로 렌더링되어야 합니다.', () => {
    const deletFn = jest.fn();
    const addFn = jest.fn();

    render(
      <TodoList todos={mockTodos} handleDelete={deletFn} handleAdd={addFn} />
    );

    /* const Todos = resq$$('Todo', screen);
    console.log(Todos.length);
    expect(Todos.length).toBe(3); */

    screen.getByText(mockTodos[0].text);
    screen.getByText(mockTodos[1].text);
    screen.getByText(mockTodos[2].text);
  });

  it('삭제 버튼을 눌렀을 때 해당 todo는 삭제될 수 있어야 합니다.', () => {
    const deletFn = jest.fn();
    const addFn = jest.fn();

    render(
      <TodoList todos={mockTodos} handleDelete={deletFn} handleAdd={addFn} />
    );

    fireEvent.click(screen.getAllByTestId('delete-todo')[0]);
    expect(deletFn).toBeCalledWith(mockTodos[0].id);
  });
});
