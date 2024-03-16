import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal } from "antd";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { todoPriority, todoStatus } from "../constant";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./Forms/TodoForm";
import TodoInput from "./Forms/TodoInput";
import TodoSelect from "./Forms/TodoSelect";
import { TTodo } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/features/todo/todoSlice";
import TodoTextArea from "./Forms/TodoTextArea";
import Swal from "sweetalert2";

type TAddTodoProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const addTodoValidationSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  description: z.string({ required_error: "Description is required" }),
  priority: z.enum([todoPriority.high, todoPriority.low, todoPriority.medium], {
    required_error: "Priority is required",
  }),
});

const todoPriorityOptions = [todoPriority.high, todoPriority.low, todoPriority.medium].map(
  (item) => ({ value: item, label: item }),
);

const AddTodoModel = ({ isOpen, setIsOpen }: TAddTodoProps) => {
  const dispatch = useAppDispatch();

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const randomId = uuidv4().slice(0, 8);
    const todo: TTodo = {
      id: randomId,
      description: data.description,
      priority: data.priority,
      status: todoStatus.incomplete,
      title: data.title,
    };
    dispatch(addTodo(todo));
    setIsOpen(false);

    Swal.fire({
      title: "Todo Added Successfully",
      text: ` ${todo.title} Added Successfully`,
      icon: "success",
    });
  };

  return (
    <>
      <Modal title='Add Todo' open={isOpen} onCancel={() => setIsOpen(false)} footer={null}>
        <TodoForm onsubmit={handleSubmit} resolver={zodResolver(addTodoValidationSchema)}>
          <TodoInput name='title' label='Title' type='text' id='title' />
          <TodoTextArea name='description' label='Description' id='description' />
          <TodoSelect
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

export default AddTodoModel;
