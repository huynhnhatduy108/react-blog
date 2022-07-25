import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import "./styles/base.css";
import "./styles/custom.css";
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import HomePage from "./pages/User/HomePage";
// import SearchPage from "./pages/User/ListPostSearchPage";
// import PostDetailPage from "./pages/User/DetailPostPage";
// import PageNotFound from "./pages/User/PageNotFound";
// import ContactPage from "./pages/User/ContactPage";
// import AdminPage from "./pages/Admin/AdminPage";
// import PostPage from "./pages/Admin/PostPage";
// import CategoryPage from "./pages/Admin/CategoryPage";
// import TagPage from "./pages/Admin/TagPage";
// import UserPage from "./pages/Admin/UserPage";
// import LoginPage from "./pages/Admin/LoginPage";
// import CommentPage from "./pages/Admin/CommentPage";
// import AdsPage from "./pages/Admin/AdsPage";
import { adminPrivateRoutes, adminPublicRoutes, userRoutes } from "./pages/routes";
import { getUserLocal } from "./utils/helper";

const userLocal = getUserLocal();

const PrivateRoute = (props) =>{
    if (!userLocal || !userLocal.access_token) {
        return <Navigate to="/admin/login" replace />;
    } else {
        return props.children;
    }
}

const RedirectAdminPage = (props) =>{
    if (userLocal && userLocal.access_token) {
        return <Navigate to="/admin" replace />;
    } else {
        return props.children;
    }
}


const App = () => {

    return (
        <div className="app">
            <BrowserRouter >
                <Routes>
                    {/* User */}
                    {userRoutes.map((route,index)=>
                        <Route 
                            key={index} 
                            path={route.path} 
                            element={route.element} 
                            exact={route.exact} />)}
        
                    {/* Admin */}
                    {adminPublicRoutes.map((route, index)=> 
                        <Route 
                            key={index} 
                            path={route.path} 
                            element={<RedirectAdminPage>{route.element}</RedirectAdminPage>} />)}

                    {adminPrivateRoutes.map((route, index)=> 
                                <Route key={index} 
                                path={route.path} 
                                element={<PrivateRoute>{route.element}</PrivateRoute>} />)}        
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
