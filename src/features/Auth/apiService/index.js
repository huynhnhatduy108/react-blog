// import {formatPath, getQueryString} from "utils";
import { api, METHOD } from "../../../utils/api";
import { formatPath } from "../../../utils/helper";
import AuthPaths from "./path";

export const apiRegister = (data) => {
  return api(METHOD.POST,formatPath(AuthPaths.Register), data);
}

export const apiLogin = (data) => {
  return api(METHOD.POST,formatPath(AuthPaths.Login), data);
}

export const apiFacebookLogin = (data) => {
  return api(METHOD.POST,formatPath(AuthPaths.FacebookLogin), data);
}

export const apiGoogleLogin = (data) => {
  return api(METHOD.POST,formatPath(AuthPaths.GoogleLogin), data);
}

export const apiProfile = (id) => {
  return api(METHOD.GET,formatPath(AuthPaths.Profile, id));
}

export const apiLogout = (id) => {
  return api(METHOD.POST,formatPath(AuthPaths.Logout,id));
}

export const apiCheckToken = (data) => {
  return api(METHOD.POST,formatPath(AuthPaths.CheckToken), data);
}
