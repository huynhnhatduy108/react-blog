import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiUserCommentToPost, apiDeleteComment, apiGetlistCommentByPost, apiAdminCommentReply, apiDeleteCommentByPostId } from "../apiService";
import { userCommentToPost, userCommentToPostError, userCommentToPostSuccess, deleteComment, deleteCommentError, deleteCommentSuccess, listCommentByPost, listCommentByPostError, listCommentByPostSuccess, adminCommentReplySuccess, adminCommentReplyError, adminCommentReply, deleteCommentByPostIdSuccess, deleteCommentByPostIdError, deleteCommentByPostId } from "./slice";

function* handleUserCommentToPost(action) {
    try {
        const response= yield call(
            apiUserCommentToPost,
            action.payload,
        );
        if (response.success) {
            yield put(userCommentToPostSuccess(response.data));
        } 
    } catch (error) {
        yield put(userCommentToPostError(error));
    }
}

function* handleAdminCommentReply(action) {
    try {
        const response= yield call(
            apiAdminCommentReply,
            action.payload,
        );
        if (response.success) {
            yield put(adminCommentReplySuccess(response.data));
        } 
    } catch (error) {
        yield put(adminCommentReplyError(error));
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

function* handleDeleteCommentByPostId(action) {
    try {
        const response= yield call(
            apiDeleteCommentByPostId,
            action.payload,
        );
        if (response.success) {
            yield put(deleteCommentByPostIdSuccess(response.data));
        } 
    } catch (error) {
        yield put(deleteCommentByPostIdError(error));
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
    yield takeLatest(userCommentToPost.type, handleUserCommentToPost);
    yield takeLatest(adminCommentReply.type, handleAdminCommentReply);
    yield takeLatest(deleteComment.type, handleDeleteComment);
    yield takeLatest(deleteCommentByPostId.type, handleDeleteCommentByPostId);
    yield takeLatest(listCommentByPost.type, handleGetListCommentByPost);
   
}
