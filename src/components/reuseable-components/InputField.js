// Components
import ValidationErrorMessage from "./ValidationErrorMessage";

function InputField({ type, name, value, placeholder, handleChange, validationError, validationErrorMessageFor }) {

    return (
        <div className="input_field">
            <input 
                type = {type} 
                name = {name}
                value = {value}
                placeholder = {placeholder}
                onChange = {handleChange}
            />

            <ValidationErrorMessage
                validationError = {validationError} 
                inputFieldLabel = {validationErrorMessageFor}
            />
        </div>
    );

}



export default InputField;