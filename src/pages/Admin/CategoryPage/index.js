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

function CategoryPage() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleUploadFile = async (info) => {
        await setLoading(true);
        const res = await uploadFileCloudinary(info.file, "my-uploads");
        await setLoading(true);
        if (res.url){
            setImageUrl(res.url)
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
      {
        title: "thumbnail",
        dataIndex: "thumbnail",
        key: "thumbnail",
        render: (thumbnail) => <img style={{width:80, height:50, objectFit:"cover"}} src={thumbnail}/>,
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
                    {/* List category */}
                    <div className="admin__list-post">LIST CATEGORY</div>
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                            <Input placeholder="Find by title, description" />
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Button
                                style={{ textAlign: "center", width: "100%" }}
                                type="primary"
                                onClick={() => {}}
                            >
                                Seach
                            </Button>
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={data}
                    />
                    {/* Create category */}
                    <div className="admin__create-post">CREATE CATEGORY</div>
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
                                            <Input placeholder="Title of post" />
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
                                            name="parent"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input Title!",
                                                },
                                            ]}
                                        >
                                            <label>{"2. Parent"}</label>
                                            <Input placeholder="Parent of post" />
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
                                            name="desciption"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input desciption!",
                                                },
                                            ]}
                                        >
                                            <label>{"3. Desciption"}</label>
                                            <TextArea
                                                rows={4}
                                                placeholder="Desciption of category"
                                            />
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
                                            // label="Meta-Title"
                                            name="meta_title"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input meta_title!",
                                                },
                                            ]}
                                        >
                                            <label>{"4. Meta-Title"}</label>
                                            <Input placeholder="Meta-Title of post" />
                                        </Form.Item>
                                        <Form.Item
                                            name="thumbnail"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input thumbnail!",
                                                },
                                            ]}
                                        >
                                            <label>{"5. thumbnail"}</label>
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="thumbnail-category-upload"
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
                </div>
                <div style={{ padding: 40 }}></div>
            </div>
        </div>
    );
}

export default CategoryPage;
