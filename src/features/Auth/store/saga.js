import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiCheckToken, apiFacebookLogin, apiGoogleLogin, apiLogin, apiLogout, apiProfile } from "../apiService";
import { checkToken, checkTokenError, checkTokenSuccess, facebookLogin, facebookLoginError, facebookLoginSuccess, googleLogin, googleLoginError, googleLoginSuccess, logoutUser, logoutUserError, logoutUserSuccess, profileUser, profileUserError, profileUserSuccess, registerUser, registerUserError, registerUserSuccess, userLogin, userLoginError, userLoginSuccess } from "./slice";


function* handleRegister(action) {
    try {
        const response= yield call(
            action.payload,
        );
        if (response.success) {
            yield put(registerUserSuccess(response.data));
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
            yield put(userLoginSuccess(response.data));
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
    } catch (error) {
        yield put(profileUserError(error));
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
        } 
    } catch (error) {
        yield put(checkTokenError(error));
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
    } catch (error) {
        yield put(logoutUserError(error));
    }
}


export default function* CategorySaga() {
    yield takeLatest(registerUser.type, handleRegister);
    yield takeLatest(userLogin.type, handleLogin);
    yield takeLatest(facebookLogin.type, handleFacebookLogin);
    yield takeLatest(googleLogin.type, handleGoogleLogin);
    yield takeLatest(checkToken.type, handleCheckToken);
    yield takeLatest(logoutUser.type, handleLogout);
    yield takeLatest(profileUser.type, handleGetProfile);

  
}
