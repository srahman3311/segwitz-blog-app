import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

// Components
//import CreateBlogForm from "./CreateBlogForm"


function BlogItem() {

    const [blog, setBlog] = useState(null);

    let params = useParams();
    //const [blogs, setBlogs] = useState([]);
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);
    //const modal = useSelector(state => state.modal);


    useEffect(() => {

        const blogs = JSON.parse(localStorage.getItem("blogs"));

        for(let x = 0; x < blogs.length; x++) {
            
            if(blogs[x].id === params.blogId) {

                setBlog(blogs[x]);
                
                break;

            }
        }

    }, [])

    

    return (
        <main className="blog_item">

            {
                blog && 
                <div>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            }

            <Link to ="/blogs">Blog List</Link>

        </main>
    );


}


export default BlogItem;