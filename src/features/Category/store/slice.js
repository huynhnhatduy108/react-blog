import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listCategory: null,
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
            state.detailCategory = null
            state.errors = null
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

        // detail
        getDetailCategory(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getDetailCategorySuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.detailCategory = action.payload
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

export const getListCategory = CategorySlice.actions.getListCategory;
export const getListCategorySuccess = CategorySlice.actions.getListCategorySuccess;
export const getListCategoryError = CategorySlice.actions.getListCategoryError;

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
export const getCategorySlice = (state) => state.Category;

const CategoryReducer = CategorySlice.reducer;
export default CategoryReducer;