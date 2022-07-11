import React from "react";
import "./style.css";
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    const handleOnClickIcon = () => {
        setIsOpen(!isOpen);
        setKeyword("");
        setIsSearch(false);
    };

    const handleSearchPost = (e) => {
        setKeyword(e.target.value);
        e.target.value && e.target.value.length
            ? setIsSearch(true)
            : setIsSearch(false);
    };

    const handleClickout =()=>{
        setIsSearch(false);
        setIsOpen(false);
    }

    const listSearch = [
        {
            id: 1,
            url: "https://technext.github.io/original/img/blog-img/4.jpg",
            title: "Expand your career opportunities with Python Curabitur ",
            content:
                "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
        },
        {
            id: 2,
            url: "https://goctienao.com/wp-content/uploads/2019/09/ethereum-la-gi.jpeg",
            title: "Expand your career opportunities with Python Curabitur venenatis efficitur lorem sed tempor",
            content:
                "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
        },
        {
            id: 3,
            url: "https://cafebitcoin.org/wp-content/uploads/2021/09/Solana.png",
            title: "Expand your career opportunities with Python Curabiturtempor",
            content:
                "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
        },
        {
            id: 4,
            url: "https://cryptoitunes.com/images/binance/1645005617965/original/introducing-bnb-chain-the-evolution-of-binance-smart-chain.png",
            title: "Expand your career opportunities with Python Curabiturtempor",
            content:
                "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
        },
        {
            id: 5,
            url: "https://phongduy.com/wp-content/uploads/2021/12/Polygon-coin.jpg",
            title: "Expand your career opportunities with Python Curabiturtempor",
            content:
                "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
        },
        {
            id: 6,
            url: "https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg",
            title: "Expand your career opportunities with Python Curabiturtempor",
            content:
                "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
        },
    ];

    return (
        <div className="header">
            <OutsideClickHandler onOutsideClick={handleClickout}>
            <div className="grid wide">
                <div className="header__container">
                    <div className="header__logo">
                        <p className="header__logo-name ">NhatDuy</p>
                        <p className="header__logo-sub-name">Lifestyle Blog</p>
                    </div>
                    <div className="header__search">
                        <div className="header__search-container">
                            <input
                                className="header__search-input"
                                onChange={(event) => handleSearchPost(event)}
                                placeholder="keyword search"
                                value={keyword}
                            />
                            <i className="header__search-icon fa-solid fa-magnifying-glass"></i>
                            <i
                                onClick={handleOnClickIcon}
                                className={`search__mobile-toggle-icon ${
                                    isOpen
                                        ? "fa-solid fa-x"
                                        : "fa-solid fa-magnifying-glass"
                                }`}
                            ></i>
                            {/* mobile */}
                            {!isOpen ? (
                                ""
                            ) : (
                                <div className="header__search-mobile ">
                                    <div className="search-mobile-container">
                                        <input
                                            className="search__mobile-input"
                                            onChange={(event) =>
                                                handleSearchPost(event)
                                            }
                                            value={keyword}
                                            placeholder="keyword search"
                                        />
                                        <i className="search__mobile-icon fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    {/* <div className="header__mobile-search-line"></div> */}
                                    {isSearch ? (
                                    <div className="header__mobile-search-result">
                                        <div className="search__result-list">
                                            {listSearch.length &&
                                                listSearch.map(
                                                    (item, index) => (
                                                        <div className="search__result-post">
                                                            <div className="result__post-img">
                                                                <img
                                                                    className=""
                                                                    src={
                                                                        item.url
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="result__post-content">
                                                                <div className="result__post-content-title">
                                                                    <h3 className="">
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </h3>
                                                                </div>
                                                                <div className="result__post-content-text">
                                                                    <p className="">
                                                                        {
                                                                            item.content
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                      ) : (
                                        ""
                                    )}
                                </div>
                            )}
                        </div>
                        {isSearch ? (
                            <div className="header__search-result">
                                <div className="search__result-list">
                                    {listSearch.length &&
                                        listSearch.map((item, index) => (
                                            <div className="search__result-post">
                                                <div className="result__post-img">
                                                    <img
                                                        className=""
                                                        src={item.url}
                                                    />
                                                </div>
                                                <div className="result__post-content">
                                                    <div className="result__post-content-title">
                                                        <h3 className="">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                    <div className="result__post-content-text">
                                                        <p className="">
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
            </OutsideClickHandler>
        </div>
    );
}
export default Header;
