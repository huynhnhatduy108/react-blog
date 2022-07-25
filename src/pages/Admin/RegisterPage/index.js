import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {
    Col,
    Row,
    Button,
    Form,
    Input,
} from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../features/Auth/store/slice";

function RegisterPage() {
    const dispatch = useDispatch();
    const [formRegister] = Form.useForm(); 
    const [matchPass, setMatchPass] = useState(false)

    const handleRegister =()=>{
        const { username, email, full_name, password, comfirm_password} = formRegister.getFieldValue();
        if (password!=comfirm_password){
            return setMatchPass(true)
        }
        if (!matchPass){
            dispatch(registerUser({ username, email, full_name, password}))
        }

    }
    const hanldeChangeConfirmPass =(event)=>{
        const { password} = formRegister.getFieldValue();

        if (password!=event.target.value){
            formRegister.setFieldsValue({comfirm_password:event.target.value})
        }
        else{
            setMatchPass(false)
        }
    }

    return (
        <div>
            <div className="grid wide">
                <div className="admin__list-post">REGISTER</div>
                <Form form={formRegister} name="formRegister">
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <Form.Item noStyle>
                                <label>{"Username"}</label>
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
                                <label>{"Full name"}</label>
                                <Form.Item
                                    name="full_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input full_name!",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Full name of user" />
                                </Form.Item>
                            </Form.Item>
                            <Form.Item noStyle>
                                <label>{"Email"}</label>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            type: "email",
                                            message: "Input your email or email wrong format!",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Email of user" />
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
                            <Form.Item noStyle>
                                <label>{"Password comfirm"}</label>
                                <Form.Item 
                                    name="comfirm_password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input password comfirm!",
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder="password comfirm"  onChange={hanldeChangeConfirmPass} iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                                </Form.Item>
                                {matchPass?<div className='validate_contact'>Password is not matched!</div>:""}

                            </Form.Item>

                            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                <Button type="primary" onClick={handleRegister} >
                                    Register
                                </Button>
                                <Link to={'/admin/login'}>Have a account wanna login?</Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default RegisterPage;
