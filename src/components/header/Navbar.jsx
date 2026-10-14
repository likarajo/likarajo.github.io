import { Drawer, IconButton, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const isWide = useMediaQuery({query: '(min-width: 768px)'});
    const [openDrawer, setOpenDrawer] = useState(false);

    const closeDrawer = () => setOpenDrawer(false);

    return (
        <>
            <nav id="nav" aria-label="Site">
                {isWide ?
                    <Stack direction="row">
                        <ListItemButton id="nav-writing" href="/#/blogs">Writing</ListItemButton>
                        <ListItemButton id="nav-contact" href="/#/contact">Contact</ListItemButton>
                        <ListItemButton id="nav-notes" href="/#/notes">Notes</ListItemButton>
                    </Stack>
                :
                    <IconButton aria-label="Menu" aria-expanded={openDrawer} onClick={() => setOpenDrawer(!openDrawer)}>
                        <MenuIcon/>
                    </IconButton>
                }
            </nav>

            <Drawer
                anchor={'right'}
                open={openDrawer}
                onClose={closeDrawer}
            >
                <List>
                    <ListItem><ListItemButton href="/#/blogs" onClick={closeDrawer}><Typography>Writing</Typography></ListItemButton></ListItem>
                    <ListItem><ListItemButton href="/#/contact" onClick={closeDrawer}><Typography>Contact</Typography></ListItemButton></ListItem>
                    <ListItem><ListItemButton href="/#/notes" onClick={closeDrawer}><Typography>Notes</Typography></ListItemButton></ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Navbar
