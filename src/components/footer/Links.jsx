import { IconButton, Stack } from "@mui/material"
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Links() {
    return (
        <Stack className="footer-links" direction="row" role="navigation" aria-label="Profiles">
            <IconButton href={"mailto:likarajo@gmail.com"} aria-label="Email" style={{color: "inherit"}}><Email /></IconButton>
            <IconButton href={"https://github.com/likarajo"} target="_blank" rel="noreferrer" aria-label="GitHub" style={{color: "inherit"}}><GitHub /></IconButton>
            <IconButton href={"https://linkedin.com/in/likarajo/"} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{color: "inherit"}}><LinkedIn /></IconButton>
            <IconButton href={"https://www.credly.com/users/likarajo/"} target="_blank" rel="noreferrer" aria-label="Credly"><img src="images/site/credly.png" width="28" height="28" alt="" /></IconButton>
        </Stack>
    )
}

export default Links
