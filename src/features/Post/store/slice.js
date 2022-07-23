import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listPost: [],
    listPostUserSearch:{
        items:[],
        limit:15,
        page:1, 
        total_page:0,
        total_record:0,
        isFetching: false
    },
    listPostPaging:{
        items:[],
        limit:5,
        page:1, 
        total_page:0,
        total_record:0,
        isFetching: false

    },
    listPostRelation:[],
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
            state.listPost = []
            state.detailPost = null
            state.listPostRelation = []
            state.listPostUserSearch ={
                items:[],
                limit:15,
                page:1, 
                total_page:0,
                total_record:0,
                isFetching: false,
            }
            state.listPostPaging={
                items:[],
                limit:5,
                page:1, 
                total_page:0,
                total_record:0,
                isFetching:false
            }
            state.errors = null
        },

        clearListPost(state){
            state.listPost = []
        },

        clearListPostPaging(state){
            state.listPostPaging={
                items:[],
                limit:5,
                page:1, 
                total_page:0,
                total_record:0,
                isFetching:false
            }
        },

        clearListPostUserSearch(state){
            state.listPostUserSearch={
                items:[],
                limit:15,
                page:1, 
                total_page:0,
                total_record:0,
                isFetching:false
            }
        },

        clearListPostRelation(state){
            state.listPostRelation = []
        },

        clearDetailPost(state){
            state.detailPost = null
        },

        // list
        getListPost(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getListPostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload.data
            state.listPost = action.payload.data
            state.listPostPaging = {...state.listPostPaging,...action.payload.data} 
            state.errors = []
        },
        getListPostError(state, action) {
            state.isFetching = false
            state.data =null
            state.listPostPaging ={...state.listPostPaging}
            state.errors = action.payload
        },

        // readmore list post
        readMoreListPost(state, action) {
            state.listPostPaging.isFetching= true
        },

        readMoreListPostSuccess(state, action) {
            state.listPostPaging.isFetching= false
            state.listPostPaging.limit = action.payload.data.limit
            state.listPostPaging.page = action.payload.data.page
            state.listPostPaging.total_page = action.payload.data.total_page
            state.listPostPaging.total_record = action.payload.data.total_record
            state.listPostPaging.items = [...state.listPostPaging.items,...action.payload.data.items]
           
        },

        readMoreListPostError(state, action) {
            state.listPostPaging.isFetching= false
            state.errors = action.payload
        },

        // list post user search
        getListPostUserSeach(state, action) {
            state.listPostUserSearch.isFetching = true
            state.errors = []
        },
        getListPostUserSeachSuccess(state, action) {
            state.listPostUserSearch.isFetching = false
            state.listPostUserSearch ={...state.listPostUserSearch,...action.payload.data} 
            state.errors = []
        },
        getListPostUserSeachError(state, action) {
            state.listPostUserSearch.isFetching = false
            state.listPostUserSearch ={...state.listPostUserSearch} 
            state.errors = action.payload
        },
        
        // list post user search read more
        readMorePostUserSeach(state, action) {
            state.listPostUserSearch.isFetching = true
            state.errors = []
        },
        readMorePostUserSeachSuccess(state, action) {
            state.listPostUserSearch.isFetching= false
            state.listPostUserSearch.limit = action.payload.data.limit
            state.listPostUserSearch.page = action.payload.data.page
            state.listPostUserSearch.total_page = action.payload.data.total_page
            state.listPostUserSearch.total_record = action.payload.data.total_record
            state.listPostUserSearch.items = [...state.listPostUserSearch.items,...action.payload.data.items]
        },
        readMorePostUserSeachError(state, action) {
            state.listPostUserSearch.isFetching = false
            state.listPostUserSearch ={...state.listPostUserSearch} 
            state.errors = action.payload
        },


         // list post relation
        getListPostRelation(state, action) {
            state.isFetching = true
        },
        getListPostRelationSuccess(state, action) {
            state.isFetching = false
            state.listPostRelation= action.payload.data
        },
        getListPostRelationError(state, action) {
            state.isFetching = false
            state.listPostRelation =[...state.listPostRelation]
            state.errors = action.payload
        },

        // detail post by id
        getDetailPostById(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailPostByIdSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload.data
            state.detailPost = action.payload.data
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
            state.data = action.payload.data
            state.detailPost = action.payload.data
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

        countCommentPost(state, action){
            const temp = {...state.listPostPaging}
            const index = temp.items.findIndex((item)=>item.post_id == action.payload.post_id)
            temp.items[index].comment_count = action.payload.comment_count;
            state.listPostPaging = temp
        },

}});

// ************************** Action *******************************
export const clearStorePost = PostSlice.actions.clearStorePost;
export const clearListPost = PostSlice.actions.clearListPost;
export const clearListPostPaging = PostSlice.actions.clearListPostPaging;
export const clearDetailPost = PostSlice.actions.clearDetailPost;
export const clearListPostUserSearch = PostSlice.actions.clearListPostUserSearch;

export const getListPost = PostSlice.actions.getListPost;
export const getListPostSuccess = PostSlice.actions.getListPostSuccess;
export const getListPostError = PostSlice.actions.getListPostError;

export const readMoreListPost = PostSlice.actions.readMoreListPost;
export const readMoreListPostSuccess = PostSlice.actions.readMoreListPostSuccess;
export const readMoreListPostError = PostSlice.actions.readMoreListPostError;

export const getListPostUserSeach = PostSlice.actions.getListPostUserSeach;
export const getListPostUserSeachSuccess = PostSlice.actions.getListPostUserSeachSuccess;
export const getListPostUserSeachError = PostSlice.actions.getListPostUserSeachError;

export const readMorePostUserSeach = PostSlice.actions.readMorePostUserSeach;
export const readMorePostUserSeachSuccess = PostSlice.actions.readMorePostUserSeachSuccess;
export const readMorePostUserSeachError = PostSlice.actions.readMorePostUserSeachError;

export const getListPostRelation = PostSlice.actions.getListPostRelation;
export const getListPostRelationSuccess = PostSlice.actions.getListPostRelationSuccess;
export const getListPostRelationError = PostSlice.actions.getListPostRelationError;

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

export const countCommentPost = PostSlice.actions.countCommentPost;

// ************************** Store *******************************
export const getPostSlice = (state) => state.post;

const PostReducer = PostSlice.reducer;
export default PostReducer;