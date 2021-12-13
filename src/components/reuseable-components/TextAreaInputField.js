// Components
import ValidationErrorMessage from "./ValidationErrorMessage";



function TextAreaInputField({ name, value, handleChange, validationError, validationErrorMessageFor }) {

    return (
        <div className="textarea_input_field">
            <textarea
                rows = "10"
                cols = "50"  
                name = {name}
                value = {value}
                onChange = {handleChange}
            />

            <ValidationErrorMessage 
                validationError = {validationError} 
                inputFieldLabel = {validationErrorMessageFor} 
            />
        </div>
    );

}



export default TextAreaInputField;