import React from "react";
import "./style.css";

function Loading() {
    return (
        <div className="loading">
            <div className="loading__container">
                <div className="loading__icon"></div>
            </div>
            <div className="loading__text">Loading...</div>
        </div>
    );
}

export default Loading;
