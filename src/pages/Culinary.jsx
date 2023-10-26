import { NavigateNext } from "@mui/icons-material"
import { Breadcrumbs, Link, Typography } from "@mui/material"

function Culinary() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Link key="2" color="inherit" style={{textDecoration: "none"}} href="/#/leisure"><b>Leisure</b></Link>,
        <Typography key="3">Culinary</Typography>
    ]
    return (
        <div id="culinary">
            <Breadcrumbs separator={<NavigateNext fontSize="small"/>} style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
        </div>
    )
}
  
export default Culinary
