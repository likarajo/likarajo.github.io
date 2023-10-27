import { Breadcrumbs, Link, Typography } from "@mui/material"
import Form from "../components/contact/Form"
import { useEffect } from "react";

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
            <Breadcrumbs separator="›" style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
            <Form />
        </div>
    )
}
  
export default Contact
