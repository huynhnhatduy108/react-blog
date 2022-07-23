import React from "react";
import "./style.css";

function Loading(props) {
    const {size ="medium"} =props
    return (
        <div className="loading ">
            <div className="loading__container">
                <div className={`loading__icon-${size}`}></div>
            </div>
            <div className={`loading__text-${size}`}>Loading...</div>
        </div>
    );
}

export default Loading;
