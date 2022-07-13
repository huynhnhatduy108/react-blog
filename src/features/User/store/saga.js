import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery} from "redux-saga/effects";

import { apiCreateUser, apiDeleteUser, apiDetailUser, apiListUser, apiUpdateUser } from "../apiService/index";
import {} from "./slice";

function* handleGetListUser(action) {
    try {
        const response= yield call(
            apiListUser,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleGetDatailUser(action) {
    try {
        const response= yield call(
            apiDetailUser,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleCreateUser(action) {
    try {
        const response= yield call(
            apiCreateUser,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleUpdateUser(action) {
    try {
        const response= yield call(
            apiUpdateUser,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}

function* handleDeleteUser(action) {
    try {
        const response= yield call(
            apiDeleteUser,
            action.payload,
        );
        if (response.success) {
            yield put((response.data));
        } 
    } catch (error) {
        yield put((error));
    }
}


export default function* UserSaga() {
    // yield takeEvery(getListUser.type, handleGetListUser);
    // yield takeEvery(getListUser.type, handleGetDatailUser);
    // yield takeEvery(getListUser.type, handleCreateUser);
    // yield takeEvery(getListUser.type, handleUpdateUser);
    // yield takeEvery(getListUser.type, handleDeleteUser);
}
