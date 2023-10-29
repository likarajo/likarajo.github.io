import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Card, CardMedia, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import AppButton from "../common/AppButton";
import { Description, InfoRounded, LinkedIn, Star } from "@mui/icons-material";

function Cards() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    const [openInfo, setOpenInfo] = useState(false);

    return (
        <div style={{paddingTop: isDesktop?'50px':'20px'}}>
        {isDesktop ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', width:'60%', gap: '10%', minWidth:'600px'}}>
                <div style={{width: '45%'}}>
                    <Card style={{width: '100%', aspectRatio: '4/3', borderRadius: 10, position: 'relative'}}>
                        <CardMedia component="img" image="images/profession/linkedin.jpg" alt="linkedin" />
                        <IconButton size="large" style={{position: 'absolute', right: '2px', bottom: '3%'}} onClick={() => setOpenInfo(true)}><InfoRounded/></IconButton>
                    </Card>
                    <Stack direction="row" spacing={1} style={{marginTop: "10px"}}>
                        <AppButton variant="contained" href="https://www.linkedin.com/in/likarajo/" target="_blank"><LinkedIn/>LinkedIn</AppButton>
                        <AppButton variant="contained" href="docs/resume.pdf" target="_blank"><Description/>Resume</AppButton>
                        <AppButton variant="contained" href="https://www.credly.com/users/likarajo/" target="_blank"><Star/>Badges</AppButton>
                    </Stack>
                </div>
            </div>
        :
            <div style={{ justifyContent: 'center', margin: '20px auto', width:'45%', minWidth:'280px'}}>
                <div style={{width: '100%', margin: '20px 0'}}>
                    <Card style={{width: '100%', aspectRatio: '4/3', borderRadius: 10, position: 'relative'}}>
                        <CardMedia component="img" image="images/profession/linkedin.jpg" alt="linkedin" />
                        <IconButton size="large" style={{position: 'absolute', right: '2px', bottom: '3%'}} onClick={() => setOpenInfo(true)}><InfoRounded/></IconButton>
                    </Card>
                    <Stack direction="row" spacing={1} style={{marginTop: "10px"}}>
                        <AppButton variant="contained" href="https://www.linkedin.com/in/likarajo/" target="_blank"><LinkedIn/>LinkedIn</AppButton>
                        <AppButton variant="contained" href="docs/resume.pdf" target="_blank"><Description/>Resume</AppButton>
                        <AppButton variant="contained" href="https://www.credly.com/users/likarajo/" target="_blank"><Star/>Badges</AppButton>
                    </Stack>
                </div>
            </div>
        }
        <Dialog open={openInfo} onClose={() => setOpenInfo(false)}>
            <DialogTitle><Typography variant="h6">About</Typography></DialogTitle>
            <DialogContent>
                <Typography>
                    I am passionate about giving back to the community through the design and development of Intelligent Systems 
                    that can solve real-life problems. With expertise in full-stack application development, 
                    I am currently working with multiple business units within the organization on the design and architecture of software systems and data pipelines.
                    Being a self-motivated team player, with leadership, organizational, communication, and presentation skills, 
                    I keep myself relevant by augmenting my skills with the latest technologies.
                </Typography>
            </DialogContent>
        </Dialog>
        </div>    
    )
}

export default Cards
