import { DialogTitle, DialogContent, List, ListItem, ListItemButton } from "@mui/material";
import { YouTube } from "@mui/icons-material";

function Multimedia() {
    return (
        <>
            <DialogTitle>Multimedia</DialogTitle>
            <DialogContent>
                <List>
                    <ListItem><ListItemButton href="https://open.spotify.com/user/31upmukqrx4zlcsmsjjv5tnh4ofq" target="_blank"><img src="images/site/spotify.png" width="28px" style={{padding: '2px'}}/>&nbsp;Spotify</ListItemButton></ListItem>
                    <ListItem><ListItemButton href="https://youtube.com/@likarajo" target="_blank"><YouTube fontSize="large"/>&nbsp;YouTube</ListItemButton></ListItem>
                    <ListItem><ListItemButton href="https://soundcloud.com/likarajo" target="_blank"><img src="images/site/soundcloud.png" width="32px" style={{padding: '2px'}}/>&nbsp;SoundCloud</ListItemButton></ListItem>
                </List>
            </DialogContent>
        </>
    )
}

export default Multimedia
