import { IconButton, Stack } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Social() {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', margin: '10px auto', width:'400px', height: '50px'}}>
            <Stack direction="row" style={{margin: '0 auto', justifyContent: 'center'}}>
                <IconButton href={"https://linkedin.com/in/likarajo/"} target="_blank"><LinkedInIcon fontSize="large"/></IconButton>
                <IconButton href={"https://instagram.com/likarajo/"} target="_blank"><InstagramIcon fontSize="large"/></IconButton>
                <IconButton href={"https://facebook.com/likarajo/"} target="_blank"><FacebookIcon fontSize="large"/></IconButton>
                <IconButton href={"https://twitter.com/likarajo/"} target="_blank"><TwitterIcon fontSize="large"/></IconButton>
            </Stack>
        </div>
    )
}

export default Social