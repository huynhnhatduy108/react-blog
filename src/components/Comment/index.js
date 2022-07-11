import React, { useState } from "react";
import "./style.css";

function Comment() {
    const [isAnswer, setIsAnswer] = useState(false);
    return (
        <div className="comment">
            <div className="comment__title">
                <h3 className="comment__title-h3">COMMENT</h3>
            </div>
            <div className="comment__area">
                <div className="comment__area-text">
                    <textarea placeholder="Input content to comment..."></textarea>
                </div>
                <div className="comment__sent">
                    <button className="comment__sent-button">
                        <i class="fa-solid fa-paper-plane"></i> Send
                    </button>
                </div>
            </div>
            <div className="comment__line"></div>
            <div className="comment__list">
                <div className="comment__items">
                    <div className="user__comment">
                        <div className="user__comment-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3-3n1Pei31eQDaoVOCrFQ3_383hUT_t7Fg&usqp=CAU" />
                        </div>
                        <div className="user__comment-info">
                            <div className="user__comment-name">
                                Le Thanh Huy
                            </div>
                            <div className="user__comment-time">
                                9/22/2021 - 5:20
                            </div>
                        </div>
                    </div>
                    <div className="comment__content">
                        <p>
                            The href attribute is required for an anchor to be
                            keyboard accessible. Provide a valid, navigable
                            address as the href value. If you cannot provide an
                            href,
                        </p>
                        <div className="comment__content-reply">
                            <button
                                onClick={() => setIsAnswer(!isAnswer)}
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
                <div className="comment__items-reply">
                    <div className="user__comment">
                        <div className="user__comment-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3-3n1Pei31eQDaoVOCrFQ3_383hUT_t7Fg&usqp=CAU" />
                        </div>
                        <div className="user__comment-info">
                            <div className="user__comment-name">
                                Le Thanh Huy
                            </div>
                            <div className="user__comment-time">
                                9/22/2021 - 5:20
                            </div>
                        </div>
                    </div>
                    <div className="comment__content">
                        <p>
                            The href attribute is required for an anchor to be
                            keyboard accessible. Provide a valid, navigable
                            address as the href value. If you cannot provide an
                            href,
                        </p>
                    </div>
                </div>
                {isAnswer ? (
                    <div className="comment__items-answer">
                        <div className="comment__area">
                            <div className="comment__area-text">
                                <textarea placeholder="Input content to comment..."></textarea>
                            </div>
                            <div className="comment__sent">
                                <button className="comment__sent-button">
                                    <i class="fa-solid fa-paper-plane"></i> Send
                                </button>
                            </div>
                        </div>
                        <div className="comment__close-tab" onClick={() => setIsAnswer(!isAnswer)}><i class="fa-solid fa-x"></i></div>
                    </div>
                ) : (
                    ""
                )}
                <div className="comment__items">
                    <div className="user__comment">
                        <div className="user__comment-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3-3n1Pei31eQDaoVOCrFQ3_383hUT_t7Fg&usqp=CAU" />
                        </div>
                        <div className="user__comment-info">
                            <div className="user__comment-name">
                                Le Thanh Huy
                            </div>
                            <div className="user__comment-time">
                                9/22/2021 - 5:20
                            </div>
                        </div>
                    </div>
                    <div className="comment__content">
                        <p>
                            The href attribute is required for an anchor to be
                            keyboard accessible. Provide a valid, navigable
                            address as the href value. If you cannot provide an
                            href,
                        </p>
                        <div className="comment__content-reply">
                            <button className="comment__content-reply-button">
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
                <div className="comment__items">
                    <div className="user__comment">
                        <div className="user__comment-avatar">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3-3n1Pei31eQDaoVOCrFQ3_383hUT_t7Fg&usqp=CAU" />
                        </div>
                        <div className="user__comment-info">
                            <div className="user__comment-name">
                                Le Thanh Huy
                            </div>
                            <div className="user__comment-time">
                                9/22/2021 - 5:20
                            </div>
                        </div>
                    </div>
                    <div className="comment__content">
                        <p>
                            The href attribute is required for an anchor to be
                            keyboard accessible. Provide a valid, navigable
                            address as the href value. If you cannot provide an
                            href,
                        </p>
                        <div className="comment__content-reply">
                            <button className="comment__content-reply-button">
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
            </div>
            <div className="comment__loadmore">
                <button className="comment__loadmore-button">Load more</button>
            </div>
        </div>
    );
}

export default Comment;
