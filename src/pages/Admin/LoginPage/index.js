import React from "react";
import { Col, Row, Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { userLogin } from "../../../features/Auth/store/slice";

function LoginPage() {
    const [formLogin] = Form.useForm();
    const dispatch = useDispatch()
    const handleLogin = () =>{
        const {username, password} = formLogin.getFieldsValue();
        dispatch(userLogin({username, password}));
    } 

    return (
        <div>
            <div className="grid wide">
                <div className="admin__list-post">LOGIN</div>
                <Form form={formLogin} name="formLogin" onFinish={handleLogin}>
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <Form.Item noStyle>
                                <label>{"Username or Email"}</label>
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input username!",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Username or Email of user" />
                                </Form.Item>
                            </Form.Item>
                            <Form.Item noStyle>
                                <label>{"Password"}</label>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input password!",
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder="password"  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                                </Form.Item>
                            </Form.Item>

                            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                <Button type="primary" htmlType="submit" >
                                    Login
                                </Button>
                                <Link to={'/admin/register'}>Register account ?</Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>

                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default LoginPage;
