

export const API_BASE_URL = "https://blog-api-djangdo.herokuapp.com/api";


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