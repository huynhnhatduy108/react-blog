import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listTag: null,
    listTagSearch:{
        data:[],
        limit:5,
        page:1, 
        total_page:0,
        total_record:0,
    },
    detailTag: null,
    errors: null,
}

const TagSlice = createSlice({
    name: "Tag",
    initialState,
    reducers: {

        clearStoreTag(state){
            state.isFetching = false
            state.data = null
            state.listTag = null
            state.listTagSearch = {
                data:[],
                limit:5,
                page:1, 
                total_page:0,
                total_record:0,
            }
            state.detailTag = null
            state.errors = null
        },

        clearTagSearch(state){
            state.listTagSearch = {
                data:[],
                limit:5,
                page:1, 
                total_page:0,
                total_record:0,
            }
        },

        clearDetailTag(state){
            state.detailTag = null
        },

        // list
        getListTag(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getListTagSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listTag = action.payload
            state.errors = []
        },
        getListTagError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // search
        searchTag(state, action) {
            state.isFetching = true
            state.errors = []
        },
        searchTagSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload.data
            state.listTagSearch = action.payload.data
            state.errors = []
        },
        searchTagError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // detail
        getDetailTag(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailTagSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload.data
            state.detailTag = action.payload.data
            state.errors = []
        },
        getDetailTagError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // create
        createTag(state, action) {
            state.isFetching = true
            state.errors = []
        },
        createTagSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        createTagError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // update
        updateTag(state, action) {
            state.isFetching = true
            state.errors = []
        },
        updateTagSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        updateTagError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // delete
        deleteTag(state, action) {
            state.isFetching = true
            state.errors = []
        },
        deleteTagSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        deleteTagError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

}});

// ************************** Action *******************************
export const clearStoreTag = TagSlice.actions.clearStoreTag;
export const clearTagSearch = TagSlice.actions.clearTagSearch;
export const clearDetailTag = TagSlice.actions.clearDetailTag;

export const getListTag = TagSlice.actions.getListTag;
export const getListTagSuccess = TagSlice.actions.getListTagSuccess;
export const getListTagError = TagSlice.actions.getListTagError;

export const searchTag = TagSlice.actions.searchTag;
export const searchTagSuccess = TagSlice.actions.searchTagSuccess;
export const searchTagError = TagSlice.actions.searchTagError;

export const getDetailTag = TagSlice.actions.getDetailTag;
export const getDetailTagSuccess = TagSlice.actions.getDetailTagSuccess;
export const getDetailTagError = TagSlice.actions.getDetailTagError;

export const createTag = TagSlice.actions.createTag;
export const createTagSuccess = TagSlice.actions.createTagSuccess;
export const createTagError = TagSlice.actions.createTagError;

export const updateTag = TagSlice.actions.updateTag;
export const updateTagSuccess = TagSlice.actions.updateTagSuccess;
export const updateTagError = TagSlice.actions.updateTagError;

export const deleteTag = TagSlice.actions.deleteTag;
export const deleteTagSuccess = TagSlice.actions.deleteTagSuccess;
export const deleteTagError = TagSlice.actions.deleteTagError;

// ************************** Store *******************************
export const getTagSlice = (state) => state.tag;

const TagReducer = TagSlice.reducer;
export default TagReducer;