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
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
