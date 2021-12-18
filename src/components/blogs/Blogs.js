import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Stylesheet
import styles from "./Blogs.module.css";

// Components 
import Blog from "./Blog";



function Blogs() {

    const navigate = useNavigate();
  
    const blogs = useSelector(state => !state.blogs.length ? JSON.parse(localStorage.getItem("blogs")) : state.blogs);

    useEffect(() => {

        if(!localStorage.getItem("user")) navigate("/")

    }, [])

   
    return (
        <main className="blogs">
            <h1>Blogs</h1>
            <Link to ="/blogs/add-new-blog">Add New</Link>
            <div className={styles.blog_list}>
                {blogs && blogs.map(blog => <Blog key = {blog.id} blog = {blog} />)}
            </div>
        </main>
    );

}


export default Blogs;