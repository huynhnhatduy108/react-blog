import React from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="grid wide">
                <div className="footer__menu">
                    <div onClick={()=>navigate(`/`)} className="footer__menu-item">
                        <div className="">HOME</div>
                    </div>
                    <div onClick={()=>navigate(`/search`)} className="footer__menu-item">
                        <div className="">SEARCH</div>
                    </div>
                    <div onClick={()=>navigate(`/`)} className="footer__menu-item">
                        <div className="">ABOUT ME</div>
                    </div>
                    <div onClick={()=>navigate(`/contact`)} className="footer__menu-item">
                        <div className="">CONTACT</div>
                    </div>
                </div>
                <div className="gap-40"></div>
                <div className="footer__social">
                    {/* pinterest */}
                    <div className="footer__social-item">
                        <div className="footer__social-icon">
                            <i className="fa-brands fa-pinterest"></i>
                        </div>
                    </div>
                    {/* facebook */}
                    <div className="footer__social-item">
                        <div className="footer__social-icon">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                    </div>
                    {/* messenger */}
                    <div className="footer__social-item">
                        <div className="footer__social-icon">
                            <i className="fa-brands fa-facebook-messenger"></i>
                        </div>
                    </div>
                    {/* twitter */}
                    <div className="footer__social-item">
                        <div className="footer__social-icon">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    {/* linkedin */}
                    <div className="footer__social-item">
                        <div className="footer__social-icon">
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    {/* profile */}
                    <div className="footer__social-item">
                        <div className="footer__social-icon">
                            <i className="fa-solid fa-link"></i>
                        </div>
                    </div>
                </div>
                <div className="coppy__right">
                    <p className="coppy__right-text">{`Copyright ©${new Date().getFullYear()} All rights reserved | This template is made with `}<span><i className="coppy__right-icon fa-regular fa-heart"></i></span><a className="coppy__right-author"> NhatDuy</a></p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
