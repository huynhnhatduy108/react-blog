import CategoryReducer from "../features/Category/store/slice";
import CommentReducer from "../features/Comment/store/slice";
import PostReducer from "../features/Post/store/slice";
import TagReducer from "../features/Tag/store/slice";
import UserReducer from "../features/User/store/slice";

const reducer = {
    category: CategoryReducer,
    tag: TagReducer,
    user:UserReducer,
    post:PostReducer,
    comment: CommentReducer,
};

export default reducer;
