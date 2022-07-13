import React, {useState} from "react";
import moment from 'moment';
import { adminRoutes } from "../../routes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Col, Row , Button, Checkbox, Form, Input, DatePicker, Space, Select, message, Upload, Table, Tag} from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import DashboardPage from "../PostPage";
import CategoryPage from "../CategoryPage";
import TagPage from "../TagPage";
import UserPage from "../UserPage";
import LoginPage from "../LoginPage";
import "./style.css";



function AdminPage() {
   const [img, setImg] = useState();

    const uploadfile = async ()=>{
        console.log("img", img);
        const data = new FormData();
        data.append("file", img);
        data.append("upload_preset", "my-uploads");

        const dataRes = await fetch("https://api.cloudinary.com/v1_1/nhat-duy/upload", 
                {method: "POST",body: data}
                ).then(res=>res.json()).catch(err=>err.json())
        console.log("dataRes", dataRes);
        // message.info('This is a normal message');

    }
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
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div><input type="file" onChange={(e)=>setImg(e.target.files[0])}/></div>
                    <button onClick={()=>uploadfile()}>upload</button>
                </div> */}
                <div>
               
                </div>
                {/* <Row>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6}>col</Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6}>col</Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6}>col</Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={6}>col</Col>
                    </Row> */}
                {/* <div>
                <Routes>
                    <Route path="/admin/home" element={ <DashboardPage />} />
                    <Route path="admin/category" element={<CategoryPage/>} />
                    <Route path="admin/tag" element={<TagPage/>} />
                    <Route path="admin/user" element={<UserPage/>} />
                    <Route path='admin/login' exact={true} element={<LoginPage/>} />

                </Routes>
           </div> */}
            </div>
        </div>
    );
}

export default AdminPage;
