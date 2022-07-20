import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/Header";
import IntroPost from './../../../components/IntroPost';
import ListPost from './../../../components/ListPost';
import SildeCategory from  "./../../../components/SildeCategory";
import Footer from "./../../../components/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { getCategorySlice, getListCategory } from '../../../features/Category/store/slice';
import { getListTag, getTagSlice } from '../../../features/Tag/store/slice';
import { getListPost, getListPostUserSeach, getPostSlice } from '../../../features/Post/store/slice';

const HomePage=()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tagStore = useSelector(getTagSlice);
  const categoryStore = useSelector(getCategorySlice);
  const postStore = useSelector(getPostSlice);
  const {listCategory} = categoryStore;
  const {listTag} = tagStore;
  const {listPostUserSearch, listPostPaging} = postStore;
  const {items, limit, page, total_page, total_record, isFetching } = listPostPaging;

  useEffect(()=>{
    dispatch(getListPost({detail:1, limit:9, page:1, is_pagination:1}));
    dispatch(getListCategory());
    dispatch(getListTag());
  },[])

  return (
    <div>
      <Header />
      <IntroPost navigate={navigate} dataPost ={items.slice(0, 3)} />
      <ListPost navigate={navigate} dataPost={items.slice(3, items.length)} listTag={listTag} pagination={{limit, page, total_page, total_record, isFetching}}/>
      <SildeCategory navigate={navigate} listCategory={listCategory}/>
      <Footer/>
    </div>
  )
}

export default HomePage