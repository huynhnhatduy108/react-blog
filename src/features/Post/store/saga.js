import {PayloadAction} from "@reduxjs/toolkit";
import { message } from "antd";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { getListCategory } from "../../Category/store/slice";
import { listCommentByPost } from "../../Comment/store/slice";
import { getListTag, getTagSlice } from "../../Tag/store/slice";

import { apiCreatePost, apiDeletePost, apiDetailPostById, apiListPost, apiUpdatePost,  apiDetailPostBySlug, apiListPostRelation, apiListCoinChart} from "../apiService/index";
import { createPost, createPostError, createPostSuccess, deletePost, deletePostError, deletePostSuccess, getDetailPostById, getDetailPostByIdError, getDetailPostByIdSuccess, getDetailPostBySlug, getDetailPostBySlugError, getDetailPostBySlugSuccess, getListCoinChart, getListCoinChartError, getListCoinChartSuccess, getListPost, getListPostError, getListPostRelation, getListPostRelationError, getListPostRelationSuccess, getListPostSuccess, getListPostUserSeach, getListPostUserSeachError, getListPostUserSeachSuccess, getPostSlice, readMoreListPost, readMoreListPostError, readMoreListPostSuccess, readMorePostUserSeach, readMorePostUserSeachError, readMorePostUserSeachSuccess, updatePost, updatePostError, updatePostSuccess } from "./slice";

function* handleGetListPost(action) {
    try {
        const response= yield call(apiListPost,action.payload);
        if (response.success) {
            yield put(getListPostSuccess(response.data));
            if (action.payload.detail==1){
                yield put(getListCategory());
                yield put(getListTag());
            }
        } 
        else{
            yield put(getListPostError(response));

        }
    } catch (error) {
        yield put(getListPostError(error));
    }
}


function* handleReadMoreListPost(action) {
    try {
        const response= yield call(apiListPost,action.payload);
        if (response.success) {
            yield put(readMoreListPostSuccess(response.data));
        } 
        else{
            yield put(readMoreListPostError(response));

        }
    } catch (error) {
        yield put(readMoreListPostError(error));
    }
}


function* handleGetListPostUserSearch(action) {
    try {
        const response= yield call(apiListPost,action.payload);
        if (response.success) {
            yield put(getListPostUserSeachSuccess(response.data));
        } 
        else{
            yield put(getListPostUserSeachError(response));

        }
    } catch (error) {
        yield put(getListPostUserSeachError(error));
    }
}

function* handleReadMorePostUserSearch(action) {
    try {
        const response= yield call(apiListPost,action.payload);
        if (response.success) {
            yield put(readMorePostUserSeachSuccess(response.data));
        } 
        else{
            yield put(readMorePostUserSeachError(response));

        }
    } catch (error) {
        yield put(readMorePostUserSeachError(error));
    }
}

function* handleGetListPostRelation(action) {
    try {
        const response= yield call(apiListPostRelation,action.payload);
        if (response.success) {
            yield put(getListPostRelationSuccess(response.data));
        } 
        else{
            yield put(getListPostRelationError(response));

        }
    } catch (error) {
        yield put(getListPostRelationError(error));
    }
}


function* handleGetDetailPostById(action) {
    try {
        const response= yield call(
            apiDetailPostById,
            action.payload,
        );
        if (response.success) {
            yield put(getDetailPostByIdSuccess(response.data));
        } 
        else{
            yield put(getDetailPostByIdError(response));

        }
    } catch (error) {
        yield put(getDetailPostByIdError(error));
    }
}

function* handleGetDetailPostBySlug(action) {
    try {
        const response= yield call(
            apiDetailPostBySlug,
            action.payload,
        );
        if (response.success) {
            yield put(getDetailPostBySlugSuccess(response.data));
            const tagStore = yield select(getTagSlice);
            const postStore = yield select(getPostSlice);
            const {tags, categories, post_id} = response.data.data
            const {listCoinChart} = postStore;
            const tags_id = tags.map((item)=>item.tag_id)
            const categories_id = categories.map((item)=>item.category_id)
            const data ={
                post_id:post_id,
                tags: tags_id,
                categories:categories_id
            } 
            const {listTag} = tagStore;
            !listTag.length && (yield put(getListTag()))
            !listCoinChart.length && (yield put(getListCoinChart()))
            yield put(listCommentByPost(post_id));
            yield put(getListPostRelation(data));
            
        } 
        else{
            yield put(getDetailPostBySlugError(response));

        }
    } catch (error) {
        yield put(getDetailPostBySlugError(error));
    }
}

function* handleCreatePost(action) {
    try {
        const response= yield call(
            apiCreatePost,
            action.payload,
        );
        if (response.success) {
            yield put(createPostSuccess(response.data));
            const postStore = yield select(getPostSlice);
            const {listPostPaging} = postStore;
            const {limit, page} = listPostPaging
            yield put(getListPost({limit, page, detail:1}));
            message.success("Create post success!")
        } 
        else{
            yield put(createPostError(response));
            message.error("Create post error!")
        }
    } catch (error) {
        yield put(createPostError(error));
        message.error("Create post error!")
    }
}

function* handleUpdatePost(action) {
    try {
        const response= yield call(
            apiUpdatePost,
            action.payload,
        );
        if (response.success) {
            yield put(updatePostSuccess(response.data));
            const postStore = yield select(getPostSlice);
            const {listPostPaging} = postStore;
            const {limit, page} = listPostPaging
            yield put(getListPost({limit, page, detail:1}));
            message.success("Update post success!")
        } 
        else{
            yield put(updatePostError(response));
            message.error("Update post error!")
        }
    } catch (error) {
        yield put(updatePostError(error));
        message.error("Update post error!")
    }
}

function* handleDeletePost(action) {
    try {
        const response= yield call(
            apiDeletePost,
            action.payload,
        );
        if (response.success) {
            yield put(deletePostSuccess(response.data));
            const postStore = yield select(getPostSlice);
            const {listPostPaging} = postStore;
            const {limit, page} = listPostPaging
            yield put(getListPost({limit, page, detail:1}));
            message.success("Delete post success!")
        } 
        else{
            yield put(deletePostError(response));
            message.error("Delete post error!")
        }
    } catch (error) {
        yield put(deletePostError(error));
        message.error("Delete post error!")

    }
}

function* handleGetListCoinChart(action) {
    try {
        const response= yield call(
            apiListCoinChart,
            action.payload,
        );
        if (response.status ==200) {
            yield put(getListCoinChartSuccess(response.data));
        } 
        else{
            yield put(getListCoinChartError(response));

        }
    } catch (error) {
        yield put(getListCoinChartError(error));
    }
}

export default function* PostSaga() {
    yield takeLatest(getListPost.type, handleGetListPost);
    yield takeLatest(readMoreListPost.type, handleReadMoreListPost);
    yield takeLatest(getListPostUserSeach.type, handleGetListPostUserSearch);
    yield takeLatest(readMorePostUserSeach.type, handleReadMorePostUserSearch);
    yield takeLatest(getListPostRelation.type, handleGetListPostRelation);

    yield takeLatest(getDetailPostById.type, handleGetDetailPostById);
    yield takeLatest(getDetailPostBySlug.type, handleGetDetailPostBySlug);
    yield takeLatest(getListCoinChart.type, handleGetListCoinChart);

    yield takeLatest(createPost.type, handleCreatePost);
    yield takeLatest(updatePost.type, handleUpdatePost);
    yield takeLatest(deletePost.type, handleDeletePost);
}
