import React from 'react'
import { Link } from 'react-router-dom'
import { adminRoutes } from '../../routes'
import { Table } from "antd";

function AdsPage() {

    return (
        <div>
            <div className="grid wide">
                <div className="admin__header">
                        <div className="admin__menu">
                            {adminRoutes.map((item, index) => (
                                <div key={index} className="admin__header-name">
                                    <Link to={item.path}>{item.label}</Link>
                                </div>
                            ))}
                        </div>
                        <div className="admin__user">
                            <div className="admin__user-thumbnail">
                                <img className="admin__user-img" src={"https://gtjai.com.vn/wp-content/uploads/2021/07/avt.png"}/>
                            </div>
                            <div className="admin__user-name">
                                nhatduy
                            </div>
                            <div className="admin__user-logout">
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </div>
                        </div>
                </div>
                <div>
                         
                </div>
            </div>

        </div>
    )
}

export default AdsPage