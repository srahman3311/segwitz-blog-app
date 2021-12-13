export const createBlog = blog => {

    return (dispatch) => dispatch({ type: "ADD_BLOG", payload: blog})
} 


export const deleteBlog = blogId => {

    return (dispatch) => dispatch({ type: "DELETE_BLOG", payload: blogId });
}

