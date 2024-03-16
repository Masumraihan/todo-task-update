import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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

    updateTodo: (state, actions: PayloadAction<{ id: string; data: Partial<TTodo> }>) => {
      const todo = state.todoList.find((todo) => todo.id === actions.payload.id);
      if (todo) {
        Object.keys(actions.payload.data).forEach((key) => {
          const todoKey = key as keyof TTodo;
          const newValue = actions.payload.data[todoKey] ?? todo[todoKey];
          todo[todoKey] = newValue;
        });
      }
    },
    deleteTodo: (state, { payload }) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== payload.id);
    },
  },
});
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
