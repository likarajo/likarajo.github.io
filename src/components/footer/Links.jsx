import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Divider, IconButton, Stack } from "@mui/material"
import { Instagram, Facebook, Twitter, YouTube, Pinterest, LinkedIn } from "@mui/icons-material";

function Links() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    return (
        <div style={{display: isDesktop?'flex':'block', justifyContent: 'center', alignItems: 'center', margin: '0 auto', width: '280px', height: isDesktop?'50px':'80px'}}>
            <Stack direction="row" style={{margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
                <IconButton href={"https://instagram.com/likarajo/"} target="_blank" style={{color: "black"}}><Instagram fontSize={isDesktop?"large":"medium"}/></IconButton>
                {/* <IconButton href={"https://facebook.com/likarajo/"} target="_blank" style={{color: "black"}}><Facebook fontSize={isDesktop?"large":"medium"}/></IconButton> */}
                <IconButton href={"https://twitter.com/likarajo/"} target="_blank" style={{color: "black"}}><Twitter fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://pinterest.com/likarajo/"} target="_blank" style={{color: "black"}}><Pinterest fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://likarajoblogs.wordpress.com/"} target="_blank"><img src="images/site/wordpress.png" width={isDesktop?"40px":"28px"}/></IconButton>
                <IconButton href={"https://www.credly.com/users/likarajo/"} target="_blank"><img src="images/site/credly.png" width={isDesktop?"30px":"20px"}/></IconButton>
                <IconButton href={"https://linkedin.com/in/likarajo/"} target="_blank" style={{color: "black"}}><LinkedIn fontSize={isDesktop?"large":"medium"}/></IconButton>
            </Stack>
            <Stack direction="row" style={{margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
                <IconButton href={"https://open.spotify.com/user/31upmukqrx4zlcsmsjjv5tnh4ofq"} target="_blank"><img src="images/site/spotify.png" width={isDesktop?"28px":"20px"}/></IconButton>
                <IconButton href={"https://youtube.com/@likarajo"} target="_blank" style={{color: "black"}}><YouTube fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://soundcloud.com/likarajo"} target="_blank"><img src="images/site/soundcloud.png" width={isDesktop?"28px":"20px"}/></IconButton>
            </Stack>
        </div>
    )
}

export default Links