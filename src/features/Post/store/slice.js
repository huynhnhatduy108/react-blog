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

        // detail post by id
        getDetailPostById(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailPostByIdSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.detailPost = action.payload
            state.errors = []
        },
        getDetailPostByIdError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // detail by slug
        getDetailPostBySlug(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailPostBySlugSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.detailPost = action.payload
            state.errors = []
        },
        getDetailPostBySlugError(state, action) {
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
export const getListPostError = PostSlice.actions.getListPostError;

export const getDetailPostById = PostSlice.actions.getDetailPostById;
export const getDetailPostByIdSuccess = PostSlice.actions.getDetailPostByIdSuccess;
export const getDetailPostByIdError = PostSlice.actions.getDetailPostByIdError;

export const getDetailPostBySlug = PostSlice.actions.getDetailPostBySlug;
export const getDetailPostBySlugSuccess = PostSlice.actions.getDetailPostBySlugSuccess;
export const getDetailPostBySlugError = PostSlice.actions.getDetailPostBySlugError;

export const createPost = PostSlice.actions.createPost;
export const createPostSuccess = PostSlice.actions.createPostSuccess;
export const createPostError = PostSlice.actions.createPostError;

export const updatePost = PostSlice.actions.updatePost;
export const updatePostSuccess = PostSlice.actions.updatePostSuccess;
export const updatePostError = PostSlice.actions.updatePostError;

export const deletePost = PostSlice.actions.deletePost;
export const deletePostSuccess = PostSlice.actions.deletePostSuccess;
export const deletePostError = PostSlice.actions.deletePostError;

// ************************** Store *******************************
export const getPostSlice = (state) => state.post;

const PostReducer = PostSlice.reducer;
export default PostReducer;