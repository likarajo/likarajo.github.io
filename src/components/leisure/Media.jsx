import { useState } from "react";
import { Dialog, Typography } from "@mui/material";
import AppButton from "../common/AppButton";
import SocialMedia from "./SocialMedia";
import Multimedia from "./Multimedia";

function Media() {
    const [openSocialMedia, setOpenSocialMedia] = useState(false);
    const [openMultimedia, setOpenMultimedia] = useState(false);

    return (
        <div className="feature-split">
            <article>
                <Typography variant="h5" component="h2" gutterBottom>Social Media</Typography>
                <AppButton variant="contained" onClick={() => setOpenSocialMedia(true)}>Links</AppButton>
            </article>
            <article>
                <Typography variant="h5" component="h2" gutterBottom>Multimedia</Typography>
                <AppButton variant="contained" onClick={() => setOpenMultimedia(true)}>Links</AppButton>
            </article>
            <Dialog open={openSocialMedia} onClose={() => setOpenSocialMedia(false)} aria-labelledby="social-media-title">
                <SocialMedia />
            </Dialog>
            <Dialog open={openMultimedia} onClose={() => setOpenMultimedia(false)} aria-labelledby="multimedia-title">
                <Multimedia />
            </Dialog>
        </div>
    )
}

export default Media
