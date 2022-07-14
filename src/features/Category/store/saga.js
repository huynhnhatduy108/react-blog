import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiCreateCategory, apiDeleteCategory, apiDetailCategory, apiListCategory, apiUpdateCategory } from "../apiService/index";
import { createCategory, createCategoryError, createCategorySuccess, deleteCategory, deleteCategoryError, deleteCategorySuccess, getDetailCategory, getDetailCategoryError, getDetailCategorySuccess, getListCategory, getListCategoryError, getListCategorySuccess, updateCategory, updateCategoryError, updateCategorySuccess } from "./slice";

function* handleGetListCategory(action) {
    try {
        const response= yield call(
            apiListCategory,
            action.payload,
        );
        if (response.success) {
            yield put(getListCategorySuccess(response.data));
        } 
    } catch (error) {
        yield put(getListCategoryError(error));
    }
}

function* handleGetDatailCategory(action) {
    try {
        const response= yield call(
            apiDetailCategory,
            action.payload,
        );
        if (response.success) {
            yield put(getDetailCategorySuccess(response.data));
        } 
    } catch (error) {
        yield put(getDetailCategoryError(error));
    }
}

function* handleCreateCategory(action) {
    try {
        const response= yield call(
            apiCreateCategory,
            action.payload,
        );
        if (response.success) {
            yield put(createCategorySuccess(response.data));
        } 
    } catch (error) {
        yield put(createCategoryError(error));
    }
}

function* handleUpdateCategory(action) {
    try {
        const response= yield call(
            apiUpdateCategory,
            action.payload,
        );
        if (response.success) {
            yield put(updateCategorySuccess(response.data));
        } 
    } catch (error) {
        yield put(updateCategoryError(error));
    }
}

function* handleDeleteCategory(action) {
    try {
        const response= yield call(
            apiDeleteCategory,
            action.payload,
        );
        if (response.success) {
            yield put(deleteCategorySuccess(response.data));
        } 
    } catch (error) {
        yield put(deleteCategoryError(error));
    }
}


export default function* CategorySaga() {
    yield takeLatest(getListCategory.type, handleGetListCategory);
    yield takeLatest(getDetailCategory.type, handleGetDatailCategory);
    yield takeLatest(createCategory.type, handleCreateCategory);
    yield takeLatest(updateCategory.type, handleUpdateCategory);
    yield takeLatest(deleteCategory.type, handleDeleteCategory);
}
