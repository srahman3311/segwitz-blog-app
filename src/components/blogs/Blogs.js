import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import CreateBlogForm from "./CreateBlogForm"


function Blogs() {

    const blogs = useSelector(state => state.blogs);

    return (
        <main className="blogs">
            <h1>Blogs</h1>

            {blogs.map(blog => {
                return <p>{blog.title}</p>
            })}

            <CreateBlogForm />

        </main>
    );


}


export default Blogs;