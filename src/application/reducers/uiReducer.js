import { createReducer } from "@reduxjs/toolkit";
import uiActions from "../actions/uiActions";

const initialState = {
  loading: false,
};

const uiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(uiActions.setLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

export default uiReducer;
