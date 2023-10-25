import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IconButton, Stack } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Social() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', margin: '10px auto', width:'280px', height: isDesktop?'50px':'30px'}}>
            <Stack direction="row" style={{margin: '0 auto', justifyContent: 'center'}}>
                <IconButton href={"https://linkedin.com/in/likarajo/"} target="_blank"><LinkedInIcon fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://instagram.com/likarajo/"} target="_blank"><InstagramIcon fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://facebook.com/likarajo/"} target="_blank"><FacebookIcon fontSize={isDesktop?"large":"medium"}/></IconButton>
                <IconButton href={"https://twitter.com/likarajo/"} target="_blank"><TwitterIcon fontSize={isDesktop?"large":"medium"}/></IconButton>
            </Stack>
        </div>
    )
}

export default Social