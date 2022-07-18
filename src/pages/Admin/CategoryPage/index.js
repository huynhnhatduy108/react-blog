import React, { useEffect, useState } from "react";
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
import "./style.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { uploadFileCloudinary } from "../../../services/uploadFile";
import { useDispatch, useSelector } from "react-redux";
import { clearDetailCategory, createCategory, deleteCategory, getCategorySlice, getDetailCategory, searchCategory, updateCategory } from "../../../features/Category/store/slice";
const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

function CategoryPage() {
    const [formCategory, formSeachCategory] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const dispatch = useDispatch();
    const categoryStore = useSelector(getCategorySlice);
    const { isFetching, listTag, listCategorySearch, detailCategory, errors } = categoryStore;
    const {items, limit, page, total_page, total_record} = listCategorySearch;

    useEffect(()=>{
        dispatch(searchCategory({limit:5, page:1}));
    },[])

    useEffect(()=>{
        if(detailCategory){
            setImageUrl(detailCategory.thumbnail)
            formCategory.setFieldsValue(detailCategory)
        }
    }, [detailCategory])

    const handleUploadFile = async (info) => {
        await setLoading(true);
        const res = await uploadFileCloudinary(info.file, "my-uploads");
        await setLoading(true);
        if (res.url){
            setImageUrl(res.url)
        }
    };

    const handleTableChange = (newPagination, filters, sorter) => {
        const {current, pageSize} = newPagination;
        dispatch(searchCategory({limit:pageSize, page:current}));
      };

    const handleSearchCategory = (values) => {
        const {title_description} = values;
        dispatch(searchCategory({limit:limit, page:1, keyword:title_description}));
    };

    const handleGetDetailCategory =(category)=>{
        dispatch(getDetailCategory(category.id))
    }

    const handleDeleteCategory =(category)=>{
        dispatch(deleteCategory(category.id))
    }

    const handleSubmit = (values) => {
        if(detailCategory) {
           dispatch(updateCategory({...values, thumbnail:imageUrl,id: detailCategory.id}))
        }
        else{
            dispatch(createCategory({...values,thumbnail:imageUrl}))
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
                   <Button type="primary" onClick={()=>handleGetDetailCategory(record)} >
                      Update
                  </Button>
                  <Popconfirm
                        title="Are you sure to delete this category?"
                        onConfirm={()=>handleDeleteCategory(record)}
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
                              <img className="admin__user-img" src={"https://gtjai.com.vn/wp-content/uploads/2021/07/avt.png"}/>
                          </div>
                          <div className="admin__user-name">
                              nhatduy
                          </div>
                          <div className="admin__user-logout">
                              <i className="fa-solid fa-arrow-right-from-bracket"></i>
                          </div>
                      </div>
                  </div>

                <div>
                    {/* List category */}
                    <div className="admin__list-post">LIST CATEGORY</div>
                    <Form
                        form={formSeachCategory}
                        name="formSeachCategory"
                        onFinish={handleSearchCategory}
                    >
                    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                            <Form.Item noStyle>
                                <Form.Item name="title_description" noStyle>
                                    <Input placeholder="Find by title, description" />
                                </Form.Item>
                            </Form.Item>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Button
                                style={{ textAlign: "center", width: "100%" }}
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
                        // loading={loading}
                        onChange={handleTableChange}
                        key="id"
                    />
                    {/* Create category */}
                    <div className="admin__create-post">{detailCategory?"UPDATE CATEGORY":"CREATE CATEGORY"}</div>
                    <Form form={formCategory} onFinish={handleSubmit} name="formCategory">
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
                                    <Form.Item >
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
                                        <Form.Item >
                                            <label>{"2. Parent"}</label>
                                            <Form.Item
                                                noStyle
                                                name="parent"
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
                                        <Form.Item >
                                            <label>{"3. Meta-Title"}</label>
                                            <Form.Item
                                                noStyle
                                                name="meta_title"
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

                                        <Form.Item >
                                            <label>{"4. description"}</label>
                                            <Form.Item
                                                noStyle
                                                name="description"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input description!",
                                                    },
                                                ]}
                                            >
                                                <TextArea
                                                    rows={4}
                                                    placeholder="description of category"
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
                                       <Form.Item >
                                         <label>{"5. thumbnail"}</label>
                                            <Form.Item
                                                noStyle
                                                name="thumbnail"
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
                                        </Form.Item>

                                    </Col>
                                </Row>
                               
                            </Col>
                        </Row>
                        <Button  style={{marginRight:"10px"}}
                             type="primary" htmlType="submit" onClick={() => {}}>
                            {detailCategory?"Update":"Create"}
                        </Button>
                        <Button
                            danger 
                            htmlType="reset"
                            onClick={() =>{dispatch(clearDetailCategory());setImageUrl(null)}}
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

export default CategoryPage;
