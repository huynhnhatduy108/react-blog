import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    dataComment: null,
    listComment: null,
    comment: null,
    errors: null,
}

const CommentSlice = createSlice({
    name: "Comment",
    initialState,
    reducers: {

        clearStoreComment(state){
            state.isFetching = false
            state.dataComment = null
            state.listComment = null
            state.comment = null
            state.errors = null
        },

        // Comment To Post
        commentToPost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        commentToPostSuccess(state, action) {
            state.isFetching = false
            state.dataComment = action.payload
            state.comment = action.payload
            state.errors = []
        },
        commentToPostError(state, action) {
            state.isFetching = false
            state.dataComment =null
            state.errors = action.payload
        },

        // Delete comment
        deleteComment(state, action) {
            state.isFetching = true
            state.errors = []
        },
        deleteCommentSuccess(state, action) {
            state.isFetching = false
            state.dataComment = action.payload
            state.errors = []
        },
        deleteCommentError(state, action) {
            state.isFetching = false
            state.dataComment =null
            state.errors = action.payload
        },

        // list comment to post
        listCommentByPost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        listCommentByPostSuccess(state, action) {
            state.isFetching = false
            state.listComment = action.payload
            state.dataComment = action.payload
            state.errors = []
        },
        listCommentByPostError(state, action) {
            state.isFetching = false
            state.listComment = null
            state.errors = action.payload
        },


}});

// ************************** Action *******************************
export const clearStoreComment = CommentSlice.actions.clearStoreComment;

export const commentToPost = CommentSlice.actions.commentToPost;
export const commentToPostSuccess = CommentSlice.actions.commentToPostSuccess;
export const commentToPostError = CommentSlice.actions.commentToPostError;

export const deleteComment = CommentSlice.actions.deleteComment;
export const deleteCommentSuccess = CommentSlice.actions.deleteCommentSuccess;
export const deleteCommentError = CommentSlice.actions.deleteCommentError;

export const listCommentByPost = CommentSlice.actions.listCommentByPost;
export const listCommentByPostSuccess = CommentSlice.actions.listCommentByPostSuccess;
export const listCommentByPostError = CommentSlice.actions.listCommentByPostError;


// ************************** Store *******************************
export const getCommentSlice = (state) => state.comment;

const CommentReducer = CommentSlice.reducer;
export default CommentReducer;