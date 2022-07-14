
export const convertObjKey = (dataForm)=>{
    return {}
}

export function convertToDate(dateTime) {
    const current_time = new Date(dateTime)
    current_time.setHours(0,0,0,0)
    return moment(current_time, "YYYY-MM-DD");
}

export const formatPath = (path, ...params) => {
    if (!path) return path;
  
    let match = path.match(/:[a-z][a-z\d_]*\??/gi);
    if (!match) return path;
  
    match
      .map(param => param.replace(/\?$/, ''))
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((param, index) => path = path.replace(
        new RegExp(param + '\\??', 'gi'),
        (params[index] ?? '').toString()
      ));
  
    return path;
  }