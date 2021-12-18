import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { deleteBlog } from "../../store/action-creators/blogs";

// Stylesheet
import styles from "./Blogs.module.css";

// Components 
import Header from "../reuseable-components/Header";
import BlogImage from "./BlogImage";
import BlogTitle from "./BlogTitle";
import BlogContent from "./BlogContent";
import DeleteButton from "../reuseable-components/DeleteButton";




function Blogs() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const blogs = useSelector(state => !state.blogs.length ? JSON.parse(localStorage.getItem("blogs")) : state.blogs);

    const removeBlog = blogId => dispatch(deleteBlog(blogId));

    useEffect(() => {

        if(!localStorage.getItem("user")) navigate("/")

    }, [])

   
    return (
        <main className={styles.blogs}>
            <Header text = "Blogs" />
            {
                blogs 
                &&
                blogs.map(blog => {
                    return (
                        <div className={styles.blog} key = {blog.id}>
                            <BlogImage imageUrl = {blog.imageUrl} />
                            <BlogTitle title = {blog.title} />
                            <BlogContent blogId={blog.id} content = {blog.content} />
                            <DeleteButton itemId = {blog.id} deleteHandler={removeBlog} />
                        </div>
                    );
                })
            }
        </main>
    );

}


export default Blogs;