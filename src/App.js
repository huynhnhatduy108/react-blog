import { useEffect, useState } from "react";
// import { Provider } from "react-redux";
// import { Router, Routes, Route } from "react-router-dom";
// import { Select } from "antd";
import { GoogleLogin } from "react-google-login";
import PostType1 from  "./components/PostType1/index"
import Header from "./components/Hearder";
import IntroPost from './components/IntroPost';
import ListPost from './components/ListPost';
import SildeCategory from  "./components/SildeCategory";
import Footer from "./components/Footer";
import "./styles/base.css";
import "./styles/custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/User/HomePage";
import SearchPage from "./pages/User/ListPostSearchPage";
import PostDetailPage from "./pages/User/DetailPostPage";
import PageNotFound from "./pages/User/PageNotFound";
import ContactPage from "./pages/User/ContactPage";
// import "./App.css";
// import "antd/dist/antd.min.css";
// const { Option } = Select;

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
  const [data, setData] = useState();
  const responseGoogle = (response) => {
    console.log("responseGoogle", response);
  }
  
  return (
    <>
      {/* <GoogleLogin
        clientId="979874640409-2knnits3kfn765b5celkdb92vpb8qq9o.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // cookiePolicy={"single_host_origin"}
      /> */}
      {/* <HomePage/> */}
      {/* <SearchPage/> */}
      <PostDetailPage/>
      {/* <PageNotFound/> */}
      {/* <ContactPage/> */}

    </>
    
      // <Provider>
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
