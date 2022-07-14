import React, {useState} from "react";
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
const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";


function TagPage() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total:20,
    });

    const handleTableChange = (newPagination, filters, sorter) => {
        // fetchData({
        //   sortField: sorter.field,
        //   sortOrder: sorter.order,
        //   pagination: newPagination,
        //   ...filters,
        // });
        setPagination(newPagination)
      };


    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Slug",
            dataIndex: "slug",
            key: "slug",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
      //   {
      //     title: "thumbnail",
      //     dataIndex: "thumbnail",
      //     key: "thumbnail",
      //     render: (thumbnail) => <img src={thumbnail}/>,
      //  },
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
            title: "John Brown",
            slug: "aa-dcdc",
            description:"scsc scv hdvv dvdvd vdvd",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&usqp=CAU" ,
        },
        {
            key: "2",
            title: "Jim Green",
            slug: "saa-dcdc",
            description:"scscs cvhdvc vcs scdv dvdv dvd",
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpvDL5s63lWuZM35sR4jgdQX_ly4QTBdTwpnJ5KNnBc62MeK8ZRCTHDc1ic3DYUS9KX8&usqp=CAU' ,
        },
        {
            key: "3",
            title: "Joe Black",
            slug: "saa-dcdc",
            description: "Sidney No. 1 Lake Park",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorW5mNrZbv0ozJ8mZ_u6OmM7rr__lwBc_egLGICefQ4H8tDOTlRf99m-9L1225F2k6QQ&usqp=CAU" ,
        },
        {
            key: "1",
            title: "John Brown",
            slug: "aa-dcdc",
            description:"scsc scv hdvv dvdvd vdvd",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&usqp=CAU" ,
        },
        {
            key: "2",
            title: "Jim Green",
            slug: "saa-dcdc",
            description:"scscs cvhdvc vcs scdv dvdv dvd",
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpvDL5s63lWuZM35sR4jgdQX_ly4QTBdTwpnJ5KNnBc62MeK8ZRCTHDc1ic3DYUS9KX8&usqp=CAU' ,
        },
        {
            key: "3",
            title: "Joe Black",
            slug: "saa-dcdc",
            description: "Sidney No. 1 Lake Park",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorW5mNrZbv0ozJ8mZ_u6OmM7rr__lwBc_egLGICefQ4H8tDOTlRf99m-9L1225F2k6QQ&usqp=CAU" ,
        },
        {
            key: "1",
            title: "John Brown",
            slug: "aa-dcdc",
            description:"scsc scv hdvv dvdvd vdvd",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYsviRv2XHdAXRCNnNknNl8K69vmw9hqhPQ&usqp=CAU" ,
        },
        {
            key: "2",
            title: "Jim Green",
            slug: "saa-dcdc",
            description:"scscs cvhdvc vcs scdv dvdv dvd",
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpvDL5s63lWuZM35sR4jgdQX_ly4QTBdTwpnJ5KNnBc62MeK8ZRCTHDc1ic3DYUS9KX8&usqp=CAU' ,
        },
        {
            key: "3",
            title: "Joe Black",
            slug: "saa-dcdc",
            description: "Sidney No. 1 Lake Park",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorW5mNrZbv0ozJ8mZ_u6OmM7rr__lwBc_egLGICefQ4H8tDOTlRf99m-9L1225F2k6QQ&usqp=CAU" ,
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
                  {/* List tag */}
                  <div className="admin__list-post">LIST TAG</div>
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                            <Input placeholder="Find by title, desciption" />
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Button
                                style={{ textAlign: "center" , width:"100%" }}
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
                    <div className="admin__create-post">CREATE TAG</div>
                    <Form>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={12}
                                        xl={12}
                                    >
                                        <Form.Item
                                            // label="Title"
                                            name="title"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input Title!",
                                                },
                                            ]}
                                        >
                                            <label>{"1. Title"}</label>
                                            <Input placeholder="Title of tag" />
                                        </Form.Item>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={12}
                                        xl={12}
                                    >
                                        <Form.Item
                                            // label="Parent"
                                            name="meta_title"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input Meta Title!",
                                                },
                                            ]}
                                        >
                                            <label>{"2. Meta Title"}</label>
                                            <Input placeholder="Meta Title of tag" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={12}
                                        xl={12}
                                    >
                                        <Form.Item
                                            name="description"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input description!",
                                                },
                                            ]}
                                        >
                                            <label>{"3. Description"}</label>
                                            <TextArea
                                                rows={4}
                                                placeholder="description of tag"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Button type="primary" onClick={() => {}}>
                            Summit
                        </Button>
                    </Form>
                    
                </div>
                <div style={{ padding: 40 }}></div>

            </div>
        </div>
    );
}

export default TagPage;
