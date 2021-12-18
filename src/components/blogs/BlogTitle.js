// Stylesheet
import styles from "./Blogs.module.css";

function BlogTitle({ title }) {

    return (
        <h2 className={styles.blog_title}>{title}</h2>
    );

}

export default BlogTitle;