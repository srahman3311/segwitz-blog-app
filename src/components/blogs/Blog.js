import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Stylesheet
import styles from "./Blogs.module.css";

// Actions
import { deleteBlog } from "../../store/action-creators/blogs";



function Blog({ blog }) {

    const dispatch = useDispatch();
    const removeBlog = blogId => dispatch(deleteBlog(blogId));

    return (
        <div className={styles.blog} key = {blog.id}>
            <p>{blog.title}</p>
            <p>{blog.content}</p>
            <Link to={`/blogs/${blog.id}`} >View Details</Link>
            <button onClick={() => removeBlog(blog.id)}>Delete</button>
        </div>
    );

}


export default Blog;