import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";

import { apiCreateTag, apiDeleteTag, apiDetailTag, apiListTag, apiUpdateTag } from "../apiService/index";
import { createTag, createTagError, createTagSuccess, deleteTag, deleteTagError, deleteTagSuccess, getDetailTag, getDetailTagError, getDetailTagSuccess, getListTag, getListTagError, getListTagSuccess, updateTag, updateTagError, updateTagSuccess } from "./slice";

function* handleGetListTag(action) {
    try {
        const response= yield call(
            apiListTag,
            action.payload,
        );
        if (response.success) {
            yield put(getListTagSuccess(response.data));
        } 
    } catch (error) {
        yield put(getListTagError(error));
    }
}

function* handleGetDatailTag(action) {
    try {
        const response= yield call(
            apiDetailTag,
            action.payload,
        );
        if (response.success) {
            yield put(getDetailTagSuccess(response.data));
        } 
    } catch (error) {
        yield put(getDetailTagError(error));
    }
}

function* handleCreateTag(action) {
    try {
        const response= yield call(
            apiCreateTag,
            action.payload,
        );
        if (response.success) {
            yield put(createTagSuccess(response.data));
        } 
    } catch (error) {
        yield put(createTagError(error));
    }
}

function* handleUpdateTag(action) {
    try {
        const response= yield call(
            apiUpdateTag,
            action.payload,
        );
        if (response.success) {
            yield put(updateTagSuccess(response.data));
        } 
    } catch (error) {
        yield put(updateTagError(error));
    }
}

function* handleDeleteTag(action) {
    try {
        const response= yield call(
            apiDeleteTag,
            action.payload,
        );
        if (response.success) {
            yield put(deleteTagSuccess(response.data));
        } 
    } catch (error) {
        yield put(deleteTagError(error));
    }
}


export default function* TagSaga() {
    yield takeLatest(getListTag.type, handleGetListTag);
    yield takeLatest(getDetailTag.type, handleGetDatailTag);
    yield takeLatest(createTag.type, handleCreateTag);
    yield takeLatest(updateTag.type, handleUpdateTag);
    yield takeLatest(deleteTag.type, handleDeleteTag);
}
