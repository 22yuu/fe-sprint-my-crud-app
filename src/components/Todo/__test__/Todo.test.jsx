import {
  render,
  cleanup,
  fireEvent,
  screen,
  getByRole,
  waitFor,
} from '@testing-library/react';
import Todo from '../Todo';

describe('<Todo />', () => {
  afterEach(cleanup);

  const mockTodo = {
    id: '1234',
    text: 'Test',
    status: 'active',
  };

  it('Todo를 완료하였으면 완료 표시를 할 수 있도록 체크박스가 있어야 합니다.', () => {
    const { container } = render(<Todo todo={mockTodo} />);

    const checkbox = container.querySelector('input[type="checkbox"]');

    expect(checkbox).not.toBe(undefined);
  });

  it('Todo를 완료한 후 체크박스를 클릭하여 Todo를 완료해야 합니다.', () => {
    const { container } = render(<Todo todo={mockTodo} />);

    const checkbox = container.querySelector('input[type="checkbox"]');

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('Todo를 작성하였다면 text로 렌더링해야 합니다.', () => {
    const { container } = render(<Todo todo={mockTodo} />);

    const span = container.querySelector('span');

    expect(span).not.toBe(undefined);
    expect(span).toHaveTextContent('Test');
  });

  it('Todo를 삭제할 수 있는 버튼이 존재해야 합니다.', () => {
    const onDelete = jest.fn();
    render(<Todo todo={mockTodo} onDelete={onDelete} />);

    const deleteBtn = screen.getByRole('button');

    expect(deleteBtn).not.toBe(undefined);
    expect(deleteBtn).toBeTruthy();
  });

  /* it('삭제 버튼 클릭 시 해당 Todo를 삭제할 수 있어야 합니다.', async () => {
    const onDelete = jest.fn();
    render(<Todo key={mockTodo.id} todo={mockTodo} onDelete={onDelete} />);

    const deleteBtn = screen.getByRole('button');

    expect(deleteBtn).not.toBe(undefined); // button 존재 확인

    // 삭제 버튼이 눌렀을 때 요소가 삭제되었음을 어떻게 알 수 있지~?
    // 삭제 기능은 TodoList에서 해야될 것 같은데잉....
    fireEvent.click(deleteBtn);

    await waitFor(() => {
      //   expect(deleteBtn).toBe(undefined);
      expect(deleteBtn).not.toBeInTheDocument();
    });
  }); */
});
