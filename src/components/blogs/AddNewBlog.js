import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../store/action-creators/blogs";
import { useDispatch } from "react-redux";

// Stylesheet
import styles from "./Blogs.module.css";

// Components
import Label from "../reuseable-components/Label";
import InputField from "../reuseable-components/InputField";
import TextAreaInputField from "../reuseable-components/TextAreaInputField";
import Button from "../reuseable-components/Button";



function AddNewBlog() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [validationError, setValidationError] = useState(false);
    const [blogInfo, setBlogInfo] = useState({ title: "", content: ""});

    useEffect(() => {

        if(!localStorage.getItem("user")) navigate("/")

    }, [])

    function handleChange(event) {

        const { name, value } = event.target;

        setBlogInfo(currentValue => { return { ...currentValue, [name]: value }});

    }

    function addBlog(event) {

        event.preventDefault();

        const { title, content } = blogInfo;

        if(!title || !content) return setValidationError(true);

        dispatch(createBlog(blogInfo));

        navigate("/blogs");

    }

    return (
        <div className={styles.add_new_blog}>

            <form className={styles.new_blog_form}>
                <Label text = "Title" />
                <InputField
                    type = "text"
                    name = "title"
                    value = {blogInfo.title}
                    placeholder = "" 
                    handleChange = {handleChange}
                    validationError = {validationError}
                    validationErrorMessageFor = "blog title"
                />
                <Label text = "Content" />
                <TextAreaInputField
                    name = "content"
                    value = {blogInfo.content}
                    handleChange = {handleChange}
                    validationError = {validationError}
                    validationErrorMessageFor = "blog content"
                />

                <Button title = "Save" clickHandler={addBlog} />
            </form>
            
        </div>
    );


}



export default AddNewBlog;