import Header from "./components/Header";
import ContentContainer from "./containers/ContentContainer";
import TodoContainer from "./containers/TodoContainer";
import TodoList from "./components/Todo/TodoList";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <>
      <TodoContainer>
        <Header />
        <ContentContainer>
          <TodoList />
          <Calendar />
        </ContentContainer>
      </TodoContainer>
    </>
  );
}

export default App;
