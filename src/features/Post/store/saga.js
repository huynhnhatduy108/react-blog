import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";

import { apiCreatePost, apiDeletePost, apiDetailPost, apiListPost, apiUpdatePost } from "../apiService/index";
import { getListPost, getListPostFailure, getListPostSuccess } from "./slice";

function* handleGetListPost(action) {
    try {
        const response= yield call(apiListPost,action.payload);
        if (response.success) {
            yield put(getListPostSuccess(response.data));
        } 
    } catch (error) {
        yield put(getListPostFailure(error));
    }
}

function* handleGetDatailPost(action) {
    try {
        const response= yield call(
            apiDetailPost,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleCreatePost(action) {
    try {
        const response= yield call(
            apiCreatePost,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleUpdatePost(action) {
    try {
        const response= yield call(
            apiUpdatePost,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleDeletePost(action) {
    try {
        const response= yield call(
            apiDeletePost,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}


export default function* PostSaga() {
    yield takeLatest(getListPost.type, handleGetListPost);
    // yield takeLatest(getListPost.type, handleGetDatailPost);
    // yield takeLatest(getListPost.type, handleCreatePost);
    // yield takeLatest(getListPost.type, handleUpdatePost);
    // yield takeLatest(getListPost.type, handleDeletePost);
}
