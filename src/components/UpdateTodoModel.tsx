import { Button, Modal } from "antd";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { todoPriority } from "../constant";
import { updateTodo } from "../redux/features/todo/todoSlice";
import { useAppDispatch } from "../redux/hooks";
import { TTodo } from "../types";
import TodoForm from "./Forms/TodoForm";
import TodoInput from "./Forms/TodoInput";
import TodoSelect from "./Forms/TodoSelect";
import TodoTextArea from "./Forms/TodoTextArea";
import Swal from "sweetalert2";

type TUpdateTodoProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TTodo;
};

const todoPriorityOptions = [todoPriority.high, todoPriority.low, todoPriority.medium].map(
  (item) => ({ value: item, label: item }),
);

const UpdateTodo = ({ isOpen, setIsOpen, todo }: TUpdateTodoProps) => {
  const dispatch = useAppDispatch();

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const todoData: Partial<TTodo> = {
      priority: data.priority || todo.priority,
      title: data.title || todo.title,
      description: data.description || todo.description,
    };
    dispatch(updateTodo({ id: todo.id, data: todoData }));
    setIsOpen(false);
    Swal.fire({
      title: "Updated Successfully",
      text: ` ${todo.title} Updated Successfully`,
      icon: "success",
    });
  };
  return (
    <>
      <Modal
        footer={null}
        title='Update Todo'
        open={isOpen}
        onCancel={() => setIsOpen((pre) => !pre)}
      >
        <TodoForm onsubmit={handleSubmit}>
          <TodoInput defaultValue={todo.title} name='title' label='Title' type='text' id='title' />
          <TodoTextArea
            defaultValue={todo.description}
            name='description'
            label='Description'
            id='description'
          />
          <TodoSelect
            defaultValue={todo.priority}
            options={todoPriorityOptions}
            name='priority'
            label='Priority'
            placeholder='select priority'
          />
          <Button htmlType='submit'>Submit</Button>
        </TodoForm>
      </Modal>
    </>
  );
};

export default UpdateTodo;
