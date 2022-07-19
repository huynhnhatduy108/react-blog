import React from "react";
import DetailPost from "../../../components/DetailPost";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

function PostPage() {
    return (
        <div className="post__page">
            <Header/>
            <div className="gap-50"></div>
            <DetailPost/>
            <div className="gap-50"></div>
            <Footer/>
        </div>
    );
}

export default PostPage;
