import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createBlog } from "../../store/action-creators/blogs";
import { useDispatch } from "react-redux";

// Components
import InputField from "../reuseable-components/InputField";
import TextAreaInputField from "../reuseable-components/TextAreaInputField";



function AddNewBlog() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [validationError, setValidationError] = useState(false);
    const [blogInfo, setBlogInfo] = useState({ title: "", content: ""});

    function handleChange(event) {

        const { name, value } = event.target;

        setBlogInfo(currentValue => { return { ...currentValue, [name]: value }});

    }

    function addBlog(event) {

        event.preventDefault();

        const { title, content } = blogInfo;

        if(!title || !content) return alert("Please fill up all fields");

        dispatch(createBlog(blogInfo));

        navigate("/blogs");

    }

    return (
        <div className="add_new_blog">
            <Link to="/blogs">Blog List</Link>

            <form className="create_blog_form">
                <InputField
                    type = "text"
                    name = "title"
                    value = {blogInfo.title}
                    placeholder = "blog title" 
                    handleChange = {handleChange}
                    validationError = {validationError}
                    validationErrorMessageFor = "blog title"
                />
                <TextAreaInputField
                    name = "content"
                    value = {blogInfo.content}
                    handleChange = {handleChange}
                    validationError = {validationError}
                    validationErrorMessageFor = "blog content"
                />

                <button onClick = {addBlog}>Add</button>
            </form>

            
            
        </div>
    );


}



export default AddNewBlog;