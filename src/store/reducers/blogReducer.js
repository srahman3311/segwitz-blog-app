import { v4 as uuidv4 } from 'uuid';

const blogReducer = (state = [], action) => {

    const blogs = JSON.parse(localStorage.getItem("blogs"));

    switch(action.type) {

        case "ADD_BLOG":

            if(blogs) {

                localStorage.setItem("blogs", JSON.stringify([...blogs, {id: uuidv4(), ...action.payload}]));

                return [...JSON.parse(localStorage.getItem("blogs"))];
            }

            localStorage.setItem("blogs", JSON.stringify([{id: uuidv4(), ...action.payload}]));

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