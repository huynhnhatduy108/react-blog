import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import "./style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { scrollTo, validateEmail } from "../../utils/helper";
import { notificationCustom } from "../Notification";
import AAVEADS from "./../../assets/img/aave-coin-ads.png";
import ETHADS from "./../../assets/img/ethereum_ads.jpeg";
import SANDADS from "./../../assets/img/sand-ads.webp";

const imgAds =[ {tile:"Đánh giá chi tiết về dự án Aave Protocol", img:AAVEADS , url:"https://dautu.io/aave-coin-la-gi.html" }, 
                {tile:"Bằng chứng công việc của Ethereum đang dần “kết thúc”", img:ETHADS, url:"https://coinexpress.net/bang-chung-cong-viec-cua-ethereum-dang-dan-ket-thuc/" }, 
                {tile:"Game sandbox là gì? Tại sao lại thu hút nhiều người chơi", img:SANDADS, url:"https://www.thegioididong.com/game-app/game-sandbox-la-gi-tai-sao-lai-thu-hut-nhieu-nguoi-choi-1361345" }]

function Widget(props) {
    const {chart=false ,listTag, navigate}  = props;
    const [email, setEmail] = useState("");
    const [validate, setValidate] =  useState(false);
    const [chartCoin, setChartCoin] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (chart){
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false")
            .then((response) => {
                setChartCoin(response.data);
            })
            .catch((err) => {
                console.log("err", err);
            });
        }
    }, []);


    const handleChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleRegisterEmail = () => {
        if (!email || !validateEmail(email)) {
                setValidate(true);
        }
        else{
            setValidate(false);
            const [date, time] = new Date().toLocaleString().split(",");
            axios.post("https://sheet.best/api/sheets/75dc1251-3452-47a6-82f4-02e31a34b613",
                    { email: email, date: date, time: time }
                )
                .then((response) => {
                    notificationCustom('Register email successfull. Thank you!', true)
                    setEmail("");
                })
                .catch((err) => { 
                    console.log("err", err);
                    notificationCustom('Systems error. Sorry and try again later!', false);
                }
                );
        } 
    };

    return (
        <div className="widget">
            {chart?<div className="chart__currency">
                <div className="chart__currency-title">
                    <div className="chart__currency-title-line"></div>
                    <h3 className="chart__currency-title-h3 margin-0">
                        Trend currency
                    </h3>
                </div>
                <div className="chart__currency-table">
                    <div className="chart__currency-table-th">
                        <div className="currency__table-name">Name</div>
                        <div className="currency__table-price">Price</div>
                        <div className="currency__table-percent24h">24h%</div>
                    </div>
                    <div className="chart__currency-table-td">
                    {chartCoin.length &&
                        chartCoin.map((item, index) => (
                            <div className="chart__coin-title" key={index}>
                                <div className="chart__currency-name">
                                    <img  className="chart__currency-img" src={item.image} />
                                    <div className="chart__currency-symbol">{item.name}<span className="chart__currency-sym">{item.symbol}</span></div>
                                </div>
                                <div className="chart__currency-price">
                                    ${item.current_price}
                                </div>
                                <div className={`chart__currency-hour ${item.market_cap_change_percentage_24h<0?"currency__down":"currency__up"}`}>
                                {item.market_cap_change_percentage_24h<0?<i className="fa-solid fa-caret-down chart__currency-hour-icon"></i>:<i className="fa-solid fa-caret-up chart__currency-hour-icon"></i>} 
                                 {` ${Math.abs(item.market_cap_change_percentage_24h.toFixed(2))}`}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gap-60"></div>

            </div>:""}
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
                            value={email}
                        />
                        {(validate&&!email)?<div className='validate_contact'>Please input your email!</div>
                        :(validate&&!validateEmail(email))?<div className='validate_contact'>Email wrong format!</div>:""}
                    </div>
                    <div className="subscribe__form-button">
                        <button
                            onClick={handleRegisterEmail}
                            className="form__button"
                        >
                            Subscribe
                        </button>

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
                    {imgAds?.map((item, index)=>
                     <div className="advertisement__img" key={index}>
                        <div className="advertisement__img-text" onClick={()=>window.open(item.url, '_blank')}>{item.tile}</div>
                        <img
                            className="advertisement__img-thumnail"
                            src={item.img}
                        />
                    </div>
                    )}
                </div>
                
            </div>
            <div className="gap-60"></div>
            <div className="tags">
                <div className="tags__title">
                    <div className="tags__title-line"></div>
                    <h3 className="tags__title-h3 margin-0">Tags</h3>
                </div>
                <div className="tags__list">
                    {listTag?.length &&
                        listTag.map((item, index) => (
                            <div className="tags__item" key={item.id} onClick={()=>{navigate(`/search?tag=${item.id}`); scrollTo()}}>
                                <div className="">{item.slug} ({`${item.post_count??0}`})</div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="gap-60"></div>
        </div>
    );
}

export default Widget;
