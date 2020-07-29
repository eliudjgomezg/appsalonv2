import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";

import { USER_SERVER } from "./../../components/Config";

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/user/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/user/login`, dataToSubmit)
    .then((response) => {
      console.log("user login", response);
      return response.data;
    });

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get(`${USER_SERVER}/user/auth`).then((response) => {
    console.log("user auth", response.data);
    return response.data;
  });
  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/user/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
