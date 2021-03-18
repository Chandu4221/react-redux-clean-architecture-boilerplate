import { createAction } from "@reduxjs/toolkit";

const loadTodos = createAction("[TODO] - LOAD_TODOS");

const loadTodosSuccess = createAction("[TODO] - LOAD_TODO_SUCCESS");

const loadTodosFailure = createAction("[TODO] - LOAD_TODOS_FAILURE");

const todoActions = {
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
};

export default todoActions;
