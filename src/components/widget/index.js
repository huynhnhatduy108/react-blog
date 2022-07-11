import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import "./style.css";
import axios from "axios";

function Widget() {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState();

    const handleChangeEmail = (e) =>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handleRegisterEmail =() =>{
        const [date, time] = new Date().toLocaleString().split(",")
        axios.post('https://sheet.best/api/sheets/75dc1251-3452-47a6-82f4-02e31a34b613', 
        {email: email, date:date, time:time})
        .then(response => {
        })
        .catch((err)=>console.log('err', err))
    }

    const  tags =["design (16)", "fashion (20)", "travel (16)", "music (5)", "video (96)", 'adventure (0)', 'photography (15)']
    return (
        <div className="widget">
            <div className="chart__currency">
                <div className="chart__currency-title">
                    <div className="chart__currency-title-line"></div>
                    <h3 className="chart__currency-title-h3 margin-0">
                        Trend currency
                    </h3>
                </div>
                <div className="chart__coin-title">
                    dcdc
                </div>

            </div>
            <div className="subscribe__email">
                <div className="subscribe__title">
                    <div className="subscribe__title-line"></div>
                    <h3 className="subscribe__title-h3 margin-0">
                        Subscribe me!
                    </h3>
                </div>
                <div className="subscribe__form">
                    <div className="subscribe__form-input">
                        <input
                            placeholder="Your e-mail here"
                            className="form__input"
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div className="subscribe__form-button">
                        <button onClick={handleRegisterEmail} className="form__button">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="gap-60"></div>
            <div className="advertisement">
                <div className="advertisement__title">
                    <div className="advertisement__title-line"></div>
                    <h3 className="advertisement__title-h3 margin-0">
                        Advertisement
                    </h3>
                </div>
                <div className="advertisement__form">
                    <div className="advertisement__img">
                        <img className="advertisement__img-thumnail" src="https://media-api.advertisingvietnam.com/oapi/v1/media?uuid=6fd7049e-608f-4b3f-a062-e132926e6e44&resolution=1440x756&type=image"/>
                    </div>
                </div>
            </div>
            <div className="gap-60"></div>
            <div className="tags">
                <div className="tags__title">
                    <div className="tags__title-line"></div>
                    <h3 className="tags__title-h3 margin-0">
                        Tags
                    </h3>
                </div>
                <div className="tags__list">
                    {tags && tags.map((item, index)=>
                        <div className="tags__item" key={index}>
                            <div className="">{item}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="gap-60"></div>

        </div>
    );
}

export default Widget;
