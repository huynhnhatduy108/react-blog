import {all} from "redux-saga/effects";
import AuthSaga from "../features/Auth/store/saga";
import CategorySaga from "../features/Category/store/saga";
import CommentSaga from "../features/Comment/store/saga";
import PostSaga from "../features/Post/store/saga";
import TagSaga from "../features/Tag/store/saga";
import UserSaga from "../features/User/store/saga";

export default function* rootSaga() {
    yield all([
        CategorySaga(),
        TagSaga(),
        PostSaga(),
        UserSaga(),
        CommentSaga(),
        AuthSaga(),
    ]);
}