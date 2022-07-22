import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    dataComment: null,
    listComment: [],
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
            state.listComment = []
            state.comment = null
            state.errors = null
        },

        // Comment To Post
        userCommentToPost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        userCommentToPostSuccess(state, action) {
            state.isFetching = false
            if(action.payload.data.comment_parent_id){
                const term = [...state.listComment]
                const index = term.findIndex(item=>item.comment_id == action.payload.data.comment_parent_id)
                term[index].sub_comment = [...term[index].sub_comment, action.payload.data]
                state.listComment = term
            }
            else{
                state.listComment = [action.payload.data,...state.listComment]
            }
            state.errors = []
        },
        userCommentToPostError(state, action) {
            state.isFetching = false
            state.dataComment =null
            state.errors = action.payload
        },

        // Admin comment reply
        adminCommentReply(state, action) {
            state.isFetching = true
            state.errors = []
        },
        adminCommentReplySuccess(state, action) {
            state.isFetching = false
            if(action.payload.data.comment_parent_id){
                const temp = [...state.listComment]
                const index = temp.findIndex(item=>item.comment_id == action.payload.data.comment_parent_id)
                temp[index].sub_comment = [...temp[index].sub_comment, action.payload.data]
                state.listComment = temp
            }
            else{
                state.listComment = [action.payload.data,...state.listComment]
            }
            state.errors = []
        },
        adminCommentReplyError(state, action) {
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
            state.errors = []
            if(action.payload.comment_parent_id){
                const temp = [...state.listComment]
                const index = temp.findIndex(item=>item.comment_id == action.payload.comment_parent_id)
                temp[index].sub_comment = [...temp[index].sub_comment].filter((item)=>item.comment_id != action.payload.comment_id)
                state.listComment = temp
            }
            else{
                state.listComment = [...state.listComment].filter((item)=>item.comment_id != action.payload.comment_id)
            }
        },
        deleteCommentError(state, action) {
            state.isFetching = false
            state.dataComment =null
            state.errors = action.payload
        },

        // Delete comment by post id
        deleteCommentByPostId(state, action) {
            state.isFetching = true
            state.errors = []
        },
        deleteCommentByPostIdSuccess(state, action) {
            state.isFetching = false
            state.dataComment = action.payload
            state.errors = []
        },
        deleteCommentByPostIdError(state, action) {
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
            state.listComment = action.payload.data
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

export const userCommentToPost = CommentSlice.actions.userCommentToPost;
export const userCommentToPostSuccess = CommentSlice.actions.userCommentToPostSuccess;
export const userCommentToPostError = CommentSlice.actions.userCommentToPostError;

export const adminCommentReply = CommentSlice.actions.adminCommentReply;
export const adminCommentReplySuccess = CommentSlice.actions.adminCommentReplySuccess;
export const adminCommentReplyError = CommentSlice.actions.adminCommentReplyError;

export const deleteComment = CommentSlice.actions.deleteComment;
export const deleteCommentSuccess = CommentSlice.actions.deleteCommentSuccess;
export const deleteCommentError = CommentSlice.actions.deleteCommentError;

export const deleteCommentByPostId = CommentSlice.actions.deleteCommentByPostId;
export const deleteCommentByPostIdSuccess = CommentSlice.actions.deleteCommentByPostIdSuccess;
export const deleteCommentByPostIdError = CommentSlice.actions.deleteCommentByPostIdError;

export const listCommentByPost = CommentSlice.actions.listCommentByPost;
export const listCommentByPostSuccess = CommentSlice.actions.listCommentByPostSuccess;
export const listCommentByPostError = CommentSlice.actions.listCommentByPostError;


// ************************** Store *******************************
export const getCommentSlice = (state) => state.comment;

const CommentReducer = CommentSlice.reducer;
export default CommentReducer;