import todoActions from "../actions/todoActions";
import uiActions from "../actions/uiActions";

const loadTodos = (services) => ({ dispatch, getState }) => (next) => async (
  action
) => {
  next(action);
  const { api } = services;
  if (action.type === todoActions.loadTodos.toString()) {
    try {
      dispatch(uiActions.setLoading(true));
      const payload = await api.todosService.getAll();
      dispatch(todoActions.loadTodosSuccess(payload));
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      dispatch(todoActions.loadTodosFailure(error));
      console.log("Error in [todosMiddleware]", error);
    }
  }
};

const todoMiddleware = [loadTodos];

export default todoMiddleware;
