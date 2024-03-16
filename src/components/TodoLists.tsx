import { Button, Flex, MenuProps } from "antd";
import { ListFilter } from "lucide-react";
import { todoPriority, todoStatus } from "../constant";
import { useAppSelector } from "../redux/hooks";
import TodoRow from "./TodoRow";
import { useState } from "react";
import TodoDropDown from "./TodoDropDown";
import TodoDetails from "./TodoDetails";

const TodoLists = () => {
  const [filterBy, setFilterBy] = useState<string | null>(null);
  const todos = useAppSelector((state) => state.todo.todoList);
  const completedTodos = todos.filter((todo) => todo.status === todoStatus.completed);

  const showDetails = useAppSelector((state) => state.todoDetails.showDetails);
  const filteredTodos = (filterBy: string | null) => {
    if (!filterBy) {
      return todos;
    } else {
      return todos.filter((todo) => todo.priority === filterBy || todo.status === filterBy);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>All</span>,
      onClick: () => {
        setFilterBy(null);
      },
    },
    {
      key: "2",
      label: <span>Completed</span>,
      onClick: () => {
        setFilterBy(todoStatus.completed);
      },
    },
    {
      key: "3",
      label: <span>Incomplete</span>,
      onClick: () => {
        setFilterBy(todoStatus.incomplete);
      },
    },
    {
      key: "4",
      label: <span>High</span>,
      onClick: () => {
        setFilterBy(todoPriority.high);
      },
    },
    {
      key: "5",
      label: <span>Low</span>,
      onClick: () => {
        setFilterBy(todoPriority.low);
      },
    },
    {
      key: "6",
      label: <span>Medium</span>,
      onClick: () => {
        setFilterBy(todoPriority.medium);
      },
    },
  ];

  return (
    <>
      {showDetails ? (
        <TodoDetails />
      ) : (
        <div style={{ maxWidth: "1200px", margin: "10px auto", width: "100%" }}>
          {todos.length === 0 ? (
            <h2 style={{ textAlign: "center", color: "gray" }}>Empty</h2>
          ) : (
            <div>
              <Flex
                align='center'
                gap={20}
                className='todo-count-wrapper'
                style={{ marginBottom: "10px" }}
              >
                <p className='todo-count'>Total Task : {todos.length}</p>
                <p className='todo-count'>Total Completed Task : {completedTodos.length}</p>
                <TodoDropDown items={items}>
                  <Button className='btn' style={{ marginLeft: "auto" }}>
                    {filterBy ? filterBy : "Filter By"} <ListFilter size={20} />
                  </Button>
                </TodoDropDown>
              </Flex>
              {filteredTodos(filterBy).map((todo) => (
                <TodoRow todo={todo} key={todo.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TodoLists;
