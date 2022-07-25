import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../features/Auth/store/slice';
import { adminPrivateRoutes } from '../../pages/routes';
import { getUserLocal } from '../../utils/helper';

const userLocal = getUserLocal();

function HeaderAdmin() {
    const dispatch = useDispatch();

    const handleLogout = (userID)=>{
        dispatch(logoutUser(userID));
    }
    
    return (
        <div className="admin__header">
                <div className="admin__menu">
                    {adminPrivateRoutes.map((item, index) => (
                        <div key={index} className="admin__header-name">
                            <Link to={item.path}>{item.label}</Link>
                        </div>
                    ))}
                </div>
                {(userLocal && userLocal.access_token) ? <div className="admin__user">
                    <div className="admin__user-thumbnail">
                        <img
                            className="admin__user-img"
                            src={userLocal?.avatar_url}
                        />
                    </div>
                    <div className="admin__user-name">{userLocal?.username}</div>
                    <div className="admin__user-logout">
                        <i onClick={()=>handleLogout(userLocal?.id)} className="fa-solid fa-arrow-right-from-bracket"></i>
                    </div>
                </div>:""}
            </div>
    )
}

export default HeaderAdmin;