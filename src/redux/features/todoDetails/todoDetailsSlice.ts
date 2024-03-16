import { createSlice } from "@reduxjs/toolkit";

type TTodoDetails = {
  showDetails: boolean;
  todoId: string;
};

const initialState: TTodoDetails = {
  showDetails: false,
  todoId: "",
};

const todoDetailsSlice = createSlice({
  name: "todosDetails",
  initialState,
  reducers: {
    showDetails: (state, { payload }) => {
      state.showDetails = payload.showDetails;
      state.todoId = payload.todoId;
    },
  },
});

export const { showDetails } = todoDetailsSlice.actions;
export default todoDetailsSlice.reducer;
