import { Breadcrumbs, Link, Typography } from "@mui/material"

function SampleCulinary() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Link key="2" color="inherit" style={{textDecoration: "none"}} href="/#/leisure"><b>Leisure</b></Link>,
        <Link key="3" color="inherit" style={{textDecoration: "none"}} href="/#/leisure/culinary"><b>Culinary</b></Link>,
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
  
export default SampleCulinary
