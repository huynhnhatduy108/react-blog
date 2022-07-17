import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL, ON_FETCH_ERROR, ON_RESPONSE_ERROR } from "./constants";

export const contentType = (type) => {
    return { "Content-Type": type };
  };

function reloadToLogin() {
    window.localStorage.clear();
    window.location.replace('/')
    window.location.reload()
}

export const METHOD = {
    GET : "get",
    POST : "post",
    PUT : "put",
    PATCH : "patch",
    HEAD : "head",
    DELETE : "delete"
}

export const EContentType = {
    JSON : "application/json",
    BINARY : "multipart/form-data",
    TEXT : "plain/text",
    URLENCODED : "application/x-www-form-urlencoded"
}

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: { Accept: EContentType.JSON, ...contentType(EContentType.JSON) },
    withCredentials: true
});

const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MTEzMzI2LCJpYXQiOjE2NTgwMjY5MjYsImp0aSI6IjRiMDQ3Nzc0MGQxMDRlMmY4YjdmZTFlOGIyYjg0YmM3IiwidXNlcl9pZCI6MX0.6Tc06_btMOAy8sfJp_fgbHf6SE4yFUz-g0QzIB0MqRM"

function execApi(method, url, data, params, headers) {
   
    return API.request({method:method, url:url, data:data, params: params, headers:{Authorization:` Bear ${access_token}`,...headers}})
        .then((response) => {    
            if ("access_token" in response.headers) {
                // if (getLocalItem('access_token')) {
                //     let access_token  = getLocalItem('access_token')
                //     let access_token = response.headers.get("user-token")
                //     setLocalItem('access_token' , access_token)
                // }
            }
            const result= {data: null, success: false, headers:null, errors: []};

            try {
                result.success = Math.floor(response.status / 200) === 1;
                if (result.success) {
                    result.data = response.data;
                    result.success = true;
                    result.errors = [];
                    result.headers = response.headers
                } else {
                    result.errors = response.data.errors ??  ON_RESPONSE_ERROR;
                }
            } catch (e) {
                result.errors = ON_RESPONSE_ERROR;
            }

            return result;
        })
        .catch((error) => {
            if (error.response && error.response.data) {
                if(Math.floor(error.response.status / 500) === 1){
                    console.log("SERVER_ERROR");
                }

                const response = error.response.data;
                response.success = false;
                response.status_code = error.response.status;

                //check error code 
                if(response?.error_code && response?.status_code !== 403){
                    let  { error_code } = response   
                    setTimeout(reloadToLogin,3000 );
                    console.log("BACKEND ERROR", error_code);
                }
                else{
                    console.log("AUTHENTICATION", response?.error_code);

                }

                return response;
            } else {
                return {
                    success: false,
                    data: null,
                    errors: ON_FETCH_ERROR,
                    status_code: 500
                };
            }
        });
}

export function api(method , url, data, params, headers){
    return execApi(method, url, data, params, headers);
}

