import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listCategory: null,
    listCategorySearch:{
        items:[],
        limit:5,
        page:1, 
        total_page:0,
        total_record:0,
    },
    detailCategory: null,
    errors: null,
}

const CategorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {

        clearStoreCategory(state){
            state.isFetching = false
            state.data = null
            state.listCategory = null
            state.listCategorySearch = {
                items:[],
                limit:5,
                page:1, 
                total_page:0,
                total_record:0,
            }
            state.detailCategory = null
            state.errors = null
        },

        clearCategorySearch(state){
            state.listCategorySearch = {
                items:[],
                limit:5,
                page:1, 
                total_page:0,
                total_record:0,
            }
        },

        clearDetailCategory(state){
            state.detailCategory = null
        },

        // list
        getListCategory(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getListCategorySuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listCategory = action.payload
            state.errors = []
        },
        getListCategoryError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // search
        searchCategory(state, action) {
            state.isFetching = true
            state.errors = []
        },
        searchCategorySuccess(state, action) {
            state.isFetching = false
            state.data = action.payload.data
            state.listCategorySearch = action.payload.data
            state.errors = []
        },
        searchCategoryError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // detail
        getDetailCategory(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailCategorySuccess(state, action) {
            state.isFetching = false
            state.data = action.payload.data
            state.detailCategory = action.payload.data
            state.errors = []
        },
        getDetailCategoryError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // create
        createCategory(state, action) {
            state.isFetching = true
            state.errors = []
        },
        createCategorySuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        createCategoryError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // update
        updateCategory(state, action) {
            state.isFetching = true
            state.errors = []
        },
        updateCategorySuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        updateCategoryError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // delete
        deleteCategory(state, action) {
            state.isFetching = true
            state.errors = []
        },
        deleteCategorySuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        deleteCategoryError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

}});

// ************************** Action *******************************
export const clearStoreCategory = CategorySlice.actions.clearStoreCategory;
export const clearCategorySearch = CategorySlice.actions.clearCategorySearch;
export const clearDetailCategory = CategorySlice.actions.clearDetailCategory;

export const getListCategory = CategorySlice.actions.getListCategory;
export const getListCategorySuccess = CategorySlice.actions.getListCategorySuccess;
export const getListCategoryError = CategorySlice.actions.getListCategoryError;

export const searchCategory = CategorySlice.actions.searchCategory;
export const searchCategorySuccess = CategorySlice.actions.searchCategorySuccess;
export const searchCategoryError = CategorySlice.actions.searchCategoryError;

export const getDetailCategory = CategorySlice.actions.getDetailCategory;
export const getDetailCategorySuccess = CategorySlice.actions.getDetailCategorySuccess;
export const getDetailCategoryError = CategorySlice.actions.getDetailCategoryError;

export const createCategory = CategorySlice.actions.createCategory;
export const createCategorySuccess = CategorySlice.actions.createCategorySuccess;
export const createCategoryError = CategorySlice.actions.createCategoryError;

export const updateCategory = CategorySlice.actions.updateCategory;
export const updateCategorySuccess = CategorySlice.actions.updateCategorySuccess;
export const updateCategoryError = CategorySlice.actions.updateCategoryError;

export const deleteCategory = CategorySlice.actions.deleteCategory;
export const deleteCategorySuccess = CategorySlice.actions.deleteCategorySuccess;
export const deleteCategoryError = CategorySlice.actions.deleteCategoryError;

// ************************** Store *******************************
export const getCategorySlice = (state) => state.category;

const CategoryReducer = CategorySlice.reducer;
export default CategoryReducer;