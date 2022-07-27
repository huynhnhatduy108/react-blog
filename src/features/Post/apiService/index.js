// import {formatPath, getQueryString} from "utils";
// import {apiGet, apiPost} from "utils/api";
import axios from "axios";
import { api, METHOD } from "../../../utils/api";
import { formatPath, getQueryString } from "../../../utils/helper";
import PostPaths from "./path";

export const apiListPost = (params) => {
    const queryParams = getQueryString(params);
    return api(METHOD.GET, formatPath(PostPaths.List, queryParams));
};

export const apiListPostRelation = (data) => {
    return api(METHOD.POST, formatPath(PostPaths.ListRelation), data);
};

export const apiDetailPostById = (id) => {
    return api(METHOD.GET, formatPath(PostPaths.DetailById, id));
};

export const apiDetailPostBySlug = (slug) => {
    return api(METHOD.GET, formatPath(PostPaths.DetailBySlug, slug));
};

export const apiCreatePost = (data) => {
    return api(METHOD.POST, formatPath(PostPaths.Create), data);
};

export const apiUpdatePost = (data) => {
    return api(METHOD.PUT, formatPath(PostPaths.Update, data.id), data);
};

export const apiDeletePost = (id) => {
    return api(METHOD.DELETE, formatPath(PostPaths.Detele, id), {});
};

export const apiListCoinChart = (data) => {
    return axios
        .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
        )
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
};
