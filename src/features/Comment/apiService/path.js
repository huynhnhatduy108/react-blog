const CommentPaths ={ 
    ListCommentByPost: "comment/list_comment_by_post/:params",

    UserCommentToPost: "/comment/user_comment_to_post/:id",
    AdminCommentReply: "/comment/admin_comment_reply/:id",

    DeleteComment: "/comment/delete_comment/:id",
    DeleteCommentByPostId: "/comment/delete_comment_by_post_id/:id",
};

export default CommentPaths;