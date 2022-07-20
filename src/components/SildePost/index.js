import React from "react";
import Slider from "react-slick";
import "./style.css";

function SildePost(props) {
    const {} = props;
    const settings = {
        dots: true,
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

    const listPost = [1, 2, 3, 4, 5, 6];

    return (
        <div className="silde__post">
            <div className="grid wide">
                <div className="silde__post-line">
                    <h3 className="silde__post-title-h3">POST RELATION</h3>
                </div>
                <Slider {...settings}>
                    {listPost.length &&
                        listPost.map((item, index) => (
                            <div className="silde__post-container" key={index}>
                                <div className="post">
                                <div className="post__img">
                                    <img
                                        className="post4__img-img"
                                        src="https://public.bnbstatic.com/image/cms/content/body/202206/9d1b16ad973125fbb5f5c9c2f402ebdb.png"
                                        alt=""
                                    />
                                    <div className="post__img-publish">
                                        <p className="img__publish-day">13</p>
                                        <p className="img__publish-month">
                                            March
                                        </p>
                                    </div>
                                </div>
                                <div className="post__content">
                                    <div className="post__content-line"></div>
                                    <div>
                                        <div className="post3__content-title">
                                            <h3 className="post3__content-title-h3 font-25">
                                                10 Tips to organize the perfect
                                                party, Nullam vestibulum
                                                convallis risus vel condimentum
                                                to organize the perfect party,{" "}
                                            </h3>
                                        </div>
                                        <div className="post3__content-text">
                                            <p className="post3__content-text-p margin-0 text-justify">
                                                Curabitur venenatis efficitur
                                                lorem sed tempor. Integer
                                                aliquet tempor cursus. Nullam
                                                vestibulum convallis risus vel
                                                condimentum. Nullam auctor lorem
                                                in libero luctus, vel volutpat
                                                quam tincidunt.aliquet tempor
                                                cursus. Nullam vestibulum
                                                convallis risus vel condimentum.
                                                Nullam auctor lorem in libero
                                                luctus, vel volutpat quam
                                                tincidunt.
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
