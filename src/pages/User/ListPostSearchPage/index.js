import React from 'react';
import Search from '../../../components/Search';
import ListSearch from '../../../components/ListSearch';
import Footer from '../../../components/Footer';
import Loading from '../../../components/Loading';
import NoData from '../../../components/NoData';

function SearchPage() {
  return (
    <div>
        <Search/>
        <div className='gap-50'></div>
        <Loading/>
        <NoData/>
        <ListSearch/>
        <Footer/>
    </div>
  )
}

export default SearchPage;