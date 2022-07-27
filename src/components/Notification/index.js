import "./style.css";
import { message, notification } from 'antd';

export const notificationCustom = (mess ="Hello my blog!", success=true)=> { 
    notification.open({
        className: `notification__register-${success?"success":"error"}`,
        description:mess,
        placement:"top",
        onClick: () => {},
      });

}

