import React from "react";
import "./style.css";
import moment from 'moment';
import { plainText, scrollTo } from "../../utils/helper";

function IntroPost(props) {
    const { dataPost,navigate } = props;

    return (
        <div className="intro__post">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="col l-8 m-8 c-12">
                        <div className="post" onClick={()=>{navigate(`/p/${dataPost[0]?.slug}`); scrollTo()}}>
                            <div className="post__img">
                                <img
                                    className="post__img-img"
                                    src={dataPost[0]?.thumbnail}
                                    alt={dataPost[0]?.title}
                                />
                                <div className="post__img-publish">
                                    <p className="img__publish-day">
                                        {moment(dataPost[0]?.published_at).format('DD')}
                                    </p>
                                    <p className="img__publish-month">{moment(dataPost[0]?.published_at).format('MMMM')}</p>
                                </div>
                            </div>
                            <div className="post__content">
                                <div className="post__content-line-categary">
                                    <div className="post__content-line"></div>
                                    <div className="post__content-categary cursor">
                                        {dataPost[0]?.categories[0]?.title}
                                    </div>
                                </div>
                                <div>
                                    <div className="post__content-title">
                                        <h3 className="post__content-title-h3 font-25">
                                            {dataPost[0]?.title}
                                        </h3>
                                    </div>
                                    <div className="post__content-text">
                                        <p className="post__content-text-p margin-0 text-justify">
                                            {plainText(dataPost[0]?.content)}
                                        </p>
                                    </div>
                                </div>
                                <div className="post__content-meta jt-ct-space-between align-center display-flex">
                                    <p className="post__content-meta-author color-gray margin-0">
                                        BY{" "}
                                        <a
                                            className="text-strong cursor none-decoration color-black"
                                            // href="#"
                                        >
                                            {dataPost[0]?.author_name}
                                        </a>
                                    </p>
                                    <p className="post__content-meta-comment color-gray margin-0">
                                        {dataPost[0]?.comment_count??0} comments
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-4 c-12">
                        <div>
                            <div className="">
                                <div className="post" onClick={()=>{navigate(`/p/${dataPost[1]?.slug}`); scrollTo()}}>
                                    <div className="post__img">
                                        <img
                                            className="post2__img-img "
                                            src={dataPost[1]?.thumbnail}
                                            alt={dataPost[1]?.title}
                                            />
                                        <div className="post__img-publish">
                                            <p className="img__publish-day">
                                                {moment(dataPost[1]?.published_at).format('DD')}
                                            </p>
                                            <p className="img__publish-month">
                                                {moment(dataPost[1]?.published_at).format('MMMM')}
                                            </p>
                                        </div>
                                    </div>  
                                    <div className="post__content">
                                        <div className="post__content-line-categary">
                                            <div className="post__content-line"></div>
                                            <div className="post__content-categary cursor display_mobile">
                                                {dataPost[1]?.categories[0]?.title}
                                            </div>
                                        </div>

                                        <div className="post2__content-title">
                                            <h3 className="post2__content-title-h3">
                                                {dataPost[1]?.title}
                                            </h3>
                                        </div>
                                        <div className="post2__content-text">
                                            <p className="post2__content-text-p margin-0 text-justify display_mobile">
                                                {plainText(dataPost[0]?.content)}
                                            </p>
                                        </div>
                                        <div className="post__content-meta jt-ct-space-between align-center">
                                            <p className="post__content-meta-author color-gray margin-0">
                                                BY{" "}
                                                <a
                                                    className="text-strong cursor none-decoration color-black"
                                                    href="#"
                                                >
                                                    {dataPost[1]?.author_name}
                                                </a>
                                            </p>
                                            <p className="post__content-meta-comment color-gray margin-0">
                                                {dataPost[1]?.comment_count??0} comments
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="post" onClick={()=>{navigate(`/p/${dataPost[2]?.slug}`); scrollTo()}}>
                                    <div className="post__img">
                                        <img
                                            className="post2__img-img"
                                            src={dataPost[2]?.thumbnail}
                                            alt={dataPost[2]?.title}
                                        />
                                        <div className="post__img-publish">
                                            <p className="img__publish-day">
                                                {moment(dataPost[2]?.published_at).format('DD')}
                                            </p>
                                            <p className="img__publish-month">
                                                {moment(dataPost[2]?.published_at).format('MMMM')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="post__content">
                                        <div className="post__content-line-categary">
                                            <div className="post__content-line"></div>
                                            <div className="post__content-categary cursor display_mobile">
                                                {dataPost[1]?.categories[0]?.title}
                                            </div>
                                        </div>

                                        <div className="post2__content-title">
                                            <h3 className="post2__content-title-h3">
                                                {dataPost[2]?.title}
                                            </h3>
                                        </div>
                                        <div className="post2__content-text">
                                            <p className="post2__content-text-p margin-0 text-justify display_mobile">
                                                {plainText(dataPost[2]?.content)}
                                            </p>
                                        </div>
                                        <div className="post__content-meta jt-ct-space-between align-center">
                                            <p className="post__content-meta-author color-gray margin-0">
                                                BY{" "}
                                                <a
                                                    className="text-strong cursor none-decoration color-black"
                                                    href="#"
                                                >
                                                    {dataPost[2]?.author_name}
                                                </a>
                                            </p>
                                            <p className="post__content-meta-comment color-gray margin-0">
                                                {dataPost[2]?.comment_count??0} comments
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroPost;
