import {PayloadAction} from "@reduxjs/toolkit";
import { message } from "antd";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";

import { apiCreateTag, apiDeleteTag, apiDetailTag, apiListTag, apiSearchTag, apiUpdateTag } from "../apiService/index";
import { createTag, createTagError, createTagSuccess, deleteTag, deleteTagError, deleteTagSuccess, getDetailTag, getDetailTagError, getDetailTagSuccess, getListTag, getListTagError, getListTagSuccess, getTagSlice, searchTag, searchTagError, searchTagSuccess, updateTag, updateTagError, updateTagSuccess } from "./slice";

function* handleGetListTag(action) {
    try {
        const response= yield call(
            apiListTag,
            action.payload,
        );
        if (response.success) {
            yield put(getListTagSuccess(response.data));
        } 
        else{
            yield put(getListTagError(response));

        }
    } catch (error) {
        yield put(getListTagError(error));
    }
}

function* handleSearchTag(action) {
    try {
        const response= yield call(
            apiSearchTag,
            action.payload,
        );
        if (response.success) {
            yield put(searchTagSuccess(response.data));
        } 
        else{
            yield put(searchTagError(response));

        }
    } catch (error) {
        yield put(searchTagError(error));
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
        else{
            yield put(getDetailTagError(response));

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
            const tagStore = yield select(getTagSlice);
            const {listTagSearch} = tagStore;
            const {limit, page} = listTagSearch
            yield put(searchTag({limit, page}));
            message.success("Create tag success!");
        } 
        else{
            yield put(createTagError(response));
            message.error("Create tag success!");

        }
    } catch (error) {
        yield put(createTagError(error));
        message.error("Create tag success!");
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
            const tagStore = yield select(getTagSlice);
            const {listTagSearch} = tagStore;
            const {limit, page} = listTagSearch
            yield put(searchTag({limit, page}));
            message.success("Update tag success!")
        } 
        else{
            yield put(updateTagError(response));
            message.error("Update tag error!");

        }
    } catch (error) {
        yield put(updateTagError(error));
        message.error("Update tag error!");
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
            const tagStore = yield select(getTagSlice);
            const {listTagSearch} = tagStore;
            const {limit, page} = listTagSearch
            yield put(searchTag({limit, page}));
            message.success("Delete tag success!")

        } 
        else{
            yield put(deleteTagError(response));
            message.error("Delete tag error!");

        }
    } catch (error) {
        yield put(deleteTagError(error));
        message.error("Delete tag error!");

    }
}


export default function* TagSaga() {
    yield takeLatest(getListTag.type, handleGetListTag);
    yield takeLatest(searchTag.type, handleSearchTag);
    yield takeLatest(getDetailTag.type, handleGetDatailTag);
    yield takeLatest(createTag.type, handleCreateTag);
    yield takeLatest(updateTag.type, handleUpdateTag);
    yield takeLatest(deleteTag.type, handleDeleteTag);
}
