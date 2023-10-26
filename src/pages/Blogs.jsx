import { LinkedIn } from "@mui/icons-material"
import { Breadcrumbs, IconButton, Link, Stack, Typography } from "@mui/material"
import Articles from "../components/blogs/Articles"

function Blogs() {
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>,
        <Link key="2" color="inherit" style={{textDecoration: "none"}} href="/#/leisure"><b>Leisure</b></Link>,
        <Typography key="3">Blogs</Typography>
    ]
    return (
        <div id="blogs">
            <Breadcrumbs separator="›" style={{maxWidth: "280px", padding: "10px"}}>
                {breadcrumbs}
                <Stack direction="row" alignItems="center">
                    <Typography>Articles</Typography> 
                    <IconButton href={"https://likarajoblogs.wordpress.com/"} target="_blank"><img src="images/site/wordpress.png" width="30px"/></IconButton>
                    <IconButton href={"https://linkedin.com/in/likarajo/recent-activity/articles/"} target="_blank" style={{color: "black"}}><LinkedIn/></IconButton>
                </Stack>
            </Breadcrumbs>
            <Articles />
        </div>
    )
}
  
export default Blogs
