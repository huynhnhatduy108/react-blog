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
    Modal,
    Popconfirm,
} from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { adminCommentReply, deleteComment, deleteCommentByPostId, getCommentSlice, listCommentByPost } from "../../../features/Comment/store/slice";
import { getListPost, getPostSlice } from "../../../features/Post/store/slice";
import ImgUserDefault from './../../../assets/img/defaultuser.png';
import HeaderAdmin from "../../../components/HeaderAdmin";
import { useOnceEffect } from "../../../hooks/useOneEffect";

const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

function CommentPage() {
    const [formSeachComment] = Form.useForm();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [visibleModel, setVisibleModel] = useState(false);
    const [currentPost, setCurrentPost ] = useState({});

    const [comments, setComments] = useState([]);
    const [contentComment, setContentComment] = useState("");
    const [contentReply, setContentReply] = useState("");

    const commentStore = useSelector(getCommentSlice);
    const postStore = useSelector(getPostSlice);
    const {listComment} = commentStore;
    const { isFetching, listPostPaging, detailPost, errors } = postStore;
    const { items, limit, page, total_page, total_record } = listPostPaging;

    useOnceEffect(() => {
        dispatch(getListPost({ limit: limit, page: page ,detail: 0}));
    }, []);

    useOnceEffect(()=>{
        const temp = listComment.map(item=> {return{...item,isAnswer: false}})
        setComments(temp);
    },[listComment])

    const handleTableChange = (newPagination, filters, sorter) => {
        const { current, pageSize } = newPagination;
        dispatch(getListPost({ limit: pageSize, page: current }));
    };

    const handleSearchComment = (values) => {
        const { title_post } = values;
        dispatch(
            getListPost({
                detail: 0,
                limit: limit,
                page: 1,
                keyword: title_post,
            })
        );
    };
    
    const handleCancel = () => {
        setVisibleModel(!visibleModel);
        setContentComment("");
        setContentReply("");
    };

    const handleViewAllComment = (post) => {
        dispatch(listCommentByPost(post.post_id));
        setVisibleModel(!visibleModel);
        setCurrentPost(post);
    };

    const handleDeleteAllComment = (post) => {
        dispatch(deleteCommentByPostId(post.post_id))
    };

    const handleDeleteComment = (comment_id, comment_parent_id) => {
        dispatch(deleteComment({comment_id, comment_parent_id, post_id:currentPost.post_id}))
    };

    const handleSendComment = (comment_id) => {
        if (!(comment_id?contentReply:contentComment)) return
            const data = {
                post_id:currentPost.post_id,
                parent:comment_id,
                content:comment_id?contentReply:contentComment
        }
        dispatch(adminCommentReply(data))
    };

    const handleClickReply = (comment_id) =>{
        const index = comments.findIndex(item=> item.comment_id == comment_id)
        if (index>-1){
            const term = [...comments]
            if (term[index].isAnswer){
                term[index].isAnswer = !term[index].isAnswer;
                setComments(term);
            }
            else{
                const term = [...comments].map(item=>{return {...item, isAnswer:item.comment_id == comment_id}})
                setComments(term);
            }
            setContentReply("")
        }
    }

    const columns = [
        {
            title: "Post Title",
            dataIndex: "title",
            key: "title",
            render: (text) => <a>{text}</a>,
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
            title: "Comment",
            dataIndex: "comment_count",
            key: "comment_count",
            render: (text) => <>{text ?? 0}</>,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        onClick={() => handleViewAllComment(record)}
                        type="primary"
                    >
                        View comment
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete all comment?"
                        onConfirm={() => handleDeleteAllComment(record)}
                        onCancel={() => {}}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger">Delete all comment</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div className="grid wide">
                <HeaderAdmin/>

                <div>
                    {/* List tag */}
                    <div className="admin__list-post">LIST COMMENT</div>
                    <Form
                        form={formSeachComment}
                        name="formSeachComment"
                        onFinish={handleSearchComment}
                    >
                        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                <Form.Item noStyle>
                                    <Form.Item name="title_post" noStyle>
                                        <Input placeholder="Find by title post" />
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
                        pagination={{
                            current: page,
                            pageSize: limit,
                            total: total_record,
                        }}
                        columns={columns}
                        dataSource={items}
                        loading={loading}
                        onChange={handleTableChange}
                        rowKey="post_id"
                    />
                    <Modal
                        visible={visibleModel}
                        title={currentPost.title}
                        onCancel={handleCancel}
                        width="80%"
                        footer={[
                            <Button type="primary" onClick={handleCancel}>
                                Close
                            </Button>,
                        ]}
                    >
                       <div className="admin__comment" >
                        <p style={{fontWeight:"bold"}}>{"Comment Post >>"}</p>
                        <div className="admin__comment-form" style={{position:"relative"}}>
                            <TextArea rows={4} placeholder="Writing something to commment..." onChange={(event)=>setContentComment(event.target.value)} value={contentComment}></TextArea>
                            <Button type="primary" style={{position:"absolute", bottom:10, right: 10}} onClick={()=>handleSendComment(undefined)}>Send</Button>
                        </div>
                       </div>
                       {/* <br /> */}
                       <div style={{width:"80%",height: 2, backgroundColor:"#F3F4F6", margin:"10px auto"}}></div>
                       <div className="list__comment">
                            {comments?.length? comments?.map((item, index)=>
                                <div key={item.comment_id} style={{marginBottom:20}}>
                                     <Input.Group key={item.comment_id} className="admin__reply" style={{display:"flex",alignItems:"center", marginBottom:10, border:"1px solid #d9d9d9",  backgroundColor:"#f5f5f5"}}>
                                        <Col xs={2} style={{position:"relative"}}>
                                            <div style={{position: "absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)"}}>
                                                <img style={{width:40, height:40, borderRadius:"50%"}} src={item.user_avatar??ImgUserDefault}/>
                                                <p style={{margin:0}}>{item.user_name?`${item.user_name}`:"User"}</p>
                                            </div>
                                        </Col>
                                        <Col style={{flex:1, position:"relative"}}>
                                            <Input.TextArea style={{border:"none"}} disabled value={item.content} rows={4}/>
                                            <div style={{position:"absolute", top:5, right: 10, zIndex:2, color:"rgba(0, 0, 0, 0.25)"}}>{moment(item.created_at).format("DD/MM/YYYY - HH:mm")}</div>
                                            <Button type="primary" style={{position:"absolute", bottom:10, right: 90, zIndex:2}} onClick={()=>handleClickReply(item.comment_id)} >Reply</Button>
                                            <Popconfirm
                                                title="Are you sure to delete this comment?"
                                                onConfirm={() => handleDeleteComment(item.comment_id, item.comment_parent_id)}
                                                onCancel={() => {}}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Button danger type="primary" style={{position:"absolute", bottom:10, right: 10, zIndex:2}}>Delete</Button>
                                            </Popconfirm>
                                        </Col>
                                    </Input.Group>
                                    <div className="list__sub-comment" style={{marginLeft:10}}>
                                        {item?.sub_comment.map((sub, index)=>
                                            <Input.Group key={sub.comment_id} className="admin__reply" style={{display:"flex",alignItems:"center", marginBottom:10, border:"1px solid #d9d9d9",  backgroundColor:"#f5f5f5"}}>
                                                <Col xs={2} style={{position:"relative"}}>
                                                    <div style={{position: "absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", }}>
                                                        <img style={{width:40, height:40, borderRadius:"50%"}} src={sub.user_avatar??ImgUserDefault}/>
                                                        <p style={{margin:0}}>{sub.user_name?`${sub.user_name}`:"User"}</p>
                                                    </div>
                                                </Col>
                                                <Col style={{flex:1, position:"relative"}}>
                                                    <Input.TextArea style={{border:"none"}} disabled value={sub.content} rows={3}/>
                                                    <div style={{position:"absolute", top:5, right: 10, zIndex:2, color:"rgba(0, 0, 0, 0.25)"}}>{moment(sub.created_at).format("DD/MM/YYYY - HH:mm")}</div>
                                                    <Popconfirm
                                                        title="Are you sure to delete this comment?"
                                                        onConfirm={() => handleDeleteComment(sub.comment_id, sub.comment_parent_id)}
                                                        onCancel={() => {}}
                                                        okText="Yes"
                                                        cancelText="No"
                                                    >
                                                        <Button danger type="primary" style={{position:"absolute", bottom:10, right: 10, zIndex:2}}>Delete</Button>
                                                    </Popconfirm>
                                                </Col>
                                            </Input.Group>
                                        )}
                                    </div>
                                   {item.isAnswer ?<div className="admin__reply" style={{position:"relative", marginLeft:10}}>
                                        <TextArea rows={3} placeholder="Writing something to commment..." onChange={(event)=>setContentReply(event.target.value)} value={contentReply}></TextArea>
                                        <Button type="primary" style={{position:"absolute", bottom:10, right: 20}} onClick={()=>handleSendComment(item.comment_id)}>Send</Button>
                                    </div>:""}                               
                                </div>
                            ):""}
                       </div>     
                    </Modal>
                </div>
                <div style={{ padding: 40 }}></div>
            </div>
        </div>
    );
}

export default CommentPage;
