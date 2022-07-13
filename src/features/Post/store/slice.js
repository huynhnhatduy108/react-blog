import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listPost: null,
    detailPost: null,
    errors: null,
}

const PostSlice = createSlice({
    name: "Post",
    initialState,
    reducers: {

        clearStorePost(state){
            state.isFetching = false
            state.data = null
            state.listPost = null
            state.detailPost = null
            state.errors = null
        },

        // list
        getListPost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getListPostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listPost = action.payload
            state.errors = []
        },
        getListPostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // detail
        getDetailPost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailPostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.detailPost = action.payload
            state.errors = []
        },
        getDetailPostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // create
        createPost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        createPostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        createPostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // update
        updatePost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        updatePostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        updatePostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // delete
        deletePost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        deletePostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        deletePostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

}});

// ************************** Action *******************************
export const clearStorePost = PostSlice.actions.clearStorePost;

export const getListPost = PostSlice.actions.getListPost;
export const getListPostSuccess = PostSlice.actions.getListPostSuccess;
export const getListPostFailure = PostSlice.actions.getListPostError;

export const getDetailPost = PostSlice.actions.getDetailPost;
export const getDetailPostSuccess = PostSlice.actions.getDetailPostSuccess;
export const getDetailPostFailure = PostSlice.actions.getDetailPostError;

export const createPost = PostSlice.actions.createPost;
export const createPostSuccess = PostSlice.actions.createPostSuccess;
export const createPostFailure = PostSlice.actions.createPostError;

export const updatePost = PostSlice.actions.updatePost;
export const updatePostSuccess = PostSlice.actions.updatePostSuccess;
export const updatePostFailure = PostSlice.actions.updatePostError;

export const deletePost = PostSlice.actions.deletePost;
export const deletePostSuccess = PostSlice.actions.deletePostSuccess;
export const deletePostFailure = PostSlice.actions.deletePostError;

// ************************** Store *******************************
export const getPostSlice = (state) => state.Post;

const PostReducer = PostSlice.reducer;
export default PostReducer;