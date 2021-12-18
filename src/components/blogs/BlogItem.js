import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Stylesheet
import styles from "./Blogs.module.css";

// Components
//import CreateBlogForm from "./CreateBlogForm"
import BlogImage from "./BlogImage";
import BlogTitle from "./BlogTitle";


function BlogItem() {

    const [blog, setBlog] = useState(null);

    const navigate = useNavigate();
    let params = useParams();


    useEffect(() => {

        if(!localStorage.getItem("user")) return navigate("/")

        const blogs = JSON.parse(localStorage.getItem("blogs"));

        for(let x = 0; x < blogs.length; x++) {
            
            if(blogs[x].id === params.blogId) {

                setBlog(blogs[x]);
                
                break;

            }
        }

    }, [])

    

    return (
        <main className={styles.blog_item}>

            {
                blog && 
                <div className={styles.blog_item_content}>
                    <BlogImage imageUrl = {blog.imageUrl} />
                    <BlogTitle title = {blog.title} />
                    <p className={styles.blog_content}>{blog.content}</p>
                </div>
            }

        </main>
    );


}


export default BlogItem;