import {PayloadAction} from "@reduxjs/toolkit";
import { message } from "antd";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiCreateCategory, apiDeleteCategory, apiDetailCategory, apiListCategory, apiSearchCategory, apiUpdateCategory } from "../apiService/index";
import { createCategory, createCategoryError, createCategorySuccess, deleteCategory, deleteCategoryError, deleteCategorySuccess, getCategorySlice, getDetailCategory, getDetailCategoryError, getDetailCategorySuccess, getListCategory, getListCategoryError, getListCategorySuccess, searchCategory, searchCategoryError, searchCategorySuccess, updateCategory, updateCategoryError, updateCategorySuccess } from "./slice";

function* handleGetListCategory(action) {
    try {
        const response= yield call(
            apiListCategory,
            action.payload,
        );
        if (response.success) {
            yield put(getListCategorySuccess(response.data));
        } 
        else{
            yield put(getListCategoryError(response));

        }
    } catch (error) {
        yield put(getListCategoryError(error));
    }
}

function* handleSearchCategory(action) {
    try {
        const response= yield call(
            apiSearchCategory,
            action.payload,
        );
        if (response.success) {
            yield put(searchCategorySuccess(response.data));
        } 
        else{
            yield put(searchCategoryError(response));

        }
    } catch (error) {
        yield put(searchCategoryError(error));
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
        else{
            yield put(getDetailCategoryError(response));

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
            const categoryStore = yield select(getCategorySlice);
            const {listCategorySearch} = categoryStore;
            const {limit, page} = listCategorySearch
            yield put(searchCategory({limit, page}));
            message.success("Create catgory success!")
        } 
        else{
            yield put(createCategoryError(response));
            message.error("Create catgory error!")

        }
    } catch (error) {
        yield put(createCategoryError(error));
        message.error("Create catgory error!")

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
            const categoryStore = yield select(getCategorySlice);
            const {listCategorySearch} = categoryStore;
            const {limit, page} = listCategorySearch
            yield put(searchCategory({limit, page}));
            message.success("Update catgory success!")

        } 
        else{
            yield put(updateCategoryError(response));
            message.error("Update catgory error!")

        }
    } catch (error) {
        yield put(updateCategoryError(error));
        message.error("Update catgory error!")

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
            const categoryStore = yield select(getCategorySlice);
            const {listCategorySearch} = categoryStore;
            const {limit, page} = listCategorySearch
            yield put(searchCategory({limit, page}));
            message.success("Delete category success!");

        } 
        else{
            yield put(deleteCategoryError(response));
            message.error("Delete category error!");

        }
    } catch (error) {
        yield put(deleteCategoryError(error));
        message.error("Delete category error!");

    }
}


export default function* CategorySaga() {
    yield takeLatest(getListCategory.type, handleGetListCategory);
    yield takeLatest(searchCategory.type, handleSearchCategory);
    yield takeLatest(getDetailCategory.type, handleGetDatailCategory);
    yield takeLatest(createCategory.type, handleCreateCategory);
    yield takeLatest(updateCategory.type, handleUpdateCategory);
    yield takeLatest(deleteCategory.type, handleDeleteCategory);
}
