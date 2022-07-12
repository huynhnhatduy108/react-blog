import React from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="page__notfound">
            <div className="notfound__container">
                <h3 className="notfound__opps">Oops! Page not found</h3>
                <h1 className="notfound__404">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </h1>
                <h3 className="notfound__sorry">
                    we are sorry, but the page you requested was not found
                </h3>
                <div className="notfound__backhome">
                    <button onClick={()=>navigate(`/`)} className="notfound__backhome-button">
                        BACK HOME
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
