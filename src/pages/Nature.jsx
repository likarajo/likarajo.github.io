import { Breadcrumbs, Link, Typography } from "@mui/material"
import Articles from "../components/nature/Articles"

function Nature() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Link key="2" color="inherit" style={{textDecoration: "none"}} href="/#/travel"><b>Travel</b></Link>,
        <Typography key="3">Nature</Typography>
    ]
    return (
        <div id="nature">
            <Breadcrumbs separator="›" style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
            <Articles />
        </div>
    )
}
  
export default Nature
