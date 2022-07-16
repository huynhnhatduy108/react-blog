

export const API_BASE_URL = "http://127.0.0.1:6001/api";


export const ON_RESPONSE_ERROR = [
    {
        loc: "RESPONSE",
        msg: "Result_Response_failure",
        detail: "Result response failure"
    }
]

export const ON_FETCH_ERROR = [
    {
        detail: "Cannot send request.",
        msg: "ERR_CANNOT_SEND_REQUEST",
        loc: "FETCH"
    }
]

export const ROLE_USER =[
    {key:0,value:"USER"},
    {key:1,value:"ADMIN"},
    {key:2,value:"ORTHER"}
]

export const PASSWORD_HIDDEN = "**********"