import { api, METHOD } from "../../../utils/api";
import { formatPath } from "../../../utils/helper";
import CategoryPaths from "./path";

export const apiListCategory = (param) => {
  // return api(METHOD.GET,formatPath(CategoryPaths.Detail, id));
}

export const apiSearchCategory = (param) => {
  return api(METHOD.GET,formatPath(CategoryPaths.Search,param));
}

export const apiDetailCategory = (id) => {
  // return api(METHOD.GET,formatPath(CategoryPaths.Detail, id));
}

export const apiCreateCategory = (data) => {
  return api(METHOD.POST,formatPath(CategoryPaths.Create), data);
}

export const apiUpdateCategory = (id) => {
  // return api(METHOD.GET,formatPath(CategoryPaths., id));
}

export const apiDeleteCategory = (id) => {
  // return api(METHOD.GET,formatPath(CategoryPaths.Detail, id));
}
