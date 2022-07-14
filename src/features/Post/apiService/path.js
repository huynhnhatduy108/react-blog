const PostPaths ={

    List:'/post/list?:queryParams',
    DetailById: "/post/info_by_id/:id",
    DetailBySlug:"/post/info_by_slug/:slug",
    Create: "/post/create",
    Update: "/post/update/:id",
    Detele:"/post/delete/:id",

    SearchList:"/post/list_search/:params",
    SearchByKeyWord:'/post/search_post_by_keyword/:params',
    SearchByAuthor:'/post/list_by_author/:author_id',
    SearchByTag:'/post/list_by_tag/:tag_id',
    SearchByCategory:'/post/list_by_category/:category_id',

};

export default PostPaths;