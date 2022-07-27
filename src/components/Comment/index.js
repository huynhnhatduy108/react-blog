import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCommentToPost } from "../../features/Comment/store/slice";
import "./style.css";
import ImgUserDefault from './../../assets/img/defaultuser.png';
import moment from "moment";
import { useOnceEffect } from "../../hooks/useOneEffect";

function Comment(props) {
    const {post_id,listComment } = props;
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [contentComment, setContentComment] = useState("");
    const [contentReply, setContentReply] = useState("");

    useOnceEffect(()=>{
        const term = listComment.map(item=> {return{...item,isAnswer: false}})
        setComments(term);
        
    }, [listComment])

    const handleSendComment = async (comment_id)=>{
        if (!(comment_id?contentReply:contentComment)) return
        const data = {
            post_id:post_id,
            parent:comment_id,
            content:comment_id?contentReply:contentComment
        }
        // console.log("data", data);
        await dispatch(userCommentToPost(data));
        setContentComment("");
        setContentReply("");
    }

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


    return (
        <div className="comment">
            <div className="comment__title">
                <h3 className="comment__title-h3">COMMENT</h3>
            </div>
            <div className="comment__area">
                <div className="comment__area-text">
                    <textarea onChange={(event)=>setContentComment(event.target.value)} placeholder="Input content to comment..." value={contentComment}>{contentComment}</textarea>
                </div>
                <div className="comment__sent">
                    <button className="comment__sent-button" onClick={()=>handleSendComment(undefined)}>
                        <i className="fa-solid fa-paper-plane"></i> Send
                    </button>
                </div>
            </div>
            <div className="comment__line"></div>
            <div className="comment__list">
                {comments?.length?comments?.map((item)=>
                    <div className="comment__items-container" key={item.comment_id}>
                        <div className="comment__items">
                            <div className="user__comment">
                                <div className="user__comment-avatar">
                                    <img src={item.user_avatar??ImgUserDefault} />
                                </div>
                                <div className="user__comment-info">
                                    <div className="user__comment-name">
                                        {item.user_name?`${item.user_name} (Admin)`:"User"}
                                    </div>
                                    <div className="user__comment-time">
                                        {moment(item.created_at).format("DD/MM/YYYY - HH:mm")}
                                    </div>
                                </div>
                            </div>
                            <div className="comment__content">
                                <textarea disabled value={item.content}>{item.content}</textarea>                                   
                                {/* </p> */}
                                <div className="comment__content-reply">
                                    <button
                                        onClick={()=>handleClickReply(item.comment_id)}
                                        className="comment__content-reply-button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="12"
                                            viewBox="0 0 12 10.8"
                                        >
                                            <path
                                                id="chat"
                                                d="M3.48,8.32V4.6H1.2A1.2,1.2,0,0,0,0,5.8V9.4a1.2,1.2,0,0,0,1.2,1.2h.6v1.8l1.8-1.8h3A1.2,1.2,0,0,0,7.8,9.4V8.308a.574.574,0,0,1-.12.013H3.48ZM10.8,1.6H5.4A1.2,1.2,0,0,0,4.2,2.8V7.6H8.4l1.8,1.8V7.6h.6A1.2,1.2,0,0,0,12,6.4V2.8a1.2,1.2,0,0,0-1.2-1.2Z"
                                                transform="translate(0 -1.6)"
                                                fill="#707070"
                                            ></path>
                                        </svg>{" "}
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Answer */}
                        {item?.sub_comment?.length?
                            item?.sub_comment?.map((sub)=>
                                <div className="comment__items-reply" key={sub.comment_id}>
                                    <div className="user__comment">
                                        <div className="user__comment-avatar">
                                            <img src={sub.user_avatar??ImgUserDefault} />
                                        </div>
                                        <div className="user__comment-info">
                                            <div className="user__comment-name">
                                                {sub.user_name?`${sub.user_name} (Admin)`:"User"}
                                            </div>
                                            <div className="user__comment-time">
                                                {moment(sub.created_at).format("DD/MM/YYYY - HH:mm")}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment__content">
                                        <textarea disabled value={sub.content}>{sub.content}</textarea>
                                    </div>
                            </div>
                            ):""}
                        {/* Reply all */}
                        {item.isAnswer ? (
                            <div className="comment__items-answer">
                                <div className="comment__area">
                                    <div className="comment__area-text">
                                        <textarea value={contentReply} onChange={(event)=>setContentReply(event.target.value)} placeholder="Input content to comment...">{contentReply}</textarea>
                                    </div>
                                    <div className="comment__sent">
                                        <button className="comment__sent-button" onClick={()=>handleSendComment(item.comment_id)}>
                                            <i className="fa-solid fa-paper-plane"></i> Send
                                        </button>
                                    </div>
                                </div>
                                <div className="comment__close-tab" onClick={()=>handleClickReply(item.comment_id)}><i className="fa-solid fa-x"></i></div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                ):""}
            </div>
            {/* <div className="comment__loadmore">
                <button className="comment__loadmore-button">Load more</button>
            </div> */}
        </div>
    );
}

export default Comment;
