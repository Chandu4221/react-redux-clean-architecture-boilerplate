import { createAction } from "@reduxjs/toolkit";

const setLoading = createAction("[UI] - SET_LOADING");

const uiActions = {
  setLoading,
};

export default uiActions;
