import React from "react";
import "./style.css";
import moment from 'moment';
import { plainText } from "../../utils/helper";
import { useQuery } from "../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { readMorePostUserSeach } from "../../features/Post/store/slice";
import { useRef } from "react";

function ListSearch(props) {
    const {listPostUserSearch, listCategory, listTag, navigate} = props;

    const dispatch = useDispatch();
    const query = useQuery();
	const keyword = query.get("keyword");
    const category = query.get("category");
    const tag = query.get("tag");
    const listSearchRef = useRef()

    const {items, limit, page, total_page, total_record, isFetching } = listPostUserSearch;

    const handleReadMore = ()=>{
        dispatch(readMorePostUserSeach({detail:1, limit:limit, page:page+1, is_pagination:1, keyword:keyword, category:category, tag:tag }))
        // window.scrollTo(0, window.pageYOffset)
    }


    return (
        <div className="list__search" id="listPostSearch" ref={listSearchRef}>
            {/* <button onClick={()=>console.log(window.pageYOffset)}>check height</button> */}
            <div className="grid wide">
                <div className="row no-gutters">
                    {items?.length && items.map((item, index)=>
                        <div className="col l-4 m-6 c-12" key={item.post_id}>
                        <div className="post" onClick={()=>{navigate(`/p/${item?.slug}`); window.scroll(0,0)}}>
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
                                        {item.comment_count??0} comments
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}
                </div>
                <div className="list__search-loadmore">
                    {page>= total_page?"":<button className="loadmore__button" onClick={handleReadMore}>Read more</button>}
                </div>
            </div>
        </div>
    );
}

export default ListSearch;
