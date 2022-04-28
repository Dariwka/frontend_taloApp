import { createSlice } from "@reduxjs/toolkit";

export const taloSlice = createSlice({
  name: "talo",
  initialState: {
    talos: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getTaloStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTaloSuccess: (state, action) => {
      state.isFetching = false;
      state.talos = action.payload;
    },
    getTaloFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteTaloStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteTaloSuccess: (state, action) => {
      state.isFetching = false;
      state.talos.splice(
        state.talos.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteTaloFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateTaloStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateTaloSuccess: (state, action) => {
      state.isFetching = false;
      state.talos[
        state.talos.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.talo;
    },
    updateTaloFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addTaloStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addTaloSuccess: (state, action) => {
      state.isFetching = false;
      state.talos.push(action.payload);
    },
    addTaloFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getTaloStart,
  getTaloSuccess,
  getTaloFailure,
  deleteTaloStart,
  deleteTaloSuccess,
  deleteTaloFailure,
  updateTaloStart,
  updateTaloSuccess,
  updateTaloFailure,
  addTaloStart,
  addTaloSuccess,
  addTaloFailure,
} = taloSlice.actions;

export default taloSlice.reducer;
