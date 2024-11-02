- create store [src/app/store.js]
  import { configureStore } from "@reduxjs/toolkit";
  export const store = configureStore({});

- create reducers to be introduced in store
- create [features/todo/todoSlice.js]

  import { createSlice} from "@reduxjs/toolkit";
  const initialState = {
    todos: [{ id: 1, text: "hello world" }],
  };

    export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        fn: (state, action) => {},
        },
    });

    export const { fn, fn2 } = todoSlice.actions;
    export default todoSlice.reducer;
