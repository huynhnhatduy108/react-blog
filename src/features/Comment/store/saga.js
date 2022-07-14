import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiCommentToPost, apiDeleteComment, apiGetlistCommentByPost } from "../apiService";
import { commentToPost, commentToPostError, commentToPostSuccess, deleteComment, deleteCommentError, deleteCommentSuccess, listCommentByPost, listCommentByPostError, listCommentByPostSuccess } from "./slice";

function* handleCommentToPost(action) {
    try {
        const response= yield call(
            apiCommentToPost,
            action.payload,
        );
        if (response.success) {
            yield put(commentToPostSuccess(response.data));
        } 
    } catch (error) {
        yield put(commentToPostError(error));
    }
}

function* handleDeleteComment(action) {
    try {
        const response= yield call(
            apiDeleteComment,
            action.payload,
        );
        if (response.success) {
            yield put(deleteCommentSuccess(response.data));
        } 
    } catch (error) {
        yield put(deleteCommentError(error));
    }
}

function* handleGetListCommentByPost(action) {
    try {
        const response= yield call(
            apiGetlistCommentByPost,
            action.payload,
        );
        if (response.success) {
            yield put(listCommentByPostSuccess(response.data));
        } 
    } catch (error) {
        yield put(listCommentByPostError(error));
    }
}



export default function* CommentSaga() {
    yield takeLatest(commentToPost.type, handleCommentToPost);
    yield takeLatest(deleteComment.type, handleDeleteComment);
    yield takeLatest(listCommentByPost.type, handleGetListCommentByPost);
   
}
