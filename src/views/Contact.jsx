import { Breadcrumbs, Link, Typography } from "@mui/material"
import Form from "../components/contact/Form"
import { useEffect } from "react";
import "../profile.css";

function Contact() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Typography key="2">Contact</Typography>
    ]
    return (
        <div id="contact">
            <div className="profile contact-note">
                <Breadcrumbs className="crumbs" separator="›">
                    {breadcrumbs}
                </Breadcrumbs>
                <p>
                    Email{" "}
                    <a className="text-link" href="mailto:likarajo@gmail.com">likarajo@gmail.com</a>.
                </p>
                <p>
                    The form below does not send a message. First name, email, and message are required. Last name is optional.
                </p>
            </div>
            <Form />
        </div>
    )
}
  
export default Contact
