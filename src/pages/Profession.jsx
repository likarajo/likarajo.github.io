import { NavigateNext } from "@mui/icons-material"
import { Breadcrumbs, Link, Typography } from "@mui/material"

function Profession() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Typography key="2">Profession</Typography>
    ]
    return (
        <div id="profession">
            <Breadcrumbs separator={<NavigateNext fontSize="small"/>} style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
        </div>
    )
}
  
export default Profession
