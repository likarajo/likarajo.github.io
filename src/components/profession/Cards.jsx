import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Card, CardMedia, Stack, Typography } from "@mui/material";
import AppButton from "../common/AppButton";
import { Description, LinkedIn } from "@mui/icons-material";

function Cards() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    return (
        <div style={{paddingTop: isDesktop?'50px':'20px'}}>
        {isDesktop ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', width:'60%', gap: '10%', minWidth:'600px'}}>
                <div style={{width: '45%'}}>
                    <Card style={{width: '100%', aspectRatio: '4/3', borderRadius: 10}}>
                        <CardMedia component="img" image="images/profession/linkedin.jpg" alt="linkedin" /> 
                    </Card>
                    <Stack direction="row" spacing={1} style={{marginTop: "10px"}}>
                        <AppButton variant="contained" href="https://www.linkedin.com/in/likarajo/" target="_blank"><LinkedIn/>LinkedIn</AppButton>
                        <AppButton variant="contained" href="docs/resume.pdf" target="_blank"><Description/>Resume</AppButton>
                    </Stack>
                </div>
            </div>
        :
            <div style={{ justifyContent: 'center', margin: '20px auto', width:'45%', minWidth:'280px'}}>
                <div style={{width: '100%', margin: '20px 0'}}>
                    <Card style={{width: '100%', aspectRatio: '4/3', borderRadius: 10}}>
                        <CardMedia component="img" image="images/profession/linkedin.jpg" alt="linkedin" />
                    </Card>
                    <Stack direction="row" spacing={1} style={{marginTop: "10px"}}>
                        <AppButton variant="contained" href="https://www.linkedin.com/in/likarajo/" target="_blank"><LinkedIn/>LinkedIn</AppButton>
                        <AppButton variant="contained" href="docs/resume.pdf" target="_blank"><Description/>Resume</AppButton>
                    </Stack>
                </div>
            </div>
        }
        </div>    
    )
}

export default Cards
