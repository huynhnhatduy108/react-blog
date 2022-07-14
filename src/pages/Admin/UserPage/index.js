import React, { useState } from "react";
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
import "./style.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { uploadFileCloudinary } from "../../../services/uploadFile";
const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

function UserPage() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total:20,
    });


    const handleUploadFile = async (info) => {
        await setLoading(true);
        const res = await uploadFileCloudinary(info.file, "my-uploads");
        await setLoading(true);
        if (res.url){
            setImageUrl(res.url)
        }
    };

    const handleTableChange = (newPagination, filters, sorter) => {
        // fetchData({
        //   sortField: sorter.field,
        //   sortOrder: sorter.order,
        //   pagination: newPagination,
        //   ...filters,
        // });
        setPagination(newPagination)
      };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const columns = [
      {
          title: "Username",
          dataIndex: "username",
          key: "username",
          render: (text) => <a>{text}</a>,
      },
      {
          title: "Full Name",
          dataIndex: "full_name",
          key: "full_name",
      },
      {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
        render: (role)=>(<Tag color={role=="ADMIN"? "geekblue" : "green"} key={role}>
                        {role.toUpperCase()}
                    </Tag>)
      },
      {
        title: "Avatar",
        dataIndex: "avatar_url",
        key: "avatar_url",
        render: (avatar_url) => <img style={{width:60, height:80, objectFit:"cover"}} src={avatar_url}/>,
     },
      {
          title: "Action",
          key: "action",
          render: (_, record) => (
              <Space size="middle">
                   <Button type="primary">
                      Update
                  </Button>
                  <Button  type="danger">
                    Delete
                  </Button>
              </Space>
          ),
      },
  ];
  const data = [
      {
          key: "1",
          username:"johnbrown",
          full_name: "John Brown",
          phone:"0461944241",
          role:"ADMIN",
          avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&usqp=CAU" ,
      },
      {
          key: "2",
          username:"jimgreen",
          full_name: "Jim Green",
          phone:"0461944241",
          role:"USER",
          avatar_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpvDL5s63lWuZM35sR4jgdQX_ly4QTBdTwpnJ5KNnBc62MeK8ZRCTHDc1ic3DYUS9KX8&usqp=CAU' ,
      },
      {
          key: "3",
          username:"joeblack",
          full_name: "Joe Black",
          phone: "0461944241",
          role:"USER",
          avatar_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorW5mNrZbv0ozJ8mZ_u6OmM7rr__lwBc_egLGICefQ4H8tDOTlRf99m-9L1225F2k6QQ&usqp=CAU" ,
      },

      {
        key: "2",
        username:"jimgreen",
        full_name: "Jim Green",
        phone:"0461944241",
        role:"USER",
        avatar_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpvDL5s63lWuZM35sR4jgdQX_ly4QTBdTwpnJ5KNnBc62MeK8ZRCTHDc1ic3DYUS9KX8&usqp=CAU' ,
    },
    {
        key: "3",
        username:"joeblack",
        full_name: "Joe Black",
        phone: "0461944241",
        role:"USER",
        avatar_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorW5mNrZbv0ozJ8mZ_u6OmM7rr__lwBc_egLGICefQ4H8tDOTlRf99m-9L1225F2k6QQ&usqp=CAU" ,
    },
    {
        key: "2",
        username:"jimgreen",
        full_name: "Jim Green",
        phone:"0461944241",
        role:"USER",
        avatar_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpvDL5s63lWuZM35sR4jgdQX_ly4QTBdTwpnJ5KNnBc62MeK8ZRCTHDc1ic3DYUS9KX8&usqp=CAU' ,
    },
    {
        key: "3",
        username:"joeblack",
        full_name: "Joe Black",
        phone: "0461944241",
        role:"USER",
        avatar_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorW5mNrZbv0ozJ8mZ_u6OmM7rr__lwBc_egLGICefQ4H8tDOTlRf99m-9L1225F2k6QQ&usqp=CAU" ,
    },
  ];


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

                <div>
                    {/* List Post */}
                    <div className="admin__list-post">LIST USER</div>
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                            <Input placeholder="Find by username, email, fullname" />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Button
                                style={{ textAlign: "center" , width:'100%'}}
                                type="primary"
                                onClick={() => {}}
                            >
                                Seach
                            </Button>
                        </Col>
                    </Row>
                    <Table
                         pagination={pagination}
                         columns={columns}
                         dataSource={data}
                         loading={loading}
                         onChange={handleTableChange}
                    />
                </div>
                {/* Create user */}
                <div className="admin__create-post">CREATE USER</div>
                <Form>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input username!",
                                            },
                                        ]}
                                    >
                                        <label>{"1. Username"}</label>
                                        <Input placeholder="Username of user" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item
                                        name="full_name"
                                        rules={[
                                            {
                                                required: false,
                                                message: "Please input Name!",
                                            },
                                        ]}
                                    >
                                        <label>{"2. Full name"}</label>
                                        <Input placeholder="Name of user" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item
                                        // label="Meta-Title"
                                        name="email"
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    "Please input email!",
                                            },
                                        ]}
                                    >
                                        <label>{"3. Email"}</label>
                                        <Input placeholder="Email of user" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item
                                        // label="Published"
                                        name="phone"
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    "Please input phone!",
                                            },
                                        ]}
                                    >
                                        <label>{"4. Phone"}</label>
                                        <Input placeholder="Phone of user" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item
                                        name="intro"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input intro!",
                                            },
                                        ]}
                                    >
                                        <label>{"5. Intro"}</label>
                                        <TextArea
                                            rows={4}
                                            placeholder="Intro of user"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        // label="Meta-Title"
                                        name="password"
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    "Please input password!",
                                            },
                                        ]}
                                    >
                                        <label>{"7. Password"}</label>
                                        <Input placeholder="password of user" />
                                    </Form.Item>

                                    <Form.Item
                                        // label="Meta-Title"
                                        name="comfirm_password"
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    "Please input password again!",
                                            },
                                        ]}
                                    >
                                        <label>{"Comfirm Password"}</label>
                                        <Input placeholder="comfirm password of user" />
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item
                                        name="profile"
                                        rules={[
                                            {
                                                required: false,
                                                message: "Please input profile!",
                                            },
                                        ]}
                                    >
                                        <label>{"8. Profile"}</label>
                                        <TextArea
                                            rows={4}
                                            placeholder="profile of user"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="role"
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    "Please choose role!",
                                            },
                                        ]}
                                    >
                                        <label>{"9. Role"}</label>
                                        <Select defaultValue={"USER"} placeholder="Role of user">
                                            <Option value="ADMIN">Admin</Option>
                                            <Option value="USER">User</Option>
                                            <Option value="OTHER">Orther</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        name="avatar"
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    "Please input avatar!",
                                            },
                                        ]}
                                    >
                                        <label>{"10. Avatar"}</label>
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-user-upload"
                                            showUploadList={false}
                                            beforeUpload={()=>false}
                                            onChange={handleUploadFile}
                                        >
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt="avatar"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                />
                                            ) : (
                                                uploadButton
                                            )}
                                        </Upload>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Button type="primary" onClick={() => {}}>
                        Summit
                    </Button>
                </Form>
                <div style={{ padding: 40 }}></div>

            </div>
        </div>
    );
}

export default UserPage;
