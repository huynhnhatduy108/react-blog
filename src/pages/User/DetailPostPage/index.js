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
import { useOnceEffect } from "../../../hooks/useOneEffect";
import PostNotExist from "../../../components/PostNotExist";
import Loading from "../../../components/Loading";

function PostDetailPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {slug} = useParams();

    const postStore = useSelector(getPostSlice);
    const tagStore = useSelector(getTagSlice);
    const commentStore = useSelector(getCommentSlice);

    const {listPostUserSearch, detailPost, listPostRelation, isFetching ,isFetchPost, list, listCoinChart} = postStore;
    const {listTag} = tagStore;
    const {listComment} = commentStore;

    useOnceEffect(()=>{
        if (slug){
            dispatch(getDetailPostBySlug(slug))
        }
    },[slug])

    return (
        <div className="post__page">
            <Header/>
          {isFetchPost?
          <div style={{height:"70vh", position:"relative"}}>
              <div style={{top:"50%", left:"50%", transform:"translate(-50% ,-50%)",position:"absolute"}}><Loading/></div>
          </div>:detailPost?
            <div>
                <div className="gap-50"></div>
                <DetailPost listComment={listComment} detailPost={detailPost} navigate={navigate} listTag={listTag} widget={<Widget listCoinChart={listCoinChart} chart={true} navigate={navigate} listTag={listTag} />}/>
                <div className="gap-40"></div>
                    <SildePost navigate={navigate} listPostRelation={listPostRelation}/>
                <div className="gap-50"></div>
            </div>:
            <PostNotExist navigate={navigate}/>}
            <Footer/>
        </div>
    );
}

export default PostDetailPage;
