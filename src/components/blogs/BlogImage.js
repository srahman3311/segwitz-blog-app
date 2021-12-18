// Stylesheet
import styles from "./Blogs.module.css";

function BlogImage({ imageUrl }) {

    return (
        <div className={styles.blog_image_container}>
            <img className={styles.blog_image} src={imageUrl} alt="" />
        </div>
    );

}


export default BlogImage