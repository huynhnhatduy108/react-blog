import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    isLogin: null,
    isLogout: null,
    token:null,
    profile:null,
    errors: null,
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {

        clearStoreAuth(state){
            state.isFetching = false
            state.data = null
            state.isLogin = null
            state.isLogout = null
            state.token = null
            state.profile = null
            state.errors = null
        },

        // register User
        registerUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        registerUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        registerUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // User Login
        userLogin(state, action) {
            state.isFetching = true
            state.errors = []
        },
        userLoginSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        userLoginError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

         // facebook login
         facebookLogin(state, action) {
            state.isFetching = true
            state.errors = []
        },
        facebookLoginSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        facebookLoginError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

         // google login
         googleLogin(state, action) {
            state.isFetching = true
            state.errors = []
        },
        googleLoginSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        googleLoginError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

         // Profile User
         profileUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        profileUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        profileUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

         // logout User
         logoutUser(state, action) {
            state.isFetching = true
            state.errors = []
        },
        logoutUserSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        logoutUserError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

         // check Token
         checkToken(state, action) {
            state.isFetching = true
            state.errors = []
        },
        checkTokenSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        checkTokenError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },


}});

// ************************** Action *******************************
export const clearStoreAuth = AuthSlice.actions.clearStoreAuth;

export const registerUser = AuthSlice.actions.registerUser;
export const registerUserSuccess = AuthSlice.actions.registerUserSuccess;
export const registerUserError = AuthSlice.actions.registerUserError;

export const userLogin = AuthSlice.actions.userLogin;
export const userLoginSuccess = AuthSlice.actions.userLoginSuccess;
export const userLoginError = AuthSlice.actions.userLoginError;

export const facebookLogin = AuthSlice.actions.facebookLogin;
export const facebookLoginSuccess = AuthSlice.actions.facebookLoginSuccess;
export const facebookLoginError = AuthSlice.actions.facebookLoginError;

export const googleLogin = AuthSlice.actions.googleLogin;
export const googleLoginSuccess = AuthSlice.actions.googleLoginSuccess;
export const googleLoginError = AuthSlice.actions.googleLoginError;

export const profileUser = AuthSlice.actions.profileUser;
export const profileUserSuccess = AuthSlice.actions.profileUserSuccess;
export const profileUserError = AuthSlice.actions.profileUserError;

export const logoutUser = AuthSlice.actions.logoutUser;
export const logoutUserSuccess = AuthSlice.actions.logoutUserSuccess;
export const logoutUserError = AuthSlice.actions.logoutUserError;

export const checkToken = AuthSlice.actions.checkToken;
export const checkTokenSuccess = AuthSlice.actions.checkTokenSuccess;
export const checkTokenError = AuthSlice.actions.checkTokenError;

// ************************** Store *******************************
export const getAuthSlice = (state) => state.auth;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;