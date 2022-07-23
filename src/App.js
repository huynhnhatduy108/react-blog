import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/base.css";
import "./styles/custom.css";
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/User/HomePage";
import SearchPage from "./pages/User/ListPostSearchPage";
import PostDetailPage from "./pages/User/DetailPostPage";
import PageNotFound from "./pages/User/PageNotFound";
import ContactPage from "./pages/User/ContactPage";
import AdminPage from "./pages/Admin/AdminPage";
import PostPage from "./pages/Admin/PostPage";
import CategoryPage from "./pages/Admin/CategoryPage";
import TagPage from "./pages/Admin/TagPage";
import UserPage from "./pages/Admin/UserPage";
import LoginPage from "./pages/Admin/LoginPage";
import CommentPage from "./pages/Admin/CommentPage";

// import HomePage from "./pages/User/HomePage";
// const TOKEN = "CDD";

// const PrivateLoginRoute = ({ ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (
// TOKEN === null
//     // true
//     ?
//       <MainLogin/>
//       :
//     <Redirect to={PAGES_URL.home}/>
//       <></>
//     )}
//   />
// );
// const PrivateRoute = ({ ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (
//check nếu chưa login thì ko được vào mainPage
// TOKEN
//     ?
//     <MainPage/>
//     : <Redirect to={PAGES_URL.login}/>
//       <></>
//     )}
//   />
// );

// const defaultPage = (token) => {
//   if (token) {
//     return "/dashboard";
//   }
//   return "/login";
// };

const App = () => {

    return (
        <div className="app">
            
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={ <HomePage />} />
                    <Route path="search" element={<SearchPage/>} />
                    <Route path="p/:slug" exact={false} element={<PostDetailPage/>} />
                    <Route path="contact" element={<ContactPage/>} />
                    <Route path='*' exact={true} element={<PageNotFound/>} />

                    {/* Admin */}
                    <Route path="admin" element={ <AdminPage />} />
                    <Route path="admin/post" element={ <PostPage />} />
                    <Route path="admin/category" element={<CategoryPage/>} />
                    <Route path="admin/tag" element={<TagPage/>} />
                    <Route path="admin/user" element={<UserPage/>} />
                    <Route path="admin/login" element={<LoginPage/>} />
                    <Route path="admin/comment" element={<CommentPage/>} />

                </Routes>
            </BrowserRouter>
        </div>
        //   <Routes>
        //     <Route exact path="/" element={<HomePage/>}/>
        //  <Route exact path="/" render={() => <Redirect to={defaultPage(TOKEN)} />}/>

        // {TOKEN && (
        //     <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        //   )}
        //  <Route exact path={getPathList(GUESTS)}>
        //     <Route render={(props) => <PrivateLoginRoute {...props} />} />
        //   </Route>
        //   <Route exact path={getPathList(MAIN)}>
        //     <Route render={(props) => <PrivateRoute {...props} />} />
        //   </Route>
        //   </Routes>
        // </Provider>
    );
};

export default App;
