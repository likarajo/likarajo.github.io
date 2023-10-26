import Cards from "../components/travel/Cards"
import Scrollup from "../components/common/Scrollup"
import { Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"

function Travel() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Typography key="2">Travel</Typography>
    ]
    return (
        <div id="travel">
            <Breadcrumbs separator={<NavigateNext fontSize="small"/>} style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
            <Cards />
            <Scrollup />
        </div>
    )
}
  
export default Travel
