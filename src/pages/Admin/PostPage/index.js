import React, { useEffect, useState, useRef } from "react";
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
    Popconfirm,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import ReactQuill from "react-quill"; // ES6
import 'react-quill/dist/quill.snow.css';

import DashboardPage from "../PostPage";
import CategoryPage from "../CategoryPage";
import TagPage from "../TagPage";
import UserPage from "../UserPage";
import LoginPage from "../LoginPage";
import "./style.css";
import {
    clearDetailPost,
    createPost,
    deletePost,
    getDetailPostById,
    getListPost,
    getPostSlice,
    updatePost,
} from "../../../features/Post/store/slice";
import { uploadFileCloudinary } from "../../../services/uploadFile";
import { FomatDate } from "../../../utils/helper";
import { getListTag, getTagSlice } from "../../../features/Tag/store/slice";
import { getCategorySlice, getListCategory } from "../../../features/Category/store/slice";

const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

function PostPage() {
    const [formPost, formSeachPost] = Form.useForm();

    const dispatch = useDispatch();
    const editorRef = useRef(null);
    const postStore = useSelector(getPostSlice);
    const tagStore = useSelector(getTagSlice);
    const categoryStore = useSelector(getCategorySlice);

    const { isFetching, listPost, listPostPaging,detailPost, errors } = postStore;
    const {items, limit, page, total_page, total_record} = listPostPaging;

    const { listTag } = tagStore;
    const { listCategory } = categoryStore;

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [content, setContent] = useState("");

    useEffect(() => {
        dispatch(getListPost({detail:1, limit:limit, page:page}));
        dispatch(getListTag());
        dispatch(getListCategory());
    }, []);

    useEffect(()=>{
        if(detailPost){
            setImageUrl(detailPost.thumbnail)
            formPost.setFieldsValue({
                ...detailPost, 
                categories:detailPost.categories.map(category=>{return category.category_id}),
                tags:detailPost.tags.map(tag=>{return tag.tag_id}),
            })
        }
    }, [detailPost])


    const handleUploadFile = async (info) => {
        await setLoading(true);
        const res = await uploadFileCloudinary(info.file, "my-uploads");
        await setLoading(false);
        if (res.url) {
            setImageUrl(res.url);
        }
    };

    const handleTableChange = (newPagination, filters, sorter) => {
        const {current, pageSize} = newPagination;
        dispatch(getListPost({detail:1,limit:pageSize, page:current}));
    };

    const handleSearchPost = (values) => {
        const {title_or_content,tags,categories} = values;
        dispatch(getListPost({detail:1,limit:limit, page:page, keyword:title_or_content, tags, categories}));
    };

    const handleGetDetailPost =(post)=>{
        dispatch(getDetailPostById(post.post_id))
    }

    const handleDeletePost =(post)=>{
        dispatch(deletePost(post.post_id))
    }

    const handleSubmit = (values) => {
        const { title,categories, content, meta_title, parent, published, sumary, tags } = values;
        const data = {
                title,
                categories:categories??[], 
                content, 
                meta_title, 
                parent, 
                published:published?published.format("DD/MM/YYYY"):moment(new Date()).format("DD/MM/YYYY"), 
                sumary, 
                tags:tags??[], 
                thumbnail:imageUrl}
        
        console.log("data", data);
        if(detailPost) {
            dispatch(updatePost({...data, id: detailPost.post_id}))
         }
         else{
            dispatch(createPost(data))
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
            title: "Author",
            dataIndex: "author_name",
            key: "author_name",
        },
        {
            title: "Categories",
            dataIndex: "categories",
            key: "categories",
            render: (categories) => (
                <>
                    {categories.map((category, index) => {
                        let color = category.title.length > 5 ? "geekblue" : "green";
                        if (category === "loser") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={category.category_id}>
                                {category.title}
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
                        let color = tag.slug.length > 5 ? "geekblue" : "green";

                        if (tag === "loser") {
                            color = "volcano";
                        }

                        return (
                            <Tag color={color} key={tag.tag_id}>
                                {tag.slug}
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
                    <Button onClick={()=>handleGetDetailPost(record)} type="primary">Update</Button>
                    <Popconfirm
                        title="Are you sure to delete this post?"
                        onConfirm={()=>handleDeletePost(record)}
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
                    <Form form={formSeachPost} onFinish={handleSearchPost}>
                        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                <Form.Item noStyle>
                                    <Form.Item name="title_or_content" noStyle>
                                        <Input placeholder="Find by title, content" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={16} xl={16}>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={10}
                                        lg={10}
                                        xl={10}
                                    >
                                        <Form.Item noStyle>
                                            <Form.Item name="categories" noStyle>
                                                <Select
                                                    mode="multiple"
                                                    style={{ width: "100%" }}
                                                    placeholder="Choose category"
                                                >
                                                    {listCategory.map((category,index)=><Option key={category.id} value={category.id}>
                                                        {category.title}
                                                    </Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={10}
                                        lg={10}
                                        xl={10}
                                    >
                                        <Form.Item noStyle>
                                            <Form.Item name="tags" noStyle>
                                                <Select
                                                    mode="multiple"
                                                    style={{ width: "100%" }}
                                                    placeholder="Choose tags"
                                                >
                                                   {listTag.map((tag,index)=><Option key={tag.id} value={tag.id}>
                                                        {tag.title}
                                                    </Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                                        <Button
                                            style={{
                                                textAlign: "center",
                                                width: "100%",
                                            }}
                                            type="primary"
                                            htmlType="submit"
                                            // onClick={() => {}}
                                        >
                                            Seach
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>

                    <Table
                        pagination={{current: page,
                            pageSize: limit,
                            total: total_record}}
                        columns={columns}
                        dataSource={items}
                        loading={loading}
                        onChange={handleTableChange}
                        rowKey="post_id"
                    />

                    {/* Create post */}
                    <div className="admin__create-post">{detailPost?"UPDATE POST":"CREATE POST"}</div>
                    <Form form={formPost} onFinish={handleSubmit}>
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
                                            <label>{"1. Title"}</label>
                                            <Form.Item
                                                noStyle
                                                name="title"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please input Title!",
                                                    },
                                                ]}
                                            >
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
                                        <Form.Item>
                                            <label>{"2. Parent"}</label>
                                            <Form.Item
                                                name="parent"
                                                noStyle
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input Title!",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Parent of post" />
                                            </Form.Item>
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
                                        <Form.Item>
                                            <label>{"3. Meta-Title"}</label>
                                            <Form.Item
                                                name="meta_title"
                                                noStyle
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input meta_title!",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Meta-Title of post" />
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
                                        <Form.Item>
                                            <label>{"4. Published at"}</label>
                                            <Space
                                                    direction="vertical"
                                                    style={{ width: "100%" }}
                                                >
                                            <Form.Item
                                                name="published"
                                                noStyle
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input published!",
                                                    },
                                                ]}
                                            >                               
                                                <DatePicker
                                                    showTime
                                                    defaultValue={moment(
                                                        new Date(),
                                                        dateFormat
                                                    )}
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    placeholder="Date published at of post"
                                                />
                                            </Form.Item>
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
                                        <Form.Item>
                                            <label>{"5. Categories"}</label>
                                            <Form.Item
                                                name="categories"
                                                noStyle
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input category!",
                                                    },
                                                ]}
                                            >
                                                <Select mode="multiple" placeholder="Choose category of post">
                                                    {listCategory.map((category,index)=><Option key={category.id} value={category.id}>
                                                        {category.title}
                                                    </Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item>
                                            <label>{"7. Sumary"}</label>
                                            <Form.Item
                                                name="sumary"
                                                noStyle
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input sumary!",
                                                    },
                                                ]}
                                            >
                                                <TextArea
                                                    rows={7}
                                                    placeholder="Sumary of post"
                                                />
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
                                        <Form.Item>
                                            <label>{"6. Tags"}</label>
                                            <Form.Item
                                                noStyle
                                                name="tags"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input tag!",
                                                    },
                                                ]}
                                            >
                                                <Select
                                                    mode="multiple"
                                                    placeholder="Choose tag of post"
                                                >
                                                   {listTag.map((tag,index)=><Option key={tag.id} value={tag.id}>
                                                        {tag.title}
                                                    </Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Form.Item>
                                        <Form.Item>
                                            <label>{"8. thumbnail"}</label>
                                            <Form.Item
                                                name="thumbnail"
                                                noStyle
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input thumbnail!",
                                                    },
                                                ]}
                                            >
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
                                                                objectFit:
                                                                    "cover",
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
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={24}
                                        xl={24}
                                    >
                                        {/* <Form.Item>
                                            <label>{"9. Content"}</label>
                                            <Form.Item
                                                noStyle
                                                name="content"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please input content!",
                                                    },
                                                ]}
                                            >
                                                <ReactQuill
                                                    theme={"snow"}
                                                    placeholder={
                                                        "Write something..."
                                                    }
                                                    modules={{
                                                        toolbar: [
                                                            [
                                                                {
                                                                    header: [
                                                                        1,
                                                                        2,
                                                                        false,
                                                                    ],
                                                                },
                                                                { font: [] },
                                                            ],
                                                            [
                                                                "bold",
                                                                "italic",
                                                                "underline",
                                                                "strike",
                                                                "blockquote",
                                                            ],
                                                            [
                                                                {
                                                                    list: "ordered",
                                                                },
                                                                {
                                                                    list: "bullet",
                                                                },
                                                                {
                                                                    indent: "-1",
                                                                },
                                                                {
                                                                    indent: "+1",
                                                                },
                                                            ],
                                                            [
                                                                "link",
                                                                "image",
                                                                "video",
                                                            ],
                                                            ["clean"],
                                                        ],
                                                    }}
                                                    formats={[
                                                        "header",
                                                        "font",
                                                        "size",
                                                        "bold",
                                                        "italic",
                                                        "underline",
                                                        "strike",
                                                        "blockquote",
                                                        "list",
                                                        "bullet",
                                                        "indent",
                                                        "link",
                                                        "image",
                                                        "video",
                                                    ]}
                                                />
                                            </Form.Item>
                                        </Form.Item> */}
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
                            {detailPost?"Update":"Create"}
                        </Button>
                        <Button
                            danger 
                            htmlType="reset"
                            onClick={() =>dispatch(clearDetailPost())}
                        >
                            {"Reset"}
                        </Button>
                    </Form>
                </div>
                <div style={{ padding: 40 }}></div>
            </div>
        </div>
    );
}

export default PostPage;
