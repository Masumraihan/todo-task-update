import { createSlice } from '@reduxjs/toolkit'
import { TTodo } from '../../../types'

const initialState: { todoList: TTodo[] } = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: () => {},
  },
})
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
