import { cleanup, fireEvent, render } from "@testing-library/react";
import AddTodo from "../AddTodo";
import { v4 } from "uuid";
// import { v4 as uuidv4 } from "uuid";

afterEach(cleanup); // 매 테스트가 끝날 때 자동으로 컴포넌트를 언마운트를 해줌

describe("<AddTodo />", () => {
  it("has Todo input and a button", () => {
    const { getByText, getByPlaceholderText } = render(<AddTodo />);
    getByPlaceholderText("Type Todo...!"); // input 이 있는지 확인
    getByText("Add"); // button이 있는지 확인
  });

  it("Change Input test", () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText("Type Todo...!");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("Add Todo Test When Add button was clicked", () => {
    const onAdd = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <AddTodo onAdd={onAdd} />
    );
    const input = getByPlaceholderText("Type Todo...!");
    const button = getByText("Add");
    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    // 버튼 클릭
    fireEvent.click(button);
    // expect(onAdd).toBeCalledWith("TDD 배우기"); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함

    const todo = {
      id: expect.any(String),
      text: "TDD 배우기",
      status: "active",
    };

    expect(onAdd).toBeCalledWith(todo);
    expect(input).toHaveAttribute("value", ""); // input이 비워져야함
  });
});
