import moment from 'moment';

export const convertObjKey = (dataForm)=>{
    return {}
}

export const FomatDate = (date) =>{
  if (date) return date.format("DD/MM/YYYY");
  return "";
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

  export const trueTypeOf = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

  export const getQueryString = (init) => {
    const params = new URLSearchParams();
    Object.keys(init).map((k) => {
      const type = trueTypeOf(init[k]);
      switch (type) {
        case 'object':
          // params 
          break;
        case 'string':
        case 'number':
          params.append(k,init[k].toString())
          break;
        case 'array':
          init[k].map((item)=>{
            params.append(k,item)
          })
          break;
        default:
          break;
      }
      return k;
    })
    return params.toString()
  }