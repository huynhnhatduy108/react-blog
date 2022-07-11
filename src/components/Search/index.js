import React, { useState } from "react";
import "./style.css";

const categories = [
    { id: 1, name: "design", quantity: 122 },
    { id: 2, name: "fashion", quantity: 18 },
    { id: 3, name: "travel", quantity: 16 },
    { id: 4, name: "music", quantity: 2 },
    { id: 5, name: "video", quantity: 4 },
    { id: 6, name: "adventure", quantity: 36 },
    { id: 7, name: "photography", quantity: 22 },
    { id: 8, name: "photo", quantity: 22 },

];

const tags = [
    { id: 1, name: "design", quantity: 122 },
    { id: 2, name: "fashion", quantity: 18 },
    { id: 3, name: "travel", quantity: 16 },
    { id: 4, name: "music", quantity: 2 },
    { id: 5, name: "video", quantity: 4 },
    { id: 6, name: "adventure", quantity: 36 },
    { id: 7, name: "photography", quantity: 22 },
    { id: 8, name: "content", quantity: 45 },
];

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

function Search() {
    const [currenCategory, setCurrenCategory] = useState("All");
    const [isSearch, setIsSearch] = useState(false);
    const [keywork, setKeywork] = useState("");
    const [isExpand, setIsExpand] = useState(false);

    const hanleChangeCategorySearch = (e) => {
        setCurrenCategory(e.target.value);
        console.log("e", e.target.value);
    };

    const handleSearchPost = (e) => {
        setKeywork(e.target.value);
        e.target.value && e.target.value.length
            ? setIsSearch(true)
            : setIsSearch(false);
    };

    const handleExpandSelect = () => {
        setIsExpand(!isExpand);
    };

    // const handlChooseOption = () => {
    //     setIsExpand(!isExpand);
    // };

    return (
        <div className="search">
            <div className="search__background">
                <div className="grid wide search__container">
                    {/* <div className=""> */}
                    <div className="search__question-title">
                        <h1 className="search__question-title-h1">
                            What are you looking for?
                        </h1>
                    </div>
                    <div className="search__form">
                        <div className="search__categories">
                            <div
                                className="search__categories-select"
                                onClick={handleExpandSelect}
                            >
                                <div className="categories__select-current">
                                    {currenCategory}
                                </div>
                                <div className="categories__select-icon">
                                    {currenCategory == "All" ? (
                                        <i
                                            onClick={() =>
                                                setCurrenCategory("All")
                                            }
                                            class="fa-solid fa-angle-down cursor"
                                        ></i>
                                    ) : (
                                        <i onClick={() =>
                                            setCurrenCategory("All")} class="fa-solid fa-xmark cursor"></i>
                                    )}
                                </div>
                            </div>
                            {isExpand ? (
                                <div className="search__categories-expand">
                                    <div
                                        className="search__categories-option"
                                        onClick={() => {setCurrenCategory("All"); setIsExpand(!isExpand); }}
                                    >
                                        {"All"}
                                    </div>

                                    {categories?.length &&
                                        categories.map((item, index) => (
                                            <div
                                                className="search__categories-option"
                                                onClick={() =>
                                                   { setCurrenCategory(item.name);setIsExpand(!isExpand);
                                                }}
                                            >
                                                {item.name}
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                ""
                            )}
                            {/* <select
                                onChange={hanleChangeCategorySearch}
                                className="search__categories-select"
                            >
                                <option
                                    className="search__categories-item"
                                    value={0}
                                    key={0}
                                >
                                    All
                                </option>
                                {categories &&
                                    categories.map((item, index) => (
                                        <option
                                            className="search__categories-item"
                                            value={item.id}
                                            key={item.id}
                                        >
                                            {`${item.name}`}
                                        </option>
                                    ))}
                            </select> */}
                        </div>
                        <div className="search__vertical"></div>
                        <div className="search__input-surround">
                            <div className="search__input-mobile">
                                <input
                                    onChange={handleSearchPost}
                                    className="search__input"
                                    placeholder="Input keyword search"
                                />
                                <i className="search__mobile-icon fa-solid fa-magnifying-glass"></i>
                            </div>
                            {isSearch ? (
                                <div className="search__result">
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
                        <div className="search__icon">
                            <i className="search__icon-icon fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="search__tags">
                        {tags &&
                            tags.map((item, index) => (
                                <div
                                    className="search__tags-item"
                                    key={item.id}
                                >
                                    <div className="">
                                        {`${item.name} (${item.quantity})`}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* </div> */}
                </div>
            </div>
            <div className="search__back-home">
                <button className="back__home-button">
                    <i class="back__home-icon fa-solid fa-angles-left"></i>BACK
                    HOME
                </button>
            </div>
        </div>
    );
}

export default Search;
