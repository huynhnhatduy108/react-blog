// import {formatPath, getQueryString} from "utils";
// import {apiGet, apiPost} from "utils/api";
import { api, METHOD } from "../../../utils/api";
import { formatPath, getQueryString } from "../../../utils/helper";
import PostPaths from "./path";

export const apiListPost = (params) => {
  const queryParams = getQueryString(params);
  return api(METHOD.GET,formatPath(PostPaths.List, queryParams));
}

export const apiDetailPostById = (id) => {
  return api(METHOD.GET,formatPath(PostPaths.DetailById, id));
}

export const apiDetailPostBySlug = (slug) => {
  return api(METHOD.GET,formatPath(PostPaths.DetailBySlug,slug));
}

export const apiCreatePost = (data) => {
  return api(METHOD.POST,formatPath(PostPaths.Create),data);
}

export const apiUpdatePost = (data) => {
  return api(METHOD.PUT,formatPath(PostPaths.Update, data.id), data);
}

export const apiDeletePost = (id) => {
  return api(METHOD.DELETE,formatPath(PostPaths.Detele, id),{});
}
