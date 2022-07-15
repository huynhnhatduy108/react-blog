// import {formatPath, getQueryString} from "utils";
// import {api, apiPost} from "utils/api";
import { api, METHOD } from "../../../utils/api";
import { formatPath } from "../../../utils/helper";
import UserPaths from "./path";

export const apiListUser = (param) => {
  return api(METHOD.GET,formatPath(UserPaths.List));
}

export const apiInfoUser = (id) => {
  return api(METHOD.GET,formatPath(UserPaths.Detail, id));
}

export const apiCreateUser = (data) => {
  return api(METHOD.GET,formatPath(UserPaths.Create),data);
}

export const apiUpdateUser = (data) => {
  return api(METHOD.PUT,formatPath(UserPaths.Update, data.id), data);
}

export const apiDeleteUser = (id) => {
  return api(METHOD.DELETE,formatPath(UserPaths.Detele, id));
}

export const apiUpdateAvatarUser = (data) => {
  return api(METHOD.PUT,formatPath(UserPaths.UpdateAvatar, data.id),data);
}
