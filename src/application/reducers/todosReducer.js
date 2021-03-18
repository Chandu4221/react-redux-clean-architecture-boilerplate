import { createReducer } from "@reduxjs/toolkit";
import todoActions from "../actions/todoActions";

const initialState = {
  allTodos: [],
};

const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(todoActions.loadTodos, (state, action) => {})
    .addCase(todoActions.loadTodosSuccess, (state, action) => {
      state.allTodos = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

export default todosReducer;
