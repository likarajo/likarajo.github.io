import Cards from "../components/leisure/Cards"
import Media from "../components/leisure/Media"
import Scrollup from "../components/common/Scrollup"
import { Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"

function Leisure() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Typography key="2">Leisure</Typography>
    ]
    return (
        <div id="leisure">
            <Breadcrumbs separator={<NavigateNext fontSize="small"/>} style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
            <Cards />
            <Media />
            <Scrollup />
        </div>
    )
}
  
export default Leisure
