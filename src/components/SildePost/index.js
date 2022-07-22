import React from "react";
import Slider from "react-slick";
import "./style.css";
import moment from 'moment';
import { plainText, scrollTo } from "../../utils/helper";

function SildePost(props) {
    const {listPostRelation, navigate } = props;
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1239,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="silde__post">
            <div className="grid wide">
                <div className="silde__post-line">
                    <h3 className="silde__post-title-h3">POST RELATION</h3>
                </div>
                <Slider {...settings}>
                    {listPostRelation?.length &&
                        listPostRelation.map((item, index) => (
                            <div className="silde__post-container" key={item.post_id} onClick={()=>{navigate(`/p/${item.slug}`); scrollTo()}}>
                                <div className="post">
                                <div className="post__img">
                                    <img
                                        className="post4__img-img"
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
                                </div>
                            </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
}

export default SildePost;
