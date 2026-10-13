import { useMediaQuery } from "react-responsive";
import { IconButton, Stack } from "@mui/material"
import { GitHub, LinkedIn } from "@mui/icons-material";

function Links() {

    const isDesktop = useMediaQuery({query: '(min-width: 1025px)'});

    return (
        <div style={{display: isDesktop?'flex':'block', justifyContent: 'center', alignItems: 'center', margin: '0 auto', width: '280px', height: isDesktop?'50px':'80px'}}>
            <Stack direction="row" style={{margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
                <IconButton href={"https://github.com/likarajo"} target="_blank" aria-label="GitHub" style={{color: "black"}}><GitHub fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://linkedin.com/in/likarajo/"} target="_blank" aria-label="LinkedIn" style={{color: "black"}}><LinkedIn fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://www.credly.com/users/likarajo/"} target="_blank" aria-label="Credly"><img src="images/site/credly.png" width={isDesktop?"30px":"20px"} alt="Credly"/></IconButton>
            </Stack>
        </div>
    )
}

export default Links