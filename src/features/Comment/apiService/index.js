// import {formatPath, getQueryString} from "utils";
// import {apiGet, apiPost} from "utils/api";
import { api, METHOD } from "../../../utils/api";
import { formatPath } from "../../../utils/helper";
import CommentPaths from "./path";

export const apiGetlistCommentByPost = (id) => {
  return api(METHOD.GET,formatPath(CommentPaths.ListCommentByPost, id));
}

export const apiUserCommentToPost = (data) => {
  return api(METHOD.POST,formatPath(CommentPaths.UserCommentToPost, data.post_id), data);
}

export const apiAdminCommentReply = (data) => {
  return api(METHOD.POST,formatPath(CommentPaths.AdminCommentReply, data.post_id), data);
}

export const apiDeleteComment = (id) => {
  return api(METHOD.DELETE,formatPath(CommentPaths.DeleteComment, id));
}

export const apiDeleteCommentByPostId = (id) => {
  return api(METHOD.DELETE,formatPath(CommentPaths.DeleteCommentByPostId, id));
}
