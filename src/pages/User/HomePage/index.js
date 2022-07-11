import React from 'react'
import Header from "./../../../components/Hearder";
import IntroPost from './../../../components/IntroPost';
import ListPost from './../../../components/ListPost';
import SildeCategory from  "./../../../components/SildeCategory";
import Footer from "./../../../components/Footer";

const HomePage=()=> {
  return (
    <div>
      <Header/>
      <IntroPost/>
      <ListPost/>
      <SildeCategory/>
      <Footer/>
    </div>
  )
}

export default HomePage