import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import "./styles/base.css";
import "./styles/custom.css";
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
