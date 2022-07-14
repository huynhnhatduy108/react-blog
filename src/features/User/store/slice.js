import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listUser: null,
    detailUser: null,
    errors: null,
}

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {

        clearStoreUser(state){
            state.isFetching = false
            state.data = null
            state.listUser = null
            state.detailUser = null
            state.errors = null
        },

        // list
        getListUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getListUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listUser = action.payload
            state.errors = []
        },
        getListUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // detail
        getDetailUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.detailUser = action.payload
            state.errors = []
        },
        getDetailUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // create
        createUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        createUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        createUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // update
        updateUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        updateUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        updateUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // delete
        deleteUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        deleteUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        deleteUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // update avatar
        updateAvatarUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        updateAvatarUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        updateAvatarUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

}});

// ************************** Action *******************************
export const clearStoreUser = UserSlice.actions.clearStoreUser;

export const getListUser = UserSlice.actions.getListUser;
export const getListUserSuccess = UserSlice.actions.getListUserSuccess;
export const getListUserFailure = UserSlice.actions.getListUserError;

export const getDetailUser = UserSlice.actions.getDetailUser;
export const getDetailUserSuccess = UserSlice.actions.getDetailUserSuccess;
export const getDetailUserFailure = UserSlice.actions.getDetailUserError;

export const createUser = UserSlice.actions.createUser;
export const createUserSuccess = UserSlice.actions.createUserSuccess;
export const createUserFailure = UserSlice.actions.createUserError;

export const updateUser = UserSlice.actions.updateUser;
export const updateUserSuccess = UserSlice.actions.updateUserSuccess;
export const updateUserFailure = UserSlice.actions.updateUserError;

export const deleteUser = UserSlice.actions.deleteUser;
export const deleteUserSuccess = UserSlice.actions.deleteUserSuccess;
export const deleteUserFailure = UserSlice.actions.deleteUserError;

export const updateAvatarUser = UserSlice.actions.updateAvatarUser;
export const updateAvatarUserSuccess = UserSlice.actions.updateAvatarUserSuccess;
export const updateAvatarUserFailure = UserSlice.actions.updateAvatarUserError;

// ************************** Store *******************************
export const getUserSlice = (state) => state.user;

const UserReducer = UserSlice.reducer;
export default UserReducer;