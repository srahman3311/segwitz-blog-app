import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

// Components
import InputField from "../reuseable-components/InputField";
import TextAreaInputField from "../reuseable-components/TextAreaInputField";



function CreateBlogForm() {

    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);

    const [validationError, setValidationError] = useState(false);
    const [blogInfo, setBlogInfo] = useState({ title: "", content: ""});



    function handleChange(event) {

        const { name, value } = event.target;

        setBlogInfo(currentValue => { return { ...currentValue, [name]: value }});
    }



    function addBlog(event) {

        event.preventDefault();

        const id = blogs.length + 1;

        dispatch({ type: "ADD_BLOG", payload: { id, title: blogInfo.title, content: blogInfo.content } })
    }

    return (
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

            <button
                onClick = {addBlog} 
            >
                Create
            </button>

        </form>
    );


}


export default CreateBlogForm;