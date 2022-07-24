import moment from 'moment';

export const convertObjKey = (dataForm)=>{
    return {}
}

export const FomatDate = (date) =>{
  if (date) return date.format("DD/MM/YYYY");
  return "";
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const plainText = (html)=>{
  if (html){
    return html.replace(/<style([\s\S]*?)<\/style>/gi, ' ')
    .replace(/<script([\s\S]*?)<\/script>/gi, ' ')
    .replace(/(<(?:.|\n)*?>)/gm, ' ')
    .replace(/\s+/gm, ' ')
    .replace("&nbsp;",' ')
    .replace("&nbsp;",' ')
  }
  return ""
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

export const scrollTo = (top= 0, left= 0, behavior= 'smooth')=>{
    window.scrollTo({top, left, behavior});
}