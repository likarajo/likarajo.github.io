import { useState } from "react";

const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    message:"",
    formSubmitted: false,
    success: false
}
  
export const useFormControls = () => {
    
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});
    
    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value })
    }

    const validate = (fieldValues) => {
        let temp = { ...errors }
        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email) ? "" : "Email is not valid."
        }
        if ("message" in fieldValues)
        temp.message =
            fieldValues.message ? "" : "This field is required."
        setErrors({
            ...temp
        });
    }
    
    const formIsValid = () => {
        const isValid =
            values.firstName &&
            values.email &&
            values.message &&
            Object.values(errors).every((x) => x === "");
        return isValid;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formIsValid()) {
            await postContactForm(values);
            alert("You've sent the message!")
        }
    };

    const postContactForm = (values) => {
        // send email
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setValues({
                  ...values,
                    formSubmitted: true,
                    success: true
                });
                resolve();
            }, 3000);
        });
    }
   
    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    };

}
