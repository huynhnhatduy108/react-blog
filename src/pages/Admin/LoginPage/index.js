import React from "react";
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

function LoginPage() {
    return (
        <div>
            <div className="grid wide">
                <div className="admin__list-post">LOGIN</div>
                <Form>
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: false,
                                        message: "Please input username!",
                                    },
                                ]}
                            >
                                <label>{"Username or Email"}</label>
                                <Input placeholder="Username or Email of user" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: false,
                                        message: "Please input password!",
                                    },
                                ]}
                            >
                                <label>{"Password"}</label>
                                <Input placeholder="password of user" />
                            </Form.Item>
                            <Button type="primary" onClick={() => {}}>
                                Login
                            </Button>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>

                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default LoginPage;
