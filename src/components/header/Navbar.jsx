import { Drawer, IconButton, List, ListItem, ListItemButton, Stack } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    
    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const tabletSize = useMediaQuery({query: '(min-width: 768px)'});
    const tabletSmallSize = useMediaQuery({query: '(min-width: 481px)'});
    const phoneSize = useMediaQuery({query: '(max-width: 480px)'});
    
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    const [isTablet, setIsTablet] = useState(tabletSize);
    const [isTabletSmall, setIsTabletSmall] = useState(tabletSmallSize);
    const [isPhone, setIsPhone] = useState(phoneSize);
    window.addEventListener('resize', () => {
        setOpen(false);
        setIsDesktop(desktopSize);
        setIsTablet(tabletSize);
        setIsTabletSmall(tabletSmallSize);
        setIsPhone(phoneSize);
    });
    
    return (
        <>
            <div id="nav" style={{float:'right'}}>
                {(isDesktop || isTablet) ?
                    <Stack spacing={2} direction="row">
                        <ListItemButton href="/#/travel" disabled={(window.location.pathname==='/#/travel')}>Travel</ListItemButton>
                        <ListItemButton href="/#/leisure" disabled={(window.location.pathname==='/#/leisure')}>Leisure</ListItemButton>
                        <ListItemButton href="/#/profession" disabled={(window.location.pathname==='/#/profession')}>Profession</ListItemButton>
                    </Stack>
                :
                    <IconButton onClick={() => setOpen(true)} style={{cursor:'pointer'}}>
                        <MenuIcon/>
                    </IconButton>
                }
            </div>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
                onClick={() => setOpen(false)}
            >
                <List>
                    <ListItem key="item-1"><ListItemButton href="/#/travel">Travel</ListItemButton></ListItem>
                    <ListItem key="item-2"><ListItemButton href="/#/leisure">Leisure</ListItemButton></ListItem>
                    <ListItem key="item-3"><ListItemButton href="/#/profession">Profession</ListItemButton></ListItem>
                </List>
            </Drawer>
        </>
    )
}
  
export default Navbar