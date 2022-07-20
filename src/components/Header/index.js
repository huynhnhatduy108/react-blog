import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getListPostUserSeach, getPostSlice } from "../../features/Post/store/slice";
import { useDebounce } from "../../hooks/useDebounce";
import { plainText } from "../../utils/helper";
import NoData from "../NoData";
import Loading from "../Loading";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [isSearch, setIsSearch] = useState(false);  
    const postStore = useSelector(getPostSlice);
    const {listPostUserSearch} = postStore;
    const {items, limit, page, total_page, total_record, isFetching } = listPostUserSearch;

    const keyWordDebounce = useDebounce(keyword,500);

    useEffect(() => {
        if (keyWordDebounce) {
            dispatch(getListPostUserSeach({detail:1, keyword:keyWordDebounce, limit:10, page:1, is_pagination:1}))
        }
       
    }, [keyWordDebounce])

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

    const handleRedirectToDetailPage =(slug)=>{
        navigate(`/p/${slug}`);
        setIsOpen(false);
        setIsSearch(false)
    }

    const handleClickout =()=>{
        setIsSearch(false);
        setIsOpen(false);
    }

    return (
        <div className="header">
            <OutsideClickHandler onOutsideClick={handleClickout}>
            <div className="grid wide">
                <div className="header__container">
                    <div onClick={()=>navigate("/")} className="header__logo">
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
                            <i  onClick={()=>navigate(`/search?keyword=${keyword}`)} 
                                className="header__search-icon fa-solid fa-magnifying-glass"></i>
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
                                        <i
                                         onClick={()=>navigate(`/search?keyword=${keyword}`)} 
                                         className="search__mobile-icon fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    {/* <div className="header__mobile-search-line"></div> */}
                                    {isSearch ? (
                                    <div className="header__mobile-search-result">
                                        <div className="search__result-list">
                                            {isFetching? <Loading/>:(items?.length ?
                                                items.map(
                                                    (item, index) => (
                                                        <div className="search__result-post" 
                                                            onClick={()=>handleRedirectToDetailPage(item.slug)} 
                                                            key={item.post_id}>
                                                            <div className="result__post-img">
                                                                <img
                                                                    className=""
                                                                    src={item.thumbnail}
                                                                    alt={item.title}
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
                                                                        {plainText(item.content)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                ):<NoData/>)}
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
                                    {isFetching? <Loading/>:(items?.length ?
                                        items?.map((item, index) => (
                                            <div className="search__result-post" 
                                                onClick={()=>handleRedirectToDetailPage(item?.slug)} 
                                                key={item.post_id}>
                                                <div className="result__post-img">
                                                    <img
                                                        className=""
                                                        src={item.thumbnail}
                                                        alt={item.title}
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
                                                            {plainText(item.content)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )):<NoData/>)}
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
