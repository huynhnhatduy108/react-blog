import React from "react";
import "./style.css";
import Slider from "react-slick";

const randomColor = () => {
    let hexCode = "#";
    let hexString = "0123456789abcdef";
    for(var i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

const genColor =()=>{
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${173}deg, ${colorOne}, ${colorTwo})`;
}

const categoryContainerStyle = {
    // "background-image": genColor(),
    // "width": "95%",
    // "margin": "0 auto",
    // "border-radius": "10px",
    // "height": "100%",
    // "background-color": "gainsboro",
    // "position": "relative",
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

function SildeCategory(props) {
    const {listCategory, navigate} = props;
    return (
        <div className="silde_category">
            <div className="grid wide">
                <div className="silde_category-line">
                    <h3 className="silde_category-title-h3">Categories</h3>
                </div>
                <Slider key={"id"} {...settings}>
                    {listCategory.length &&
                        listCategory.map((item, index) => (
                            <div key={item.id} className="category__item" onClick={()=>navigate(`/search?category=${item.id}`)}>
                                <div className="category__container" style={categoryContainerStyle}>
                                    <h3 className="category__title">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <div className="gap-30"></div>
        </div>
    );
}

export default SildeCategory;
