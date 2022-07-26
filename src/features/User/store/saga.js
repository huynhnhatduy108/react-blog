import {PayloadAction} from "@reduxjs/toolkit";
import { message } from "antd";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";

import { apiCreateUser, apiDeleteUser, apiInfoUser, apiListUser, apiUpdateAvatarUser, apiUpdateUser } from "../apiService/index";
import { createUser, createUserFailure, createUserSuccess, deleteUser, deleteUserFailure, deleteUserSuccess, getDetailUser, getDetailUserFailure, getDetailUserSuccess, getListUser, getListUserFailure, getListUserSuccess, getUserSlice, updateAvatarUser, updateAvatarUserFailure, updateAvatarUserSuccess, updateUser, updateUserFailure, updateUserSuccess } from "./slice";

function* handleGetListUser(action) {
    try {
        const response= yield call(
            apiListUser,
            action.payload,
        );
        if (response.success) {
            yield put(getListUserSuccess(response.data));
        } 
        else{
            yield put(getListUserFailure(response));

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
        else{
            yield put(getDetailUserFailure(response));

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
            const userStore = yield select(getUserSlice);
            const {listUser} = userStore;
            const {limit, page} = listUser
            yield put(getListUser({limit, page}));
            message.success("Create user success!");
        } 
        else{
            yield put(createUserFailure(response));
            message.error("Create user success!");

        }
    } catch (error) {
        yield put(createUserFailure(error));
        message.error("Create user success!");
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
            const userStore = yield select(getUserSlice);
            const {listUser} = userStore;
            const {limit, page} = listUser
            yield put(getListUser({limit, page}));
            message.success("Update user success!");
        } 
        else{
            yield put(updateUserFailure(response));

        }
    } catch (error) {
        yield put(updateUserFailure(error));
        message.error("Update user error!");

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
            const userStore = yield select(getUserSlice);
            const {listUser} = userStore;
            const {limit, page} = listUser
            yield put(getListUser({limit, page}));
            message.success("Delete user success!");
        } 
        else{
            yield put(deleteUserFailure(response));
            message.error("Delete user error!");

        }
    } catch (error) {
        yield put(deleteUserFailure(error));
        message.error("Delete user error!");

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
        else{
            yield put(updateAvatarUserFailure(response));

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
