import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery} from "redux-saga/effects";

import { apiCreateCategory, apiDeleteCategory, apiDetailCategory, apiListCategory, apiUpdateCategory } from "../apiService/index";
import { getListCategory } from "./slice";

function* handleGetListCategory(action) {
    try {
        const response= yield call(
            apiListCategory,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleGetDatailCategory(action) {
    try {
        const response= yield call(
            apiDetailCategory,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleCreateCategory(action) {
    try {
        const response= yield call(
            apiCreateCategory,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleUpdateCategory(action) {
    try {
        const response= yield call(
            apiUpdateCategory,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleDeleteCategory(action) {
    try {
        const response= yield call(
            apiDeleteCategory,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}


export default function* CategorySaga() {
    yield takeEvery(getListCategory.type, handleGetListCategory);
    // yield takeEvery(getListCategory.type, handleGetDatailCategory);
    // yield takeEvery(getListCategory.type, handleCreateCategory);
    // yield takeEvery(getListCategory.type, handleUpdateCategory);
    // yield takeEvery(getListCategory.type, handleDeleteCategory);
}
