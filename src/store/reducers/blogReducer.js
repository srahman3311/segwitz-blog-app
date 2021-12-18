import { v4 as uuidv4 } from "uuid";

const blogReducer = (state = [], action) => {

    const imageUrl = "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80";

    const blogs = JSON.parse(localStorage.getItem("blogs"));

    switch(action.type) {

        case "ADD_BLOG":

            const blog = { ...action.payload, id: uuidv4(), imageUrl }

            if(blogs) {

                localStorage.setItem("blogs", JSON.stringify([...blogs, blog]));

                return [...JSON.parse(localStorage.getItem("blogs"))];
            }

            localStorage.setItem("blogs", JSON.stringify([blog]));

            return JSON.parse(localStorage.getItem("blogs"));
        
        case "DELETE_BLOG":

            const filteredBlogs = blogs.filter(blog => action.payload !== blog.id);

            localStorage.setItem("blogs", JSON.stringify(filteredBlogs));
            
            return JSON.parse(localStorage.getItem("blogs"));

        default:

            return state; 
    }

}


export default blogReducer;