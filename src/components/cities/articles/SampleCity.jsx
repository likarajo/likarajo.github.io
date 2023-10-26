import { Breadcrumbs, Link, Typography } from "@mui/material"

function SampleCity() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Link key="2" color="inherit" style={{textDecoration: "none"}} href="/#/travel"><b>Travel</b></Link>,
        <Link key="3" color="inherit" style={{textDecoration: "none"}} href="/#/travel/cities"><b>Cities</b></Link>,
        <Typography key="4">Sample</Typography>
    ]
    return (
        <div id="nature">
            <Breadcrumbs separator="›" style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
        </div>
    )
}
  
export default SampleCity
