import { Paper, TextField, Typography } from "@mui/material"
import AppButton from "../common/AppButton"
import { useFormControls } from "./FormValidation"
import ContactPage from "@mui/icons-material/ContactPage";
import Send from "@mui/icons-material/Send";

function Form() {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

    return(
        <div className="contact-form">
            <Paper style={{padding: "20px"}}>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <Typography variant="h6" style={{display: "flex", margin: "10px 0", alignItems: "center"}}><ContactPage/>&nbsp;Contact Form</Typography>
                    <TextField name="firstName" style={{margin: "10px 0"}}
                        onBlur={(e) => handleInputValue(e)} onChange={(e) => handleInputValue(e)}
                        label="First Name" fullWidth autoComplete="none"
                        {...(errors["firstName"] && {error: true, helperText: errors["firstName"]})}
                    />
                    <TextField name="lastName" style={{margin: "10px 0"}}
                        onBlur={(e) => handleInputValue(e)} onChange={(e) => handleInputValue(e)}
                        label="Last Name (optional)" fullWidth autoComplete="none" 
                        {...(errors["lastName"] && {error: true, helperText: errors["lastName"]})}
                    />
                    <TextField name="email" style={{margin: "10px 0"}}
                        onBlur={(e) => handleInputValue(e)} onChange={(e) => handleInputValue(e)}
                        label="Email" fullWidth autoComplete="none"
                        {...(errors["email"] && {error: true, helperText: errors["email"]})}
                    />
                    <TextField name="message" style={{margin: "10px 0"}}
                        onBlur={(e) => handleInputValue(e)} onChange={(e) => handleInputValue(e)}
                        label="Message" fullWidth multiline rows={7} autoComplete="none"
                        {...(errors["message"] && {error: true, helperText: errors["message"]})}
                    />
                    <AppButton style={{margin: "10px 0"}}
                        type="submit" variant="contained"
                        disabled={!formIsValid()}
                    >
                        <Send/>&nbsp;Send
                    </AppButton>
                </form>
            </Paper>
            
        </div>
    )
}

export default Form
