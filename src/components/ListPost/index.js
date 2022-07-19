import React from "react";
import "./style.css";
import Widget from "../widget";
import { plainText } from "../../utils/helper";
import moment from 'moment';
import { useDispatch } from "react-redux";
import { readMoreListPost } from "../../features/Post/store/slice";
import Loading from "../Loading";

function ListPost(props) {
    const {listTag, dataPost, pagination} = props;
    const { page, total_page, isFetching } = pagination;
    const dispatch = useDispatch();

    const handleReadMore = () =>{
        dispatch(readMoreListPost({detail:1, limit:pagination.limit, page:pagination.page+1, is_pagination:1}))
    }

    return (
        <div className="list__post">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="col l-8 m-12 c-12">
                        <div className="row no-gutters">
                            {dataPost?.length && dataPost.map((item, index)=>
                                <div className="col l-6 m-6 c-12" key={item.post_id}>
                                    <div className="post">
                                        <div className="post__img">
                                            <img
                                                className="post3__img-img"
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />
                                            <div className="post__img-publish">
                                                <p className="img__publish-day">
                                                     {moment(item.published_at).format('DD')}
                                                </p>
                                                <p className="img__publish-month">
                                                    {moment(item.published_at).format('MMMM')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="post__content">
                                            <div className="post__content-line"></div>
                                            <div className="post__content-categary cursor">
                                                {item.categories[0]?.title}
                                            </div>
                                            <div>
                                                <div className="post3__content-title">
                                                    <h3 className="post3__content-title-h3 font-25">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <div className="post3__content-text">
                                                    <p className="post3__content-text-p margin-0 text-justify">
                                                        {plainText(item.content)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="post__content-meta jt-ct-space-between align-center display-flex">
                                                <p className="post__content-meta-author color-gray margin-0">
                                                    BY{" "}
                                                    <a
                                                        className="text-strong cursor none-decoration color-black"
                                                        href="#"
                                                    >
                                                        {item.author_name}
                                                    </a>
                                                </p>
                                                <p className="post__content-meta-comment color-gray margin-0">
                                                    {/* {item.comment} */}
                                                    3 comments
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )} 
                        </div>
                        {isFetching?<Loading/>:""}
                        <div className="loadmore">
                            {page>= total_page?"":<button onClick={handleReadMore} className="loadmore__button">Read more</button>}
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12">
                        <Widget listTag={listTag}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPost;
