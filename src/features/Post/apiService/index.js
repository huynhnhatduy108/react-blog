// import {formatPath, getQueryString} from "utils";
// import {apiGet, apiPost} from "utils/api";
import { api, METHOD } from "../../../utils/api";
import PostPaths from "./path";


export const apiListPost = (param) => {
  return api(METHOD.GET,PostPaths.List,{});
}

export const apiDetailPost = (id) => {
  // return apiGet(formatPath(PaperPaths.Detail, id));
}

export const apiCreatePost = (data) => {
  // return apiGet(formatPath(PaperPaths., id));
}

export const apiUpdatePost = (id) => {
  // return apiGet(formatPath(PaperPaths., id));
}

export const apiDeletePost = (id) => {
  // return apiGet(formatPath(PaperPaths.Detail, id));
}
