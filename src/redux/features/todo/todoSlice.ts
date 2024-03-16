import { createSlice } from "@reduxjs/toolkit";
import { TTodo } from "../../../types";

const initialState: { todoList: TTodo[] } = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoList.push(payload);
    },
    updateTodo: (state, { payload }) => {
      const todo = state.todoList.findIndex((todo) => todo.id === payload.id);
      console.log(todo);
      if (todo !== -1) {
        console.log("payload =>", payload);
        state.todoList[todo] = payload;
      }
    },
    deleteTodo: (state, { payload }) => {
      const todo = state.todoList.findIndex((todo) => todo.id === payload);
      if (todo !== -1) {
        state.todoList.splice(todo, 1);
      }
    },
  },
});
export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
