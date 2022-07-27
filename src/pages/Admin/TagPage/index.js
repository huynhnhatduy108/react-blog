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
    Popconfirm 
} from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearDetailTag, createTag, deleteTag, getDetailTag, getTagSlice, searchTag, updateTag } from "../../../features/Tag/store/slice";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { useOnceEffect } from "../../../hooks/useOneEffect";
const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

function TagPage() {
    const [formTag, formSeachTag] = Form.useForm();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const tagStore = useSelector(getTagSlice);
    const { isFetching, listTag, listTagSearch, detailTag, errors } = tagStore;
    const {items, limit, page, total_page, total_record} = listTagSearch;

    useOnceEffect(()=>{
        dispatch(searchTag({limit:5, page:1}));
    },[])

    useOnceEffect(()=>{
        if(detailTag){
            formTag.setFieldsValue(detailTag)
        }
    }, [detailTag])

    const handleTableChange = (newPagination, filters, sorter) => {
        const {current, pageSize} = newPagination;
        dispatch(searchTag({limit:pageSize, page:current}));
    };

    const handleSearchTag = (values) => {
        const {title_description} = values;
        dispatch(searchTag({limit:limit, page:1, keyword:title_description}));
    };

    const handleGetDetailTag =(tag)=>{
        dispatch(getDetailTag(tag.id))
    }

    const handleDeleteTag =(tag)=>{
        dispatch(deleteTag(tag.id))
    }

    const handleSubmit = (values) => {
        if(detailTag) {
           dispatch(updateTag({...values, id: detailTag.id}))
        }
        else{
            dispatch(createTag(values))
        }
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
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={()=>handleGetDetailTag(record)} type="primary">Update</Button>
                    <Popconfirm
                        title="Are you sure to delete this tag?"
                        onConfirm={()=>handleDeleteTag(record)}
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
                
                {/* List tag */}
                <div>
                    <div className="admin__list-post">LIST TAG</div>
                    <Form
                        form={formSeachTag}
                        name="formSeachTag"
                        onFinish={handleSearchTag}
                    >
                        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                <Form.Item noStyle>
                                    <Form.Item name="title_description" noStyle>
                                        <Input placeholder="Find by title, desciption" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Button
                                    style={{
                                        textAlign: "center",
                                        width: "100%",
                                    }}
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
                        loading={loading}
                        onChange={handleTableChange}
                        rowKey="id"
                    />
                    <div className="admin__create-post">{detailTag?"UPDATE TAG":"CREATE TAG"}</div>
                    <Form form={formTag} onFinish={handleSubmit} name="formTag">
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
                                                name="title"
                                                noStyle
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please input Title!",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Title of tag" />
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
                                            <label>{"2. Meta Title"}</label>
                                            <Form.Item
                                                noStyle
                                                name="meta_title"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            "Please input Meta Title!",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Meta Title of tag" />
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
                                            <label>{"3. Description"}</label>
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
                                                    placeholder="description of tag"
                                                />
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
                            {detailTag?"Update":"Create"}
                        </Button>
                        <Button
                            danger 
                            htmlType="reset"
                            onClick={() =>dispatch(clearDetailTag())}
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

export default TagPage;
