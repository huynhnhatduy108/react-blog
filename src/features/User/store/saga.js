import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";

import { apiCreateUser, apiDeleteUser, apiInfoUser, apiListUser, apiUpdateAvatarUser, apiUpdateUser } from "../apiService/index";
import { createUser, createUserFailure, createUserSuccess, deleteUser, deleteUserFailure, deleteUserSuccess, getDetailUser, getDetailUserFailure, getDetailUserSuccess, getListUser, getListUserFailure, getListUserSuccess, updateAvatarUser, updateAvatarUserFailure, updateAvatarUserSuccess, updateUser, updateUserFailure, updateUserSuccess } from "./slice";

function* handleGetListUser(action) {
    try {
        const response= yield call(
            apiListUser,
            action.payload,
        );
        if (response.success) {
            yield put(getListUserSuccess(response.data));
        } 
    } catch (error) {
        yield put(getListUserFailure(error));
    }
}

function* handleGetDatailUser(action) {
    try {
        const response= yield call(
            apiInfoUser,
            action.payload,
        );
        if (response.success) {
            yield put(getDetailUserSuccess(response.data));
        } 
    } catch (error) {
        yield put(getDetailUserFailure(error));
    }
}

function* handleCreateUser(action) {
    try {
        const response= yield call(
            apiCreateUser,
            action.payload,
        );
        if (response.success) {
            yield put(createUserSuccess(response.data));
            
        } 
    } catch (error) {
        yield put(createUserFailure(error));
    }
}

function* handleUpdateUser(action) {
    try {
        const response= yield call(
            apiUpdateUser,
            action.payload,
        );
        if (response.success) {
            yield put(updateUserSuccess(response.data));
        } 
    } catch (error) {
        yield put(updateUserFailure(error));
    }
}

function* handleDeleteUser(action) {
    try {
        const response= yield call(
            apiDeleteUser,
            action.payload,
        );
        if (response.success) {
            yield put(deleteUserSuccess(response.data));
        } 
    } catch (error) {
        yield put(deleteUserFailure(error));
    }
}

function* handleUpdateAvatarUser(action) {
    try {
        const response= yield call(
            apiUpdateAvatarUser,
            action.payload,
        );
        if (response.success) {
            yield put(updateAvatarUserSuccess(response.data));
        } 
    } catch (error) {
        yield put(updateAvatarUserFailure(error));
    }
}


export default function* UserSaga() {
    yield takeLatest(getListUser.type, handleGetListUser);
    yield takeLatest(getDetailUser.type, handleGetDatailUser);
    yield takeLatest(createUser.type, handleCreateUser);
    yield takeLatest(updateUser.type, handleUpdateUser);
    yield takeLatest(deleteUser.type, handleDeleteUser);
    yield takeLatest(updateAvatarUser.type, handleUpdateAvatarUser);
}
