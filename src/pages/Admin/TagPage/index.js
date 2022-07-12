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

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }

    return isJpgOrPng && isLt2M;
};

function TagPage() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }

        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
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
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Tags",
            key: "tags",
            dataIndex: "tags",
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? "geekblue" : "green";

                        if (tag === "loser") {
                            color = "volcano";
                        }

                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            tags: ["nice", "developer"],
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["loser"],
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"],
        },
    ];

    return (
        <div>
            <div className="grid wide">
                <div className="admin__header">
                    {adminRoutes.map((item, index) => (
                        <div key={index} className="admin__header-name">
                            <Link to={item.path}>{item.label}</Link>
                        </div>
                    ))}
                </div>

                <div>
                  {/* List tag */}
                  <div className="admin__list-post">LIST TAG</div>
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <Input placeholder="Find by title, content" />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={16} xl={16}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                                    <Select
                                        style={{ width: "100%" }}
                                        placeholder="Choose category"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">
                                            yiminghe
                                        </Option>
                                    </Select>
                                </Col>
                                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                                    <Select
                                        mode="multiple"
                                        style={{ width: "100%" }}
                                        placeholder="Choose tags"
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">
                                            yiminghe
                                        </Option>
                                    </Select>
                                </Col>
                                <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                                    <Button
                                        style={{ textAlign: "left" }}
                                        type="primary"
                                        onClick={() => {}}
                                    >
                                        Seach
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={data}
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
                                            <label>{"3. Meta-Title"}</label>
                                            <Input placeholder="Meta-Title of post" />
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
                                            // label="Published"
                                            name="published"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input published!",
                                                },
                                            ]}
                                        >
                                            <label>{"4. Published at"}</label>
                                            <Space
                                                direction="vertical"
                                                style={{ width: "100%" }}
                                            >
                                                <DatePicker
                                                    showTime
                                                    defaultValue={moment(
                                                        "2015/01/01",
                                                        dateFormat
                                                    )}
                                                    style={{ width: "100%" }}
                                                    placeholder="Date published at of post"
                                                />
                                            </Space>
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
                                            name="content"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input content!",
                                                },
                                            ]}
                                        >
                                            <label>{"5. Content"}</label>
                                            <TextArea
                                                rows={24}
                                                placeholder="Content of post"
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
                                            name="sumary"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input sumary!",
                                                },
                                            ]}
                                        >
                                            <label>{"6. Sumary"}</label>
                                            <TextArea
                                                rows={4}
                                                placeholder="Sumary of post"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="category"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input category!",
                                                },
                                            ]}
                                        >
                                            <label>{"7. Category"}</label>
                                            <Select placeholder="Category of post">
                                                <Option value="jack">
                                                    Jack
                                                </Option>
                                                <Option value="lucy">
                                                    Lucy
                                                </Option>
                                                <Option value="Yiminghe">
                                                    yiminghe
                                                </Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            name="tag"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input tag!",
                                                },
                                            ]}
                                        >
                                            <label>{"8. Tag"}</label>
                                            <Select
                                                mode="multiple"
                                                placeholder="Tag of post"
                                            >
                                                <Option value="jack">
                                                    Jack
                                                </Option>
                                                <Option value="lucy">
                                                    Lucy
                                                </Option>
                                                <Option value="Yiminghe">
                                                    yiminghe
                                                </Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            name="thumnail"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input thumnail!",
                                                },
                                            ]}
                                        >
                                            <label>{"9. Thumnail"}</label>
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="avatar-uploader"
                                                showUploadList={false}
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                beforeUpload={beforeUpload}
                                                onChange={handleChange}
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

export default TagPage;
