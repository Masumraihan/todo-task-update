import { Button, Flex } from "antd";
import { ListFilter } from "lucide-react";
import { todoStatus } from "../constant";
import { useAppSelector } from "../redux/hooks";
import TodoRow from "./TodoRow";

const TodoLists = () => {
  const todos = useAppSelector((state) => state.todo.todoList);
  const completedTodos = todos.filter((todo) => todo.status === todoStatus.completed);
  return (
    <div style={{ maxWidth: "1200px", margin: "10px auto", width: "100%" }}>
      {todos.length === 0 ? (
        <h2 style={{ textAlign: "center", color: "gray" }}>Empty</h2>
      ) : (
        <div>
          <Flex align='center' gap={20} style={{ marginBottom: "10px" }}>
            <p className='todo-count'>Total Task : {todos.length}</p>
            <p className='todo-count'>Total Completed Task : {completedTodos.length}</p>
            <Button className='btn' style={{ marginLeft: "auto" }}>
              Filter <ListFilter size={20} />
            </Button>
          </Flex>
          {todos.map((todo) => (
            <TodoRow todo={todo} key={todo.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoLists;
