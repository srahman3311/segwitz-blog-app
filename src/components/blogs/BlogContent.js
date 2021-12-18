import { Link } from "react-router-dom";

// Stylesheet
import styles from "./Blogs.module.css";



function BlogContent({ blogId, content }) {

    return (
        <p className = {styles.blog_content}>
            {content.substring(0, 200)} ...<Link to={`/blogs/${blogId}`}>view more</Link>
        </p>
    );

}

export default BlogContent;