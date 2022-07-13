
export const convertObjKey = (dataForm)=>{
    return {}
}

export function convertToDate(dateTime) {
    const current_time = new Date(dateTime)
    current_time.setHours(0,0,0,0)
    return moment(current_time, "YYYY-MM-DD");
}
