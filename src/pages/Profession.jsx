import { Breadcrumbs, Link, Typography } from "@mui/material"
import Cards from "../components/profession/Cards";
import Scrollup from "../components/common/Scrollup";
import { useEffect } from "react";

function Profession() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Typography key="2">Profession</Typography>
    ]
    return (
        <div id="profession">
            <Breadcrumbs separator="›" style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
            </Breadcrumbs>
            <Cards />
            <Scrollup />
        </div>
    )
}

export default Profession
