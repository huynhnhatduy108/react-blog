import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";

import { apiCreatePost, apiDeletePost, apiDetailPostById, apiListPost, apiUpdatePost,  apiDetailPostBySlug} from "../apiService/index";
import { createPost, createPostError, createPostSuccess, deletePost, deletePostError, deletePostSuccess, getDetailPostById, getDetailPostByIdError, getDetailPostByIdSuccess, getDetailPostBySlug, getDetailPostBySlugError, getDetailPostBySlugSuccess, getListPost, getListPostError, getListPostSuccess, updatePost, updatePostError, updatePostSuccess } from "./slice";

function* handleGetListPost(action) {
    try {
        const response= yield call(apiListPost,action.payload);
        if (response.success) {
            yield put(getListPostSuccess(response.data));
        } 
    } catch (error) {
        yield put(getListPostError(error));
    }
}

function* handleGetDatailPostById(action) {
    try {
        const response= yield call(
            apiDetailPostById,
            action.payload,
        );
        if (response.success) {
            yield put(getDetailPostByIdSuccess(response.data));
        } 
    } catch (error) {
        yield put(getDetailPostByIdError(error));
    }
}

function* handleGetDatailPostBySlug(action) {
    try {
        const response= yield call(
            apiDetailPostBySlug,
            action.payload,
        );
        if (response.success) {
            yield put(getDetailPostBySlugSuccess(response.data));
        } 
    } catch (error) {
        yield put(getDetailPostBySlugError(error));
    }
}

function* handleCreatePost(action) {
    try {
        const response= yield call(
            apiCreatePost,
            action.payload,
        );
        if (response.success) {
            yield put(createPostSuccess(response.data));
        } 
    } catch (error) {
        yield put(createPostError(error));
    }
}

function* handleUpdatePost(action) {
    try {
        const response= yield call(
            apiUpdatePost,
            action.payload,
        );
        if (response.success) {
            yield put(updatePostSuccess(response.data));
        } 
    } catch (error) {
        yield put(updatePostError(error));
    }
}

function* handleDeletePost(action) {
    try {
        const response= yield call(
            apiDeletePost,
            action.payload,
        );
        if (response.success) {
            yield put(deletePostSuccess(response.data));
        } 
    } catch (error) {
        yield put(deletePostError(error));
    }
}

export default function* PostSaga() {
    yield takeLatest(getListPost.type, handleGetListPost);
    yield takeLatest(getDetailPostById.type, handleGetDatailPostById);
    yield takeLatest(getDetailPostBySlug.type, handleGetDatailPostBySlug);
    yield takeLatest(createPost.type, handleCreatePost);
    yield takeLatest(updatePost.type, handleUpdatePost);
    yield takeLatest(deletePost.type, handleDeletePost);
}
