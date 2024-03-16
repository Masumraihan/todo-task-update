import { MenuProps } from "antd";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { todoPriority, todoStatus } from "../constant";
import { TTodo } from "../types";
import TodoDropDown from "./TodoDropDown";
import UpdateTodo from "./UpdateTodoModel";
import { useAppDispatch } from "../redux/hooks";
import { deleteTodo, updateTodo } from "../redux/features/todo/todoSlice";

const TodoRow = ({ todo }: { todo: TTodo }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          onClick={() =>
            dispatch(updateTodo({ id: todo.id, data: { status: todoStatus.completed } }))
          }
          style={{ color: "green" }}
        >
          Completed
        </span>
      ),
    },
    {
      key: "2",
      label: <span onClick={() => dispatch(deleteTodo({ id: todo.id }))}>Delete</span>,
      style: { color: "red" },
    },
  ];

  return (
    <div key={todo.id} className='todo'>
      <p style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <svg
          width='21'
          height='21'
          viewBox='0 0 21 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='2.5' y='2.5' width='16' height='16' rx='8' stroke='#525ceb' strokeWidth='4' />
        </svg>
        {todo.title}
      </p>
      <p
        style={{
          color: todo.status === todoStatus.completed ? "green" : "#F06A6D",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        {todo.status}
      </p>
      <p
        style={{
          backgroundColor:
            todo.priority === todoPriority.high
              ? "#F06A6D"
              : todo.priority === todoPriority.low
              ? "#F2C94C"
              : "#54C1AD",
          color: "white",
          fontWeight: "bold",
          padding: "5px 15px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {todo.priority}
      </p>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <p style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M21.9548 5.91575C22.147 6.20687 22.115 6.60248 21.8587 6.85876L12.6663 16.0511C12.5721 16.1454 12.4544 16.2128 12.3255 16.2465L8.49709 17.2465C8.37223 17.2791 8.24352 17.2784 8.12259 17.2476C7.99402 17.2149 7.87425 17.1482 7.77723 17.0511C7.58896 16.8629 7.51462 16.5889 7.58191 16.3313L8.58191 12.5028C8.61138 12.39 8.66667 12.2786 8.74316 12.1912L17.9696 2.96967C18.0504 2.88891 18.1477 2.82846 18.2535 2.79163C18.332 2.76432 18.4152 2.75 18.4999 2.75C18.6989 2.75 18.8896 2.82902 19.0303 2.96967L21.8587 5.7981C21.8953 5.83471 21.9273 5.87416 21.9548 5.91575ZM20.2677 6.32843L18.4999 4.56066L9.98178 13.0788L9.35679 15.4716L11.7496 14.8466L20.2677 6.32843Z'
              fill='#FDBF46'
            />
            <path
              d='M20.1413 17.6603C20.4147 15.3227 20.5017 12.9688 20.4023 10.6208C20.3975 10.5084 20.4398 10.399 20.5194 10.3194L21.5027 9.33609C21.6236 9.21519 21.8302 9.29194 21.8415 9.46254C22.0264 12.2522 21.9563 15.0545 21.6311 17.8346C21.3946 19.8571 19.7703 21.4421 17.7582 21.667C14.2916 22.0544 10.7083 22.0544 7.24171 21.667C5.22965 21.4421 3.60532 19.8571 3.36876 17.8346C2.95423 14.2903 2.95423 10.7097 3.36876 7.16543C3.60532 5.1429 5.22965 3.55789 7.24171 3.33301C9.87146 3.0391 12.5684 2.96815 15.2306 3.12016C15.4022 3.12996 15.4804 3.33757 15.3589 3.45909L14.3663 4.45165C14.2876 4.53034 14.1797 4.57261 14.0685 4.56885C11.842 4.49376 9.60049 4.57872 7.40832 4.82373C6.07821 4.97239 5.01272 6.022 4.85861 7.33968C4.45761 10.7682 4.45761 14.2318 4.85861 17.6603C5.01272 18.978 6.07821 20.0276 7.40832 20.1763C10.7642 20.5513 14.2357 20.5513 17.5916 20.1763C18.9217 20.0276 19.9872 18.978 20.1413 17.6603Z'
              fill='#FDBF46'
            />
          </svg>
        </p>
        <TodoDropDown items={menuItems}>
          <EllipsisVertical size={20} style={{ cursor: "pointer" }} />
        </TodoDropDown>
      </div>
      <UpdateTodo isOpen={open} setIsOpen={setOpen} todo={todo} />
    </div>
  );
};

export default TodoRow;
