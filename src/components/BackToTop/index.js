import React, { useState } from "react";
import "./style.css";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="backtotop" style={{display: visible?"block":"none"}} onClick={scrollToTop}>
            <div className="backtotop__container" >
                <i className="fa-solid fa-angles-up backtotop-icon"></i>
            </div>
        </div>
    );
}

export default BackToTop;
