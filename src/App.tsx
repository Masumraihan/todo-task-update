import { Flex } from "antd";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <Flex vertical align='center' className='todo-container'>
      <TodoHeader />
      <TodoLists />
    </Flex>
  );
}

export default App;
