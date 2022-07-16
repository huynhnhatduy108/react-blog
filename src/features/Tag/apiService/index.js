import { api, METHOD } from "../../../utils/api";
import { formatPath, getQueryString } from "../../../utils/helper";
import TagPaths from "./path";

export const apiListTag = (param) => {
  return api(METHOD.GET,formatPath(TagPaths.List));
}

export const apiSearchTag = (params) => {
  const queryParams = getQueryString(params);
  return api(METHOD.GET,formatPath(TagPaths.Search, queryParams));
}

export const apiDetailTag = (id) => {
  return api(METHOD.GET,formatPath(TagPaths.Detail, id));
}

export const apiCreateTag = (data) => {
  return api(METHOD.POST,formatPath(TagPaths.Create),data);
}

export const apiUpdateTag = (data) => {
  return api(METHOD.PUT,formatPath(TagPaths.Update, data.id),data);
}

export const apiDeleteTag = (id) => {
  return api(METHOD.DELETE,formatPath(TagPaths.Detele, id));
}
