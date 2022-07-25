import DashboardPage from "./Admin/Dashboard"
import AdsPage from "./Admin/AdsPage"
import CategoryPage from "./Admin/CategoryPage"
import CommentPage from "./Admin/CommentPage"
import PostPage from "./Admin/PostPage"
import TagPage from "./Admin/TagPage"
import UserPage from "./Admin/UserPage"
import HomePage from "./User/HomePage"
import SearchPage from "./User/ListPostSearchPage"
import ContactPage from "./User/ContactPage"
import PageNotFound from "./User/PageNotFound"
import PostDetailPage from "./User/DetailPostPage"
import LoginPage from "./Admin/LoginPage"
import RegisterPage from "./Admin/RegisterPage"

export const adminPrivateRoutes = [
    { label:"Dashboard", path:"/admin", element:<DashboardPage/> ,exact:true},
    { label:"Post", path:"/admin/post", element:<PostPage/>, exact:true},
    { label:"Tag", path:"/admin/tag", element:<TagPage/>, exact:true},
    { label:"Category", path:"/admin/category", element:<CategoryPage/>, exact:true},
    { label:"User", path:"/admin/user", element:<UserPage/>, exact:true},
    { label:"Comment", path:"/admin/comment", element:<CommentPage/>, exact:true},
    { label:"Ads", path:"/admin/adspage", element:<AdsPage/>, exact:true},
]

export const adminPublicRoutes = [
    { label:"Login", path:"/admin/login", element:<LoginPage/>, exact:true},
    { label:"Register", path:"/admin/register", element:<RegisterPage/>, exact:true},
]

export const userRoutes = [
    { label:"Home", path:"/" , exact:false , element: <HomePage />},
    { label:"Search", path:"/search", exact:false, element: <SearchPage />},
    { label:"PostDetail", path:"/p/:slug", exact:false, element: <PostDetailPage/>},
    { label:"Contact", path:"/contact", exact:false, element: <ContactPage />},
    { label:"NotFound", path:"/*", exact:true, element: <PageNotFound />},
]