import { api, METHOD } from "../../../utils/api";
import { formatPath, getQueryString } from "../../../utils/helper";
import CategoryPaths from "./path";

export const apiListCategory = () => {
  return api(METHOD.GET,formatPath(CategoryPaths.List));
}

export const apiSearchCategory = (params) => {
  const queryParams = getQueryString(params);
  return api(METHOD.GET,formatPath(CategoryPaths.Search, queryParams));
}

export const apiDetailCategory = (id) => {
  return api(METHOD.GET,formatPath(CategoryPaths.Detail, id));
}

export const apiCreateCategory = (data) => {
  return api(METHOD.POST,formatPath(CategoryPaths.Create), data);
}

export const apiUpdateCategory = (data) => {
  return api(METHOD.PUT,formatPath(CategoryPaths.Update, data.id), data);
}

export const apiDeleteCategory = (id) => {
  return api(METHOD.DELETE,formatPath(CategoryPaths.Detele, id));
}
