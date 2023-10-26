import { Paper, TextField, Typography } from "@mui/material"
import AppButton from "../common/AppButton"
import { useFormControls } from "./FormValidation"
import { ContactPage, Send } from "@mui/icons-material";

function Form() {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

    return(
        <div style={{justifyContent: "center", width: "50%", minWidth: "280px", maxWidth: "600px", margin: "0 auto", padding: "20px"}}>
            <Paper style={{padding: "20px"}}>
                <form onSubmit={handleFormSubmit}>
                    <Typography variant="h6" style={{display: "flex", margin: "10px 0", alignItems: "center"}}><ContactPage/>&nbsp;Contact Form</Typography>
                    <TextField name="firstName" style={{margin: "10px 0"}}
                        onBlur={(e) => handleInputValue(e)} onChange={(e) => handleInputValue(e)}
                        label="First Name" fullWidth autoComplete="none"
                        {...(errors["firstName"] && {error: true, helperText: errors["firstName"]})}
                    />
                    <TextField name="lastName" style={{margin: "10px 0"}}
                        onBlur={(e) => handleInputValue(e)} onChange={(e) => handleInputValue(e)}
                        label="Last Name (optional" fullWidth autoComplete="none" 
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
