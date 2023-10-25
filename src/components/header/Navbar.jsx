import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    
    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const tabletSize = useMediaQuery({query: '(min-width: 768px)'});
    const tabletSmallSize = useMediaQuery({query: '(min-width: 481px)'});
    const phoneSize = useMediaQuery({query: '(max-width: 480px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    const [isTablet, setIsTablet] = useState(tabletSize);
    const [isTabletSmall, setIsTabletSmall] = useState(tabletSmallSize);
    const [isPhone, setIsPhone] = useState(phoneSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
        setIsTablet(tabletSize);
        setIsTabletSmall(tabletSmallSize);
        setIsPhone(phoneSize);
    });

    const [anch1, setAnch1] = useState();
    const openMenu1 = Boolean(anch1);
    
    const [anch2, setAnch2] = useState();
    const openMenu2 = Boolean(anch2);
    
    const [anch3, setAnch3] = useState();
    const openMenu3 = Boolean(anch3);
    
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <div id="nav" style={{float:'right'}}>
                {(isDesktop || isTablet) ?
                    <Stack direction="row">
                        <ListItemButton id="nav-travel" onClick={(e) => setAnch1(e.currentTarget)}>Travel</ListItemButton>
                        <ListItemButton id="nav-leisure" onClick={(e) => setAnch2(e.currentTarget)}>Leisure</ListItemButton>
                        <ListItemButton id="nav-profession" onClick={(e) => setAnch3(e.currentTarget)}>Profession</ListItemButton>
                    </Stack>
                :
                    <IconButton onClick={() => setOpenDrawer(!openDrawer)} style={{cursor:'pointer'}}>
                        <MenuIcon/>
                    </IconButton>
                }
            </div>

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
            </Menu>

            <Menu
                anchorEl={anch2}
                open={openMenu2}
                onClose={() => setAnch2()}
                onClick={() => setAnch2()}
                MenuListProps={{'aria-labelledby': 'basic-button'}}
            >
                <MenuItem onClick={() => window.open("/#/leisure", "_self")}><Typography>Leisure</Typography></MenuItem>
                <MenuItem onClick={() => window.open("/#/leisure/culinary", "_self")}><Typography style={{marginLeft: '10px'}}>Culinary</Typography></MenuItem>
            </Menu>

            <Menu
                anchorEl={anch3}
                open={openMenu3}
                onClose={() => setAnch3()}
                onClick={() => setAnch3()}
                MenuListProps={{'aria-labelledby': 'basic-button'}}
            >
                <MenuItem onClick={() => window.open("/#/profession", "_self")}><Typography>Profession</Typography></MenuItem>
                <MenuItem onClick={() => window.open("https://linkedin.com/in/likarajo")}><Typography style={{marginLeft: '10px'}}>LinkedIn</Typography></MenuItem>
                <MenuItem onClick={() => window.open("https://likarajoblogs.wordpress.com/")}><Typography style={{marginLeft: '10px'}}>Blogs</Typography></MenuItem>
                <MenuItem onClick={() => window.open("docs/resume.pdf")}><Typography style={{marginLeft: '10px'}}>Resume</Typography></MenuItem>
            </Menu>

            <Drawer
                anchor={'right'}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onClick={() => setOpenDrawer(false)}
            >
                <List dense>
                    <ListItem key="item-1"><ListItemButton href="/#/travel"><Typography>Travel</Typography></ListItemButton></ListItem>
                    <ListItem key="item-1.1"><ListItemButton href="/#/travel/cities"><Typography style={{marginLeft: '10px'}}>Cities</Typography></ListItemButton></ListItem>
                    <ListItem key="item-1.2"><ListItemButton href="/#/travel/nature"><Typography style={{marginLeft: '10px'}}>Nature</Typography></ListItemButton></ListItem>
                    <Divider/>
                    <ListItem key="item-2"><ListItemButton href="/#/leisure"><Typography>Leisure</Typography></ListItemButton></ListItem>
                    <ListItem key="item-2.1"><ListItemButton href="/#/leisure/culinary"><Typography style={{marginLeft: '10px'}}>Culinary</Typography></ListItemButton></ListItem>
                    <Divider/>
                    <ListItem key="item-3"><ListItemButton href="/#/profession"><Typography>Profession</Typography></ListItemButton></ListItem>
                    <ListItem key="item-3.1"><ListItemButton href="https://linkedin.com/in/likarajo" target="_blank"><Typography style={{marginLeft: '10px'}}>LinkedIn</Typography></ListItemButton></ListItem>
                    <ListItem key="item-3.2"><ListItemButton href="https://likarajoblogs.wordpress.com/" target="_blank"><Typography style={{marginLeft: '10px'}}>Blogs</Typography></ListItemButton></ListItem>
                    <ListItem key="item-3.3"><ListItemButton href="docs/resume.pdf" target="_blank"><Typography style={{marginLeft: '10px'}}>Resume</Typography></ListItemButton></ListItem>
                    <Divider/>
                </List>
            </Drawer>
        </>
    )
}
  
export default Navbar