import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { getQueryString } from "../../utils/helper";
import { useQuery } from "../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { getListPostUserSeach } from "../../features/Post/store/slice";


function Search(props) {
    const {listTag, listCategory} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const query = useQuery();
	const keyword = query.get("keyword");
    const category = query.get("category");
    const tag = query.get("tag");

    const [currenCategory, setCurrenCategory] = useState("All");
    const [currenCategoryID, setCurrenCategoryID] = useState();
    const [currenTagID, setCurrenTagID] = useState();
    const [isSearch, setIsSearch] = useState(false);
    const [keywordSearch, setkeywordSearch] = useState("");
    const [isExpand, setIsExpand] = useState(false);

    useEffect(()=>{
        if(keyword || category || tag){
            dispatch(getListPostUserSeach({detail:1, keyword:keyword, limit:9, page:1, is_pagination:1, category:category, tag:tag}))
            keyword && setkeywordSearch(keyword);
            if (category){
                console.log("category", category);
                const index = listCategory?.findIndex((item)=>item.id==category)
                setCurrenCategoryID(category);
                setCurrenCategory(listCategory[index]?.title)
            }
                setCurrenTagID(tag)
        
        }
        else{
            dispatch(getListPostUserSeach({detail:1, limit:9, page:1, is_pagination:1}))
        }
        window.scroll(0,0)
    },[keyword, category, tag])

    const handleChangeKeyWord = (e) => {
        setkeywordSearch(e.target.value);
    };

    const handleExpandSelect = () => {
        setIsExpand(!isExpand);
    };

    const handleKeyDown = (e) =>{
        if (e.key == 'Enter') {
            const params = {
                keyword:keywordSearch,
                category :currenCategoryID,
                tag: currenTagID
            }
            const queryParams = getQueryString(params); 
            console.log('queryParams', queryParams)
            navigate(`/search?${queryParams}`)

          }
    }

    const hanldeSearchPost =()=>{
        const params = {
            keyword:keywordSearch,
            category :currenCategoryID,
            tag: currenTagID
        }
        const queryParams = getQueryString(params); 
        console.log("queryParams", queryParams);
        navigate(`/search?${queryParams}`)
    }

    const handleSeletTag =(tagID)=>{
        let params = {
            keyword:keywordSearch,
            category :currenCategoryID,
            tag: tagID
        }

        if(tagID==currenTagID){
            params ={...params,tag:undefined}
            setCurrenTagID()
        }
      
        const queryParams = getQueryString(params); 
        navigate(`/search?${queryParams}`)
    }


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
                                            className="fa-solid fa-angle-down cursor"
                                        ></i>
                                    ) : (
                                        <i onClick={() =>
                                            setCurrenCategory("All")} className="fa-solid fa-xmark cursor"></i>
                                    )}
                                </div>
                            </div>
                            {isExpand ? (
                                <div className="search__categories-expand">
                                    <div
                                        className="search__categories-option"
                                        onClick={() => {setCurrenCategory("All"); setCurrenCategoryID(); setIsExpand(!isExpand); }}
                                    >
                                        {"All"}
                                    </div>

                                    {listCategory?.length &&
                                        listCategory.map((item, index) => (
                                            <div
                                                className="search__categories-option"
                                                onClick={() =>
                                                   { setCurrenCategory(item.title); setCurrenCategoryID(item.id);setIsExpand(!isExpand);
                                                }}
                                            >
                                                {item.title}
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="search__vertical"></div>
                        <div className="search__input-surround">
                            <div className="search__input-mobile">
                                <input
                                    onKeyDown={handleKeyDown}
                                    onChange={handleChangeKeyWord}
                                    value={keywordSearch}
                                    className="search__input"
                                    placeholder="Input keyword search"
                                />
                                <i onClick={hanldeSearchPost} className="search__mobile-icon fa-solid fa-magnifying-glass"></i>
                            </div>
                            {/* {isSearch ? (
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
                            )} */}
                        </div>
                        <div className="search__icon">
                            <i onClick={hanldeSearchPost} className="search__icon-icon fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="search__tags">
                        {listTag &&
                            listTag.map((item, index) => (
                                <div
                                    className={`search__tags-item ${item.id==currenTagID?"tag-active":""}`}
                                    key={item.id}
                                    onClick={()=>handleSeletTag(item.id)}
                                >
                                    <div className="">
                                        {`${item.slug} (${item.post_count})`}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* </div> */}
                </div>
            </div>
            <div className="search__back-home">
                <button onClick={()=>navigate(`/`)} className="back__home-button">
                    <i className="back__home-icon fa-solid fa-angles-left"></i>BACK
                    HOME
                </button>
            </div>
        </div>
    );
}

export default Search;
