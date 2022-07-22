import React, { useEffect, useState } from 'react';
import Search from '../../../components/Search';
import ListSearch from '../../../components/ListSearch';
import Footer from '../../../components/Footer';
import Loading from '../../../components/Loading';
import NoData from '../../../components/NoData';
import { useDispatch, useSelector } from 'react-redux';
import { getPostSlice } from '../../../features/Post/store/slice';
import { getListTag, getTagSlice } from '../../../features/Tag/store/slice';
import { getCategorySlice, getListCategory } from '../../../features/Category/store/slice';
import { useNavigate } from 'react-router';

function SearchPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postStore = useSelector(getPostSlice);
  const tagStore = useSelector(getTagSlice);
  const categoryStore = useSelector(getCategorySlice);

  const {listPostUserSearch} = postStore;
  const {listCategory} = categoryStore;
  const {listTag} = tagStore;
  const {items, limit, page, total_page, total_record, isFetching } = listPostUserSearch;

  useEffect(()=>{
    if (!listCategory.length){
      dispatch(getListCategory());
    }
    if (!listTag.length){
      dispatch(getListTag());
    }
  },[])

  return (
    <div>
        <Search listCategory={listCategory} listTag={listTag}/>
        <div className='gap-50'></div>
        {isFetching? <Loading/>:items?.length? <ListSearch navigate={navigate} listCategory={listCategory} listTag={listTag} listPostUserSearch={listPostUserSearch}/>:<NoData/>}
        <div className='gap-50'></div>
        <Footer/>
    </div>
  )
}

export default SearchPage;