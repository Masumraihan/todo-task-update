import { Input, List } from "antd";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

const TodoSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const todos = useAppSelector((state) => state.todo.todoList);

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Input
        placeholder='Search Todo'
        size='large'
        style={{ border: "#525ceb 1px solid" }}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        suffix={
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-search'
            >
              <circle cx='11' cy='11' r='8' />
              <path d='m21 21-4.3-4.3' />
            </svg>
          </>
        }
      />
      {filteredTodos.length && searchTerm ? (
        <List
          style={{ position: "absolute", width: "100%", backgroundColor: "white" }}
          size='small'
          bordered
          dataSource={filteredTodos}
          renderItem={(item) => (
            <List.Item key={item.id} className='list-item'>
              <p>{item.title}</p>
              <p style={{ color: "gray", fontSize: "12px" }}>{item.description}</p>
            </List.Item>
          )}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default TodoSearch;
