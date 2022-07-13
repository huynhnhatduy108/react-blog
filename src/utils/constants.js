

export const API_BASE_URL = "/api/v1";


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