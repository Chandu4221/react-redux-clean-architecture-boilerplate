import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoActions from "../../application/actions/todoActions";
import getAllTodos from "../../application/selectors/todosSelector";
import getLoading from "../../application/selectors/uiSelector";

const AllTodos = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(getAllTodos);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(todoActions.loadTodos());
  }, []);

  return (
    <div>
      All Todos
      {isLoading ? (
        <p>Please wait while we fetch all todos...</p>
      ) : (
        allTodos.map((item, index) => <div key={index}>Item</div>)
      )}
    </div>
  );
};

export default AllTodos;
