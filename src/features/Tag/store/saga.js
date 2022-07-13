import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery} from "redux-saga/effects";

import { apiCreateTag, apiDeleteTag, apiDetailTag, apiListTag, apiUpdateTag } from "../apiService/index";
import {} from "./slice";

function* handleGetListTag(action) {
    try {
        const response= yield call(
            apiListTag,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleGetDatailTag(action) {
    try {
        const response= yield call(
            apiDetailTag,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleCreateTag(action) {
    try {
        const response= yield call(
            apiCreateTag,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleUpdateTag(action) {
    try {
        const response= yield call(
            apiUpdateTag,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleDeleteTag(action) {
    try {
        const response= yield call(
            apiDeleteTag,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}


export default function* TagSaga() {
    // yield takeEvery(getListTag.type, handleGetListTag);
    // yield takeEvery(getListTag.type, handleGetDatailTag);
    // yield takeEvery(getListTag.type, handleCreateTag);
    // yield takeEvery(getListTag.type, handleUpdateTag);
    // yield takeEvery(getListTag.type, handleDeleteTag);
}
