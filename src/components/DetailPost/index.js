import React from "react";
import "./style.css";
import CommentPost from "./../../components/Comment";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import moment from 'moment';

function DetailPost(props) {
    const {widget, detailPost, navigate, listComment } = props;

    return (
        <div className="detail__post">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="col l-8 m-12 c-12">
                        <div className="detail">
                            <div className="detail__title">
                                <h1>
                                    {detailPost?.title}
                                </h1>
                            </div>
                            <div className="detail__author">
                                <div className="detail__author-left">
                                    <div className="author__avatar">
                                        <img src={detailPost?.author_avatar} alt={detailPost?.author_name}/>
                                    </div>
                                    <div className="author__create">
                                        <span className="author__create-name">{detailPost?.author_name}</span>
                                        <span className="author__create-day">{moment(detailPost?.published_at).format('DD/MM/YYYY')}</span>
                                        <div className="author__create-line"></div>
                                        <span className="author__create-time">{moment(detailPost?.published_at).format('HH:MM')}</span>
                                    </div>
                                </div>
                                <div className="detail__author-right">
                                    <div className="author__comments-post">
                                        <span className="author__comments-post-span"><i className="fa-solid fa-comment"></i> 4</span>
                                    </div>
                                    <div className="author__views-post">
                                        <span className="author__views-post-span"><i className="fa-solid fa-eye"></i> 11.12k</span>
                                    </div>
                                </div>

                            </div>
                            <div className="detail__thumnail">
                                <img src={detailPost?.thumbnail} alt={detailPost?.author_name}/>
                            </div>
                            <div className="detail__content">
                                 <div dangerouslySetInnerHTML={{ __html: detailPost?.content }} />
                            </div>
                            <div className="detail__list-tags">
                                {detailPost?.tags.length &&
                                detailPost?.tags.map((item, index) => (
                                    <div
                                        className="search__tags-item"
                                        key={item.tag_id}
                                        onClick={()=>navigate(`/search?tag=${item.tag_id}`)}
                                    >
                                        <div className="">
                                            {`#${item.slug}`}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="detail__share">
                                <div className="detail__share-text">Share :</div>
                                <FacebookShareButton url={window.location.href}
                                                    quote={"Blog info currency"}
                                                    hashtag={"#duyblog"}
                                                    description={"aiueo"}
                                                    >
                                <div className="detail__share-facebook detail__share-icon"><i className=" fa-brands fa-facebook-f"></i> </div>
                                </FacebookShareButton>
                                <div className="detail__share-twitter detail__share-icon"><i className=" fa-brands fa-twitter"></i></div>
                                <EmailShareButton >
                                <div className="detail__share-email detail__share-icon"><i className=" fa-solid fa-envelope"></i></div>
                                </EmailShareButton>
                                <LinkedinShareButton title={'LinkedIn share test'}
                                    url={window.location.href}
                                    summary={'LinkedIn share demo test'}
                                    description={'LinkedIn share demo test'}>
                                <div className="detail__share-linked detail__share-icon"><i className=" fa-brands fa-linkedin-in"></i></div>
                                </LinkedinShareButton>
                            </div>
                        </div>
                        <div className="comment__post">
                            <CommentPost listComment={listComment} post_id={detailPost?.post_id}/>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12">
                        <div className="detail__widget">
                           {widget}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default DetailPost;
