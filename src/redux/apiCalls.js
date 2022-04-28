import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getTaloFailure,
  getTaloStart,
  getTaloSuccess,
  deleteTaloFailure,
  deleteTaloStart,
  deleteTaloSuccess,
  updateTaloFailure,
  updateTaloStart,
  updateTaloSuccess,
  addTaloFailure,
  addTaloStart,
  addTaloSuccess,
} from "./taloRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getTalot = async (dispatch) => {
  dispatch(getTaloStart());
  try {
    const res = await publicRequest.get("/talos");
    dispatch(getTaloSuccess(res.data));
  } catch (err) {
    dispatch(getTaloFailure());
  }
};

export const deleteTalo = async (id, dispatch) => {
  dispatch(deleteTaloStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteTaloSuccess(id));
  } catch (err) {
    dispatch(deleteTaloFailure());
  }
};

export const updateTalo = async (id, talo, dispatch) => {
  dispatch(updateTaloStart());
  try {
    // update
    dispatch(updateTaloSuccess({ id, talo }));
  } catch (err) {
    dispatch(updateTaloFailure());
  }
};
export const addTalo = async (talo, dispatch) => {
  dispatch(addTaloStart());
  try {
    const res = await userRequest.post(`/talos`, talo);
    dispatch(addTaloSuccess(res.data));
  } catch (err) {
    dispatch(addTaloFailure());
  }
};
