import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Dialog, Typography } from "@mui/material";
import AppButton from "../common/AppButton";
import SocialMedia from "./SocialMedia";
import Multimedia from "./Multimedia";

function Media() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    const [openSocialMedia, setOpenSocialMedia] = useState(false);
    const [openMultimedia, setOpenMultimedia] = useState(false);

    return (
        <div style={{paddingTop: isDesktop?'30px':'0px'}}>
            {isDesktop ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', width:'70%', gap: '10%', minWidth:'600px'}}>
                    <div style={{width: '45%'}}>
                        <Typography variant="h5" gutterBottom>Social Media</Typography>
                        <AppButton variant="contained" onClick={() => setOpenSocialMedia(true)} style={{margin: '5px 0'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</AppButton>
                    </div>
                    <div style={{width: '45%'}}>
                        <Typography variant="h5" gutterBottom>Multimedia</Typography>
                        <AppButton variant="contained" onClick={() => setOpenMultimedia(true)} style={{margin: '5px 0'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</AppButton>
                    </div>
                </div>
            :
                <div style={{ justifyContent: 'center', margin: '0px auto', width:'45%', minWidth:'280px', paddingBottom: '10px'}}>
                    <div style={{width: '100%', margin: '20px 0'}}>
                        <Typography variant="h5" gutterBottom>Social Media</Typography>
                        <AppButton variant="contained" onClick={() => setOpenSocialMedia(true)} style={{margin: '5px 0'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</AppButton>
                    </div>
                    <div style={{width: '100%', margin: '20px 0'}}>
                        <Typography variant="h5" gutterBottom>Multimedia</Typography>
                        <AppButton variant="contained" onClick={() => setOpenMultimedia(true)} style={{margin: '5px 0'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</AppButton>
                    </div>
                </div>
            }
            <Dialog open={openSocialMedia} onClose={() => setOpenSocialMedia(false)}>
                <SocialMedia />
            </Dialog>
            <Dialog open={openMultimedia} onClose={() => setOpenMultimedia(false)}>
                <Multimedia />
            </Dialog>
        </div>    
    )
}

export default Media