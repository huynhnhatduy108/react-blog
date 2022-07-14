import React, { useState, useRef } from "react";
import moment from "moment";
import { adminRoutes } from "../../routes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
    Col,
    Row,
    Button,
    Checkbox,
    Form,
    Input,
    DatePicker,
    Space,
    Select,
    message,
    Upload,
    Table,
    Tag,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Editor } from "@tinymce/tinymce-react";

import DashboardPage from "../PostPage";
import CategoryPage from "../CategoryPage";
import TagPage from "../TagPage";
import UserPage from "../UserPage";
import LoginPage from "../LoginPage";
import "./style.css";

function AdminPage() {
    const [isLogin, setIsLogin] = useState(false);
    const editorRef = useRef(null);

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
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
                   {isLogin? <div className="admin__user">
                        <div className="admin__user-thumbnail">
                            <img
                                className="admin__user-img"
                                src={
                                    "https://gtjai.com.vn/wp-content/uploads/2021/07/avt.png"
                                }
                            />
                        </div>
                        <div className="admin__user-name">nhatduy</div>
                        <div className="admin__user-logout">
                            <i onClick={()=>setIsLogin(!isLogin)} class="fa-solid fa-arrow-right-from-bracket"></i>
                        </div>
                    </div>:
                    <div onClick={()=>setIsLogin(!isLogin)} className="admin__user">
                        <div className="" style={{cursor:"pointer"}}>
                            Login <i style={{color:"#1890ff"}} class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>
                        </div>
                    </div>}
                </div>

                <div>
                    <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        apiKey ='n1gm5s2923aec5q1x6xgk9hyq48eoabd7qtuwhkd357rr0xx'
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | " +
                                "bold italic backcolor | alignleft aligncenter " +
                                "alignright alignjustify | bullist numlist outdent indent | " +
                                "removeformat | help",
                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                    />
                    <button onClick={log}>Log editor content</button>
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
