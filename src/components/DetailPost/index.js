import React from "react";
import "./style.css";
import CommentPost from "./../../components/Comment";
import SildePost from "./../../components/SildePost";
import Widget from "../widget";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";

function DetailPost() {

    const tags = [
        { id: 1, name: "design", quantity: 122 },
        { id: 2, name: "fashion", quantity: 18 },
        { id: 3, name: "travel", quantity: 16 },
        { id: 4, name: "music", quantity: 2 },
    ];

    return (
        <div className="detail__post">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="col l-8 m-12 c-12">
                        <div className="detail">
                            <div className="detail__title">
                                <h1>
                                    Coin98 (C98) là gì? Toàn tập về tiền điện tử
                                    C98 Toàn tập về tiền điện tử C98
                                </h1>
                            </div>
                            <div className="detail__author">
                                <div className="detail__author-left">
                                    <div className="author__avatar">
                                        <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"/>
                                    </div>
                                    <div className="author__create">
                                        <span className="author__create-name">Nhat Duy</span>
                                        <span className="author__create-day">26/08/21</span>
                                        <div className="author__create-line"></div>
                                        <span className="author__create-time">08:18</span>
                                    </div>
                                </div>
                                <div className="detail__author-right">
                                    <div className="author__comments-post">
                                        <span className="author__comments-post-span"><i class="fa-solid fa-comment"></i> 4</span>
                                    </div>
                                    <div className="author__views-post">
                                        <span className="author__views-post-span"><i class="fa-solid fa-eye"></i> 11.12k</span>
                                    </div>
                                </div>

                            </div>
                            <div className="detail__thumnail">
                                <img src="https://cdn.blogtienao.com/wp-content/uploads/2022/02/no-luc-thuc-day-thanh-toan-tien-dien-tu-cua-solana-pay.jpg"/>
                            </div>
                            <div className="detail__content">
                                Coin98 là gì? Coin98 là một hệ sinh thái DeFi
                                với mục đích giúp người dùng tiếp cận với DeFi
                                một cách dễ dàng. Để phục vụ cho mục tiêu đó,
                                Coin98 đã phát triển một bộ sản phẩm phục vụ đầy
                                đủ nhu cầu của người dùng, từ giao dịch, lưu trữ
                                đến quản lí tài sản, cho vay, tiết kiệm,... Đặc
                                biệt, bộ sản phẩm của Coin98 cung cấp trên
                                Multi-chain, đem lại trải nghiệm DeFi thông minh
                                vượt trội, người dùng không cần phải thực hiện
                                quá nhiều bước hay hiểu biết sâu về Blockchain.
                                Các sản phẩm của Coin98
                            </div>
                            <div className="detail__list-tags">
                                {tags &&
                                tags.map((item, index) => (
                                    <div
                                        className="search__tags-item"
                                        key={item.id}
                                    >
                                        <div className="">
                                            {`${item.name} (${item.quantity})`}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="detail__share">
                                <div className="detail__share-text">Share :</div>
                                <FacebookShareButton url={"https://viblo.asia/p/bien-google-sheet-thanh-mot-rest-api-va-ket-hop-voi-react-3P0lP1Qg5ox"}
                                                    quote={"Blog info currency"}
                                                    hashtag={"#duyblog"}
                                                    description={"aiueo"}
                                                    >
                                <div className="detail__share-facebook detail__share-icon"><i class=" fa-brands fa-facebook-f"></i> </div>
                                </FacebookShareButton>
                                <div className="detail__share-twitter detail__share-icon"><i class=" fa-brands fa-twitter"></i></div>
                                <EmailShareButton >
                                <div className="detail__share-email detail__share-icon"><i class=" fa-solid fa-envelope"></i></div>
                                </EmailShareButton>
                                <LinkedinShareButton title={'LinkedIn share test'}
                                    url={'http://example.com'}
                                    summary={'LinkedIn share demo test'}
                                    description={'LinkedIn share demo test'}>
                                <div className="detail__share-linked detail__share-icon"><i class=" fa-brands fa-linkedin-in"></i></div>
                                </LinkedinShareButton>
                            </div>
                        </div>
                        <div className="comment__post">
                            <CommentPost/>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12">
                        <div className="detail__widget">
                            <Widget/>
                        </div>
                    </div>
                </div>
                <div className="gap-40"></div>
                <div className="">
                    <SildePost/>
                </div>
            </div>
        </div>
    );
}

export default DetailPost;
