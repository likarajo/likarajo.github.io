import { Dialog, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SocialMedia from "../leisure/SocialMedia";
import Multimedia from "../leisure/Multimedia";

function Navbar() {
    const isWide = useMediaQuery({query: '(min-width: 768px)'});

    const [anch1, setAnch1] = useState();
    const openMenu1 = Boolean(anch1);

    const [openDrawer, setOpenDrawer] = useState(false);

    const [openSocialMedia, setOpenSocialMedia] = useState(false);

    const [openMultimedia, setOpenMultimedia] = useState(false);

    return (
        <>
            <nav id="nav" aria-label="Site">
                {isWide ?
                    <Stack direction="row">
                        <ListItemButton id="nav-writing" onClick={() => window.open("/#/blogs", "_self")}>Writing</ListItemButton>
                        <ListItemButton id="nav-contact" onClick={() => window.open("/#/contact", "_self")}>Contact</ListItemButton>
                        <ListItemButton id="nav-notes" onClick={(e) => setAnch1(e.currentTarget)}>Notes</ListItemButton>
                        <IconButton href="/" aria-label="Home"><HomeIcon/></IconButton>
                    </Stack>
                :
                    <IconButton aria-label="Menu" onClick={() => setOpenDrawer(!openDrawer)} style={{cursor:'pointer'}}>
                        <MenuIcon/>
                    </IconButton>
                }
            </nav>

            <Menu
                anchorEl={anch1}
                open={openMenu1}
                onClose={() => setAnch1()}
                onClick={() => setAnch1()}
                MenuListProps={{'aria-labelledby': 'basic-button'}}
            >
                <MenuItem onClick={() => window.open("/#/travel", "_self")}><Typography>Travel</Typography></MenuItem>
                <MenuItem onClick={() => window.open("/#/travel/cities", "_self")}><Typography style={{marginLeft: '10px'}}>Cities</Typography></MenuItem>
                <MenuItem onClick={() => window.open("/#/travel/nature", "_self")}><Typography style={{marginLeft: '10px'}}>Nature</Typography></MenuItem>
                <MenuItem onClick={() => window.open("/#/leisure", "_self")}><Typography>Leisure</Typography></MenuItem>
                <MenuItem onClick={() => window.open("/#/leisure/culinary", "_self")}><Typography style={{marginLeft: '10px'}}>Culinary</Typography></MenuItem>
                <MenuItem onClick={() => setOpenSocialMedia(true)}><Typography>Social media</Typography></MenuItem>
                <MenuItem onClick={() => setOpenMultimedia(true)}><Typography>Multimedia</Typography></MenuItem>
            </Menu>

            <Drawer
                anchor={'right'}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onClick={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem key="item-0"><ListItemButton href="/"><ListItemIcon><HomeIcon/></ListItemIcon><Typography>Home</Typography></ListItemButton></ListItem>
                    <Divider/>
                    <ListItem key="item-writing"><ListItemButton href="/#/blogs"><Typography>Writing</Typography></ListItemButton></ListItem>
                    <ListItem key="item-contact"><ListItemButton href="/#/contact"><Typography>Contact</Typography></ListItemButton></ListItem>
                    <Divider/>
                    <ListItem key="item-1"><ListItemButton href="/#/travel"><Typography>Travel</Typography></ListItemButton></ListItem>
                    <ListItem key="item-1.1"><ListItemButton href="/#/travel/cities"><Typography style={{marginLeft: '10px'}}>Cities</Typography></ListItemButton></ListItem>
                    <ListItem key="item-1.2"><ListItemButton href="/#/travel/nature"><Typography style={{marginLeft: '10px'}}>Nature</Typography></ListItemButton></ListItem>
                    <ListItem key="item-2"><ListItemButton href="/#/leisure"><Typography>Leisure</Typography></ListItemButton></ListItem>
                    <ListItem key="item-2.1"><ListItemButton href="/#/leisure/culinary"><Typography style={{marginLeft: '10px'}}>Culinary</Typography></ListItemButton></ListItem>
                    <ListItem key="item-2.3"><ListItemButton onClick={() => setOpenSocialMedia(true)}><Typography>Social media</Typography></ListItemButton></ListItem>
                    <ListItem key="item-2.4"><ListItemButton onClick={() => setOpenMultimedia(true)}><Typography>Multimedia</Typography></ListItemButton></ListItem>
                    <Divider/>
                </List>
            </Drawer>

            <Dialog open={openSocialMedia} onClose={() => setOpenSocialMedia(false)}>
                <SocialMedia />
            </Dialog>

            <Dialog open={openMultimedia} onClose={() => setOpenMultimedia(false)}>
                <Multimedia />
            </Dialog>
        </>
    )
}
  
export default Navbar