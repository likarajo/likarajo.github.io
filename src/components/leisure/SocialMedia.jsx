import { DialogTitle, DialogContent, List, ListItem, ListItemButton } from "@mui/material";
import { Instagram, Facebook, Twitter, Pinterest } from "@mui/icons-material";

function SocialMedia() {
    return (
        <>
            <DialogTitle>Social Media</DialogTitle>
            <DialogContent>
                <List>
                    <ListItem><ListItemButton href="https://instagram.com/likarajo/" target="_blank"><Instagram fontSize="large"/>&nbsp;Instagram</ListItemButton></ListItem>
                    <ListItem><ListItemButton href="https://facebook.com/likarajo/" target="_blank"><Facebook fontSize="large"/>&nbsp;Facebook</ListItemButton></ListItem>
                    <ListItem><ListItemButton href="https://twitter.com/likarajo/" target="_blank"><Twitter fontSize="large"/>&nbsp;Twitter</ListItemButton></ListItem>
                    <ListItem><ListItemButton href="https://pinterest.com/likarajo/" target="_blank"><Pinterest fontSize="large"/>&nbsp;Pinterest</ListItemButton></ListItem>
                </List>
            </DialogContent>
        </>
    )
}

export default SocialMedia
