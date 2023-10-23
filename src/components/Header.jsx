import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Drawer, IconButton, List, ListItem, ListItemButton, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    
    const widescreen = useMediaQuery({query: '(min-width: 900px)'})
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(widescreen);
    window.addEventListener('resize', () => {
        setOpen(false);
        setIsDesktop(widescreen);
    });

    const logo = new URL('../images/favicon.png', import.meta.url).href

    return (
        <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', height:50, width:'100%'}}>
            <div id="logo" style={{float:'left'}}>
                <a href="/"><img src={logo} alt="Logo" height={50}/></a>
            </div>
            <div id="nav" style={{float:'right'}}>
                {isDesktop && (
                    <Stack spacing={2} direction="row">
                        <ListItemButton href="/travel" disabled={(window.location.pathname==='/travel')}>Travel</ListItemButton>
                        <ListItemButton href="/leisure" disabled={(window.location.pathname==='/leisure')}>Leisure</ListItemButton>
                        <ListItemButton href="/profession" disabled={(window.location.pathname==='/profession')}>Profession</ListItemButton>
                    </Stack>
                )}
                {!isDesktop && (
                    <IconButton onClick={() => setOpen(true)} style={{cursor:'pointer'}}>
                        <MenuIcon />
                    </IconButton>
                )}
            </div>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <List>
                    <ListItem key="item-1"><ListItemButton href="/travel">Travel</ListItemButton></ListItem>
                    <ListItem key="item-2"><ListItemButton href="/leisure">Leisure</ListItemButton></ListItem>
                    <ListItem key="item-3"><ListItemButton href="/profession">Profession</ListItemButton></ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Header
