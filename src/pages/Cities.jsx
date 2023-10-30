import { Breadcrumbs, Link, Typography } from "@mui/material"
import Articles from "../components/cities/Articles"
import { useEffect } from "react";
import Scrollup from "../components/common/Scrollup";

function Cities() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Link key="2" color="inherit" style={{textDecoration: "none"}} href="/#/travel"><b>Travel</b></Link>,
        <Typography key="3">Cities</Typography>
    ]
    return (
        <div id="cities">
            <Breadcrumbs separator="›" style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
            <Articles />
            <Scrollup />
        </div>
    )
}
  
export default Cities
