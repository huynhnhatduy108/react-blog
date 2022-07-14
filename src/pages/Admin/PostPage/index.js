import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import { adminRoutes } from "../../routes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {Col, Row,Button, Checkbox,Form,Input,DatePicker,Space,Select,message,Upload,Table,Tag,} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";

import DashboardPage from "../PostPage";
import CategoryPage from "../CategoryPage";
import TagPage from "../TagPage";
import UserPage from "../UserPage";
import LoginPage from "../LoginPage";
import "./style.css";
import {
    getDetailPostById,
    getListPost,
    getPostSlice,
} from "../../../features/Post/store/slice";
import { uploadFileCloudinary } from "../../../services/uploadFile";

const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

function PostPage() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const dispatch = useDispatch();
    const editorRef = useRef(null);
    const postStore = useSelector(getPostSlice);
    const { isFetching, listPost, detailPost, errors } = postStore;
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 9,
    });
    console.log("listPost", listPost);

    useEffect(() => {
        // dispatch(getListPost({detail:1}));
        // dispatch(getDetailPostById(1));
    }, []);


    const handleUploadFile = async (info) => {
        await setLoading(true);
        const res = await uploadFileCloudinary(info.file, "my-uploads");
        await setLoading(true);
        if (res.url) {
            setImageUrl(res.url);
        }
    };

    const handleTableChange = (newPagination, filters, sorter) => {
        // fetchData({
        //   sortField: sorter.field,
        //   sortOrder: sorter.order,
        //   pagination: newPagination,
        //   ...filters,
        // });
        setPagination(newPagination);
    };

    const handleSubmit =(values)=>{
        console.log(values);
        console.log("form", form.getFieldsValue());
        if (editorRef.current) {
        }

    }

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
            title: "Author",
            dataIndex: "author",
            key: "author",
        },
        {
            title: "Categories",
            dataIndex: "categories",
            key: "categories",
            render: (categories) => (
                <>
                    {categories.map((category, index) => {
                        let color = category.length > 5 ? "geekblue" : "green";
                        if (category === "loser") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={category}>
                                {category.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
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
            title: "Thumbnail",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (thumbnail) => (
                <img
                    style={{ width: 80, height: 50, objectFit: "cover" }}
                    src={thumbnail}
                />
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary">Update</Button>
                    <Button type="danger">Delete</Button>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            author: "John Brown",
            title: "10 Blog Examples for Your",
            categories: ["code", "developer"],
            tags: ["react", "node"],
            thumbnail:
                "https://public.bnbstatic.com/static/academy/uploads/4ae6b499dfd3459592e79b822323259c.png",
        },
        {
            key: "2",
            title: "",
            author: "Jim Green",
            title: "London No. 1 Lake Park",
            categories: ["lifestyle", "developer"],
            tags: ["loser", "python"],
            thumbnail:
                "https://img.freepik.com/free-vector/hand-painted-watercolor-galaxy-background_52683-63441.jpg",
        },
        {
            key: "3",
            author: "Joe Black",
            title: "10 Blog Examples for Your",
            categories: ["lifestyle", "developer", "hacking"],
            tags: ["cool", "teacher", "hacking"],
            thumbnail:
                "https://public.bnbstatic.com/static/academy/uploads/c5ee3a6ef69847dda30cdf3e0dfa123e.png",
        },
        {
            key: "11",
            author: "John Brown",
            title: "10 Blog Examples for Your",
            categories: ["code", "developer"],
            tags: ["react", "node"],
            thumbnail:
                "https://public.bnbstatic.com/static/academy/uploads/4ae6b499dfd3459592e79b822323259c.png",
        },
        {
            key: "12",
            title: "",
            author: "Jim Green",
            title: "London No. 1 Lake Park",
            categories: ["lifestyle", "developer"],
            tags: ["loser", "python"],
            thumbnail:
                "https://img.freepik.com/free-vector/hand-painted-watercolor-galaxy-background_52683-63441.jpg",
        },
        {
            key: "13",
            author: "Joe Black",
            title: "10 Blog Examples for Your",
            categories: ["lifestyle", "developer", "hacking"],
            tags: ["cool", "teacher", "hacking"],
            thumbnail:
                "https://public.bnbstatic.com/static/academy/uploads/c5ee3a6ef69847dda30cdf3e0dfa123e.png",
        },
        {
            key: "21",
            author: "John Brown",
            title: "10 Blog Examples for Your",
            categories: ["code", "developer"],
            tags: ["react", "node"],
            thumbnail:
                "https://public.bnbstatic.com/static/academy/uploads/4ae6b499dfd3459592e79b822323259c.png",
        },
        {
            key: "22",
            title: "",
            author: "Jim Green",
            title: "London No. 1 Lake Park",
            categories: ["lifestyle", "developer"],
            tags: ["loser", "python"],
            thumbnail:
                "https://img.freepik.com/free-vector/hand-painted-watercolor-galaxy-background_52683-63441.jpg",
        },
        {
            key: "23",
            author: "Joe Black",
            title: "10 Blog Examples for Your",
            categories: ["lifestyle", "developer", "hacking"],
            tags: ["cool", "teacher", "hacking"],
            thumbnail:
                "https://public.bnbstatic.com/static/academy/uploads/c5ee3a6ef69847dda30cdf3e0dfa123e.png",
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
                            <img
                                className="admin__user-img"
                                src={
                                    "https://gtjai.com.vn/wp-content/uploads/2021/07/avt.png"
                                }
                            />
                        </div>
                        <div className="admin__user-name">nhatduy</div>
                        <div className="admin__user-logout">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </div>
                    </div>
                </div>

                <div>
                    {/* List Post */}
                    <div className="admin__list-post">LIST POST</div>
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
                                        style={{
                                            textAlign: "center",
                                            width: "100%",
                                        }}
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
                        pagination={pagination}
                        columns={columns}
                        dataSource={data}
                        loading={loading}
                        onChange={handleTableChange}
                    />

                    {/* Create post */}
                    <div className="admin__create-post">CREATE POST</div>
                    <Form form={form}  onFinish={handleSubmit}>
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
                                    <Form.Item>
                                        <Form.Item
                                        noStyle
                                            name="title"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input Title!",
                                                },
                                            ]}
                                        >
                                            <label>{"1. Title"}</label>
                                            <Input placeholder="Title of post" />
                                        </Form.Item>
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
                                            name="category"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input category!",
                                                },
                                            ]}
                                        >
                                            <label>{"5. Category"}</label>
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
                                            name="sumary"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input sumary!",
                                                },
                                            ]}
                                        >
                                            <label>{"7. Sumary"}</label>
                                            <TextArea
                                                rows={7}
                                                placeholder="Sumary of post"
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
                                    name="tag"
                                    rules={[
                                        {
                                            required: false,
                                            message:
                                                "Please input tag!",
                                        },
                                    ]}
                                >
                                    <label>{"6. Tag"}</label>
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
                                            name="thumbnail"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input thumbnail!",
                                                },
                                            ]}
                                        >
                                            <label>{"8. thumbnail"}</label>
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="thumbnail-post-upload"
                                                showUploadList={false}
                                                beforeUpload={() => false}
                                                onChange={handleUploadFile}
                                            >
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt="avatar"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                ) : (
                                                    uploadButton
                                                )}
                                            </Upload>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={24}
                                        xl={24}
                                    >
                                        <Form.Item
                                            name="content"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        "Please input content!",
                                                },
                                            ]}
                                        >
                                            <label>{"9. Content"}</label>
                                            <Editor
                                                onInit={(evt, editor) =>
                                                    (editorRef.current = editor)
                                                }

                                                apiKey="n1gm5s2923aec5q1x6xgk9hyq48eoabd7qtuwhkd357rr0xx"
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
                                        </Form.Item>
                                       
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Button type="primary" htmlType="submit">
                            Summit
                        </Button>
                    </Form>
                </div>
                <div style={{ padding: 40 }}></div>
            </div>
        </div>
    );
}

export default PostPage;
