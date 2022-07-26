import {PayloadAction} from "@reduxjs/toolkit";
import { message } from "antd";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { removeLocalItem, setLocalItem } from "../../../utils/helper";
import { apiCheckToken, apiFacebookLogin, apiGoogleLogin, apiLogin, apiLogout, apiProfile, apiRegister } from "../apiService";
import { checkToken, checkTokenError, checkTokenSuccess, facebookLogin, facebookLoginError, facebookLoginSuccess, googleLogin, googleLoginError, googleLoginSuccess, logoutUser, logoutUserError, logoutUserSuccess, profileUser, profileUserError, profileUserSuccess, registerUser, registerUserError, registerUserSuccess, userLogin, userLoginError, userLoginSuccess } from "./slice";


function* handleRegister(action) {
    try {
        const response= yield call(
            apiRegister,
            action.payload,
        );
        if (response.success) {
            yield put(registerUserSuccess(response.data));
            message.success(response.data.mess);
            setTimeout(()=>{
                window.location.replace("/admin/login");
            },1000)
        } 
        else{
            yield put(registerUserError(response.data));
            message.error(response.data.non_field_errors[0]);
        }
    } catch (error) {
        yield put(registerUserError(error));
    }
}

function* handleLogin(action) {
    try {
        const response= yield call(
            apiLogin,
            action.payload,
        );
        if (response.success) {
            message.success(response.data.mess);
            yield put(userLoginSuccess(response.data));
            setLocalItem("user",response.data.data);
            setTimeout(()=>{
                window.location.replace("/admin");
            },1000)
        } 
        else{
            yield put(userLoginError(response));
            message.error(response.data.mess);
        }
    } catch (error) {
        yield put(userLoginError(error));
    }
}

function* handleFacebookLogin(action) {
    try {
        const response= yield call(
            apiFacebookLogin,
            action.payload,
        );
        if (response.success) {
            yield put(facebookLoginSuccess(response.data));
        } 
        else{
            yield put(facebookLoginError(response));
        }
    } catch (error) {
        yield put(facebookLoginError(error));
    }
}

function* handleGoogleLogin(action) {
    try {
        const response= yield call(
            apiGoogleLogin,
            action.payload,
        );
        if (response.success) {
            yield put(googleLoginSuccess(response.data));
        } 
        else{
            yield put(googleLoginError(response));
        }
    } catch (error) {
        yield put(googleLoginError(error));
    }
}

function* handleCheckToken(action) {
    try {
        const response= yield call(
            apiCheckToken,
            action.payload,
        );
        if (response.success) {
            yield put(checkTokenSuccess(response.data));
        } 
        else{
            yield put(checkTokenError(response));
        }
    } catch (error) {
        yield put(checkTokenError(error));
    }
}

function* handleLogout(action) {
    try {
        const response= yield call(
            apiLogout,
            action.payload,
        );
        if (response.success) {
            yield put(logoutUserSuccess(response.data));
            removeLocalItem("user");
            setTimeout(()=>{
                window.location.replace("/admin/login");
            },1000)
        } 
        else{
            yield put(logoutUserError(response));

        }
    } catch (error) {
        yield put(logoutUserError(error));
    }
}

function* handleGetProfile(action) {
    try {
        const response= yield call(
            apiProfile,
            action.payload,
        );
        if (response.success) {
            yield put(profileUserSuccess(response.data));
        } 
        else{
            yield put(profileUserError(response));
        }
    } catch (error) {
        yield put(profileUserError(error));
    }
}


export default function* AuthSaga() {
    yield takeLatest(registerUser.type, handleRegister);
    yield takeLatest(userLogin.type, handleLogin);
    yield takeLatest(facebookLogin.type, handleFacebookLogin);
    yield takeLatest(googleLogin.type, handleGoogleLogin);
    yield takeLatest(checkToken.type, handleCheckToken);
    yield takeLatest(logoutUser.type, handleLogout);
    yield takeLatest(profileUser.type, handleGetProfile);

  
}
