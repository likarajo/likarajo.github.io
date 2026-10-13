import { LinkedIn } from "@mui/icons-material"
import { Breadcrumbs, IconButton, Link, Stack, Typography } from "@mui/material"
import Articles from "../components/blogs/Articles"
import { useEffect } from "react";
import Scrollup from "../components/common/Scrollup"

function Blogs() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Typography key="2">Writing</Typography>
    ]
    return (
        <div id="blogs">
            <div className="crumbs crumbs-row">
                <Breadcrumbs separator="›">
                    {breadcrumbs}
                    <Typography>Articles</Typography>
                </Breadcrumbs>
                <Stack direction="row" alignItems="center">
                    <IconButton href={"https://likarajoblogs.wordpress.com/"} target="_blank" rel="noreferrer" aria-label="WordPress"><img src="images/site/wordpress.png" width="28" height="28" alt="" /></IconButton>
                    <IconButton href={"https://linkedin.com/in/likarajo/recent-activity/articles/"} target="_blank" rel="noreferrer" aria-label="LinkedIn articles" style={{color: "black"}}><LinkedIn/></IconButton>
                </Stack>
            </div>
            <Articles />
            <Scrollup />
        </div>
    )
}
  
export default Blogs
