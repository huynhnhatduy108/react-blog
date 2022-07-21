import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailPost from "../../../components/DetailPost";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Widget from "../../../components/widget";
import { getCategorySlice } from "../../../features/Category/store/slice";
import { getDetailPostBySlug, getPostSlice } from "../../../features/Post/store/slice";
import { getListTag, getTagSlice } from "../../../features/Tag/store/slice";
import { useNavigate, useParams  } from 'react-router-dom';
import SildePost from "../../../components/SildePost";
import { getCommentSlice } from "../../../features/Comment/store/slice";

function PostPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {slug} = useParams();

    const postStore = useSelector(getPostSlice);
    const tagStore = useSelector(getTagSlice);
    const categoryStore = useSelector(getCategorySlice);
    const commentStore = useSelector(getCommentSlice);

    const {listPostUserSearch, detailPost, listPostRelation} = postStore;
    const {listCategory} = categoryStore;
    const {listTag} = tagStore;
    const {listComment} = commentStore;
    const {items, limit, page, total_page, total_record, isFetching } = listPostUserSearch;

    useEffect(()=>{
        if (!listTag.length){
            dispatch(getListTag());
        }
        if (slug){
            dispatch(getDetailPostBySlug(slug))
        }
    },[slug])

    return (
        <div className="post__page">
            <Header/>
            <div className="gap-50"></div>
            <DetailPost listComment={listComment} detailPost={detailPost} navigate={navigate} listTag={listTag} widget={<Widget chart={true} navigate={navigate} listTag={listTag} />}/>
            <div className="gap-40"></div>
                <SildePost navigate={navigate} listPostRelation={listPostRelation}/>
            <div className="gap-50"></div>
            <Footer/>
        </div>
    );
}

export default PostPage;
