import { message } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL, ON_FETCH_ERROR, ON_RESPONSE_ERROR } from "./constants";
import { removeLocalItem } from "./helper";

export const contentType = (type) => {
    return { "Content-Type": type };
};

async function reloadToLogin() {
    await window.localStorage.clear();
    await window.location.replace("/admin/login");
}

export const METHOD = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    HEAD: "head",
    DELETE: "delete",
};

export const EContentType = {
    JSON: "application/json",
    BINARY: "multipart/form-data",
    TEXT: "plain/text",
    URLENCODED: "application/x-www-form-urlencoded",
};

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: { Accept: EContentType.JSON, ...contentType(EContentType.JSON) },
    withCredentials: true,
});

const access_token =
    "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4ODE4MzYzLCJpYXQiOjE2NTg3MzE5NjMsImp0aSI6ImE4MzkxY2ZiNTZlMjRkMTJiNjU4M2YyMzBhMDQ3ZDk2IiwidXNlcl9pZCI6MX0.6Emc7jctVs2vUVoBK8SXHcmqIktW5UN99BI6e2zdUrE";

function execApi(method, url, data, params, headers) {
    return API.request({
        method: method,
        url: url,
        data: data,
        params: params,
        headers: { Authorization: ` Bear ${access_token}`, ...headers },
    })
        .then((response) => {
            if ("access_token" in response.headers) {
                // if (getLocalItem('access_token')) {
                //     let access_token  = getLocalItem('access_token')
                //     let access_token = response.headers.get("user-token")
                //     setLocalItem('access_token' , access_token)
                // }
            }
            const result = {
                data: null,
                success: false,
                headers: null,
                errors: [],
            };

            try {
                result.success = Math.floor(response.status / 200) === 1;
                if (result.success) {
                    result.data = response.data;
                    result.success = true;
                    result.errors = [];
                    result.headers = response.headers;
                } else {
                    result.errors = response.data.errors ?? ON_RESPONSE_ERROR;
                }
            } catch (e) {
                result.errors = ON_RESPONSE_ERROR;
            }

            return result;
        })
        .catch((error) => {
            // console.log('api catch error', error);
            if (error.response && error.response.data) {
                if (Math.floor(error.response.status / 500) === 1) {
                    message.error("SERVER ERROR. PLEASE WAIT SOME MIMUTES");
                }
                if (error.response.status === 403) {
                    message.error("AUTHENTICATION PERMISSION DENINE");
                }
                if (error.response.status === 401) {
                    removeLocalItem("user")
                    message.error("TOKEN INVALID");
                    setTimeout(reloadToLogin, 2000);
                } 
                return error.response;
            } else {
                return {
                    success: false,
                    data: null,
                    errors: ON_FETCH_ERROR,
                    status_code: 500,
                };
            }
        });
}

export function api(method, url, data, params, headers) {
    return execApi(method, url, data, params, headers);
}
