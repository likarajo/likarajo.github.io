import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Backdrop, Chip, Dialog, DialogContent, DialogTitle, IconButton, ImageList, ImageListItem, Link, Pagination, Stack, TextField, Typography } from "@mui/material";
import { Close, Info, LinkRounded, LocationOn, RemoveRedEye } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import articles from "./articles.json";


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

    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const count = Math.ceil(filtered?.length / itemsPerPage);
    const handlePage = (event, value) => {
        setPage(value);
        window.scrollTo(0,0);
    };

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
            {filtered.length >= itemsPerPage &&
            <Pagination count={count} page={page} onChange={handlePage} 
                shape="rounded" hideFirstButton hideLastButton size="small"
                style={{margin: "20px auto"}}
            />}
            <ImageList variant="masonry" sx={{ width: "100%", minWidth: "280px", margin: "0 auto"}} cols={isDesktop?2:1}>
                {filtered?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => (
                    <ImageListItem key={item.img} style={{width: "100%", position: 'relative'}}>
                        <LazyLoadImage
                            src={item.img}
                            alt={item.title}
                            width={"100%"}
                            style={{minHeight: "150px"}}
                        />
                        <RemoveRedEye style={{cursor: "pointer", backgroundColor: "white", opacity: "80%", position: 'absolute', top: 0, left: 0, margin: '2px'}} onClick={() => handleOpen(item)} fontSize="small"/>
                        <Info style={{cursor: "pointer", backgroundColor: "white", opacity: "80%", position: 'absolute', bottom:0, right: 0, margin: '8px 2px'}} onClick={() => handleOpenInfo(item)} fontSize="small"/>
                        {/* <Stack direction="row" spacing={1} style={{position: 'absolute', top: 0, right: 0, margin: '2px'}}>
                            {item.tags?.map((tag) => (
                                <Chip key={tag} label={tag} size="small" style={{backgroundColor: "white", opacity: "80%"}}/>
                            ))}
                        </Stack> */}
                    </ImageListItem>
                ))}
            </ImageList>
            {filtered.length >= itemsPerPage &&
            <Pagination count={count} page={page} onChange={handlePage} 
                shape="rounded" hideFirstButton hideLastButton size="small"
                style={{margin: "20px auto"}}
            />}
            <Dialog open={open} onClose={() => handleClose()} maxWidth={'xl'}>
                <img 
                    srcSet={selectedItem?.img}
                    src={selectedItem?.img}
                    alt={selectedItem?.title}
                    style={{position: "relative"}}
                />
                <IconButton onClick={() => handleClose()} style={{position: 'absolute', top:0, right: 0, margin: '2px'}}>
                    <Close/>
                </IconButton>
            </Dialog>
            <Dialog open={openInfo} onClose={() => handleCloseInfo()} fullWidth>
                <DialogTitle>{selectedItem?.title?selectedItem?.title:null}</DialogTitle>
                <DialogContent>
                    {selectedItem?.location?
                        <div style={{display: "flex", alignItems: "center"}}>
                            <LocationOn fontSize="small"/><Typography>{selectedItem?.location}</Typography>
                        </div>
                    :null}
                    {selectedItem?.link?
                        <Link href={selectedItem?.link} target={selectedItem?.link?.includes("http")?"_blank":"_self"} style={{display: "flex", alignItems: "center"}}>
                            <LinkRounded/><span> Read More</span>
                        </Link>
                    :null}
                </DialogContent>
                <IconButton onClick={() => handleCloseInfo()} style={{position: 'absolute', top:0, right: 0, margin: '10px'}}>
                    <Close/>
                </IconButton>
            </Dialog>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open || openInfo} onClick={() => {handleClose(); handleCloseInfo();}}></Backdrop>
        </div>
    )
}

export default Nature
