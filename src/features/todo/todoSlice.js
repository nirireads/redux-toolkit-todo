import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isUpdating: false,
  currentTodoId: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodoStart: (state, action) => {
      state.isUpdating = true;
      state.currentTodoId = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.text = text;
      state.isUpdating = false;
      state.currentTodoId = null;
    },
    updateTodoCancel: (state) => {
      state.isUpdating = false;
      state.currentTodoId = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodoStart,
  updateTodo,
  updateTodoCancel,
} = todoSlice.actions;
export default todoSlice.reducer;
