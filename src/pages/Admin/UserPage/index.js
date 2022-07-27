import React, { useEffect, useState } from "react";
import moment from "moment";
import { adminPrivateRoutes } from "../../routes";
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
    Popconfirm,
} from "antd";
import "./style.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { uploadFileCloudinary } from "../../../services/uploadFile";
import { clearDetailUser, createUser, deleteUser, getDetailUser, getListUser, getUserSlice, updateUser } from "../../../features/User/store/slice";
import { useDispatch, useSelector } from "react-redux";
import { PASSWORD_HIDDEN, ROLE_USER } from "../../../utils/constants";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { useOnceEffect } from "../../../hooks/useOneEffect";
const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

function UserPage() {
    const [formUser, formSeachUser] = Form.useForm(); 
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const userStore = useSelector(getUserSlice);
    const { isFetching, listUser, detailUser, errors } = userStore;
    const {items, limit, page, total_page, total_record} = listUser;

    useOnceEffect(()=>{
        dispatch(getListUser({limit:5, page:1}));
    },[])

    useOnceEffect(()=>{
        if(detailUser){
            setImageUrl(detailUser.avatar_url)
            formUser.setFieldsValue({...detailUser,password:PASSWORD_HIDDEN, comfirm_password:PASSWORD_HIDDEN})
        }
    },[detailUser])


    const handleUploadFile = async (info) => {
        await setLoading(true);
        const res = await uploadFileCloudinary(info.file, "my-uploads");
        await setLoading(false);
        if (res.url){
            setImageUrl(res.url)
        }
    };

    const handleTableChange = (newPagination, filters, sorter) => {
        const {current, pageSize} = newPagination;
        dispatch(getListUser({limit:pageSize, page:current}));
    };

    const handleGetDetailUser =(user)=>{
        dispatch(getDetailUser(user.id))

    }

    const handleDeleteUser =(user)=>{
        dispatch(deleteUser(user.id));
    }

    const handleSearchUser =(values)=>{
        const {username_email} = values;
        dispatch(getListUser({limit:limit, page:1, keyword:username_email}));
    }

    const handleSubmit = (values) => {
        if(detailUser) {
           dispatch(updateUser({...values, avatar_url:imageUrl, role:values.role??0, id: detailUser.id}))
        }
        else{
            dispatch(createUser({...values, avatar_url:imageUrl, role:values.role??0}))
        }
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
        render: (role)=>(<Tag color={role==1? "geekblue" : "green"} key={role}>
                        {ROLE_USER[role].value}
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
                <Button onClick={()=>handleGetDetailUser(record)} type="primary">Update</Button>
                <Popconfirm
                    title="Are you sure to delete this user?"
                    onConfirm={()=>handleDeleteUser(record)}
                    onCancel={()=>{}}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="danger">Delete</Button>
                </Popconfirm>
            </Space>
          ),
      },
  ];

    return (
        <div>
            <div className="grid wide">
                <HeaderAdmin/>
                
                {/* List Post */}
                <div>
                    <div className="admin__list-post">LIST USER</div>
                    <Form
                        form={formSeachUser}
                        name="formSeachUser"
                        onFinish={handleSearchUser}
                    >
                        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                                <Form.Item noStyle>
                                    <Form.Item name="username_email" noStyle>
                                        <Input placeholder="Find by username, email, fullname" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Button
                                    style={{ textAlign: "center" , width:'100%'}}
                                    type="primary"
                                    htmlType="submit"
                                    onClick={() => {}}
                                >
                                    Seach
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    <Table
                         pagination={{current: page,
                            pageSize: limit,
                            total: total_record}}
                         columns={columns}
                         dataSource={items}
                        //  loading={loading}
                         onChange={handleTableChange}
                         key="id"
                    />
                </div>
                {/* Create user */}
                <div className="admin__create-post">{detailUser?"UPDATE USER":"CREATE USER"}</div>
                <Form form={formUser} onFinish={handleSubmit} name="formUser">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item>
                                        <label>{"1. Username"}</label>
                                        <Form.Item
                                            noStyle
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input username!",
                                                },
                                            ]}
                                        >
                                            <Input disabled={!detailUser?false:true} placeholder="Username of user" />
                                        </Form.Item>
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item>
                                        <label>{"2. Full name"}</label>
                                        <Form.Item
                                            noStyle
                                            name="full_name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input Name!",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Name of user" />
                                        </Form.Item>
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item>
                                        <label>{"3. Email"}</label>
                                        <Form.Item
                                            noStyle
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input email!",
                                                },
                                            ]}
                                        >
                                            <Input disabled={!detailUser?false:true} placeholder="Email of user" />
                                        </Form.Item>
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item>
                                        <label>{"4. Phone"}</label>
                                        <Form.Item
                                            noStyle
                                            name="phone"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input phone!",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Phone of user" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item>
                                        <label>{"5. Intro"}</label>
                                        <Form.Item
                                            noStyle
                                            name="intro"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input intro!",
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                rows={4}
                                                placeholder="Intro of user"
                                            />
                                        </Form.Item>
                                    </Form.Item>
                                    <Form.Item>
                                        <label>{"7. Password"}</label>
                                        <Form.Item
                                            noStyle
                                            name="password"
                                            rules={[
                                                {
                                                    required: detailUser?false:true,
                                                    message:
                                                        "Please input password!",
                                                },
                                            ]}
                                        >
                                            <Input disabled={!detailUser?false:true} type="password" placeholder="password of user" />
                                        </Form.Item>
                                    </Form.Item>
                                    <Form.Item>
                                        <label>{"Comfirm Password"}</label>
                                        <Form.Item
                                            noStyle
                                            name="comfirm_password"
                                            rules={[
                                                {
                                                    required: detailUser?false:true,
                                                    message:
                                                        "Please input password again!",
                                                },
                                            ]}
                                        >
                                            <Input disabled={!detailUser?false:true} type="password" placeholder="comfirm password of user" />
                                        </Form.Item>
                                    </Form.Item>
                                    <Form.Item>
                                    <label>{"9. Role"}</label>
                                        <Form.Item
                                            noStyle
                                            name="role"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please choose role!",
                                                },
                                            ]}
                                        >
                                            <Select defaultValue={detailUser?.role??0} placeholder="Role of user">
                                                {ROLE_USER.map((item, imdex)=><Option key={item.key} value={item.key}>{item.value}</Option>)}
                                            </Select>
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                    <Form.Item>
                                        <label>{"6. Profile"}</label>
                                        <Form.Item
                                            noStyle
                                            name="profile"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Please input profile!",
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                rows={4}
                                                placeholder="profile of user"
                                            />
                                        </Form.Item>
                                    </Form.Item>
                                  

                                    <Form.Item>
                                        <label>{"8. Avatar"}</label>
                                        <Form.Item
                                            noStyle
                                            name="avatar_url"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input avatar!",
                                                },
                                            ]}
                                        >
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
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Button
                        style={{marginRight:"10px"}}
                        type="primary"
                        htmlType="submit"
                        onClick={() => {}}
                    >
                        {detailUser?"Update":"Create"}
                    </Button>
                    <Button
                        danger 
                        htmlType="reset"
                        onClick={() =>{dispatch(clearDetailUser()); setImageUrl(null)}}
                    >
                        {"Reset"}
                    </Button>
                </Form>
                <div style={{ padding: 40 }}></div>

            </div>
        </div>
    );
}

export default UserPage;
