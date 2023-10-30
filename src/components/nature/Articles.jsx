import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Backdrop, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, ImageList, ImageListItem, Stack, TextField, Typography } from "@mui/material";
import articles from "./articles.json";
import { Close, Info, LinkOffRounded, LinkRounded, LocationCity, LocationOn, RemoveRedEye } from "@mui/icons-material";

function Nature() {
    
    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    const [filtered, setFiltered] = useState(articles);
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFiltered(articles.filter((article) => {
            return article.title?.toLowerCase().indexOf(searchTerm) !== -1 
            || article.location?.toLowerCase().indexOf(searchTerm) !== -1 
            || article.tags?.some((tag) => tag?.toLowerCase().indexOf(searchTerm) !== -1)
        }));
    }

    const [open, setOpen] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    }
    const handleClose = () => {
        setSelectedItem(null);
        setOpen(false);
    }
    const handleOpenInfo = (item) => {
        setSelectedItem(item);
        setOpenInfo(true);
    }
    const handleCloseInfo = () => {
        setSelectedItem(null);
        setOpenInfo(false);
    }
    
    return (
        <div style={{width: "70%", minWidth: "280px", paddingBottom: "20px", margin: "10px auto"}}>
            <Stack direction="row" alignItems="center"><Typography variant="h5" gutterBottom>Nature</Typography>&nbsp;({filtered.length})</Stack>
            <TextField style={{width: "280px", backgroundColor: "white", margin: "10px 0"}}
                label="Search"
                type="search" size="small"
                onChange={(e) => handleSearch(e)}
                onBlur={(e) => handleSearch(e)}
            />
            <ImageList sx={{ width: "100%", minWidth: "280px", margin: "0 auto"}} cols={isDesktop?2:1}>
                {filtered?.map((item) => (
                    <ImageListItem key={item.img} style={{width: "100%", aspectRatio: "4/3", position: 'relative'}}>
                        <img 
                            srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?fit=crop&auto=format`}
                            alt={item.title}
                            width={"100%"}
                            loading="lazy"
                        />
                        <RemoveRedEye style={{cursor: "pointer", backgroundColor: "white", opacity: "80%", position: 'absolute', top: 0, left: 0, margin: '2px'}} onClick={() => handleOpen(item)} fontSize="small"/>
                        <Info style={{cursor: "pointer", backgroundColor: "white", opacity: "80%", position: 'absolute', bottom:0, right: 0, margin: '2px'}} onClick={() => handleOpenInfo(item)} fontSize="small"/>
                        {/* <Stack direction="row" spacing={1} style={{position: 'absolute', top: 0, right: 0, margin: '2px'}}>
                            {item.tags?.map((tag) => (
                                <Chip key={tag} label={tag} size="small" style={{backgroundColor: "white", opacity: "80%"}}/>
                            ))}
                        </Stack> */}
                    </ImageListItem>
                ))}
            </ImageList>
            <Dialog open={open} onClose={() => handleClose()} style={{maxWidth: "85vw", minWidth: "280px", margin: "0 auto"}}>
                <img 
                    srcSet={selectedItem?.img}
                    src={selectedItem?.img}
                    alt={selectedItem?.title}
                    width={"100%"}
                    style={{position: "relative"}}
                />
                <IconButton onClick={() => handleClose()} style={{position: 'absolute', top:0, right: 0, margin: '2px'}}>
                    <Close/>
                </IconButton>
            </Dialog>
            <Dialog open={openInfo} onClose={() => handleCloseInfo()} fullWidth>
                <DialogTitle>{selectedItem?.title?selectedItem?.title:null}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {selectedItem?.location?
                            <div style={{display: "flex", alignItems: "center"}}>
                                <LocationOn fontSize="small"/><Typography>{selectedItem?.location}</Typography>
                            </div>
                        :null}
                        {selectedItem?.link?
                            <IconButton href={selectedItem?.link} target={selectedItem?.link?.includes("http")?"_blank":"_self"}>
                                <LinkRounded/>
                            </IconButton>
                        :null}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open || openInfo} onClick={() => {handleClose(); handleCloseInfo();}}></Backdrop>
        </div>
    )
}

export default Nature
