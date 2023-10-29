import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Chip, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, TextField, Typography } from "@mui/material";
import articles from "./articles.json";
import { LinkOffRounded, LinkRounded, LocationCity, LocationOn } from "@mui/icons-material";

function Articles() {
    
    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    const [filtered, setFiltered] = useState(articles);
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFiltered(articles.filter((article) => {
            return article.title.toLowerCase().indexOf(searchTerm) !== -1 
            || article.location?.toLowerCase().indexOf(searchTerm) !== -1 
            || article.city?.toLowerCase().indexOf(searchTerm) !== -1 
            || article.tags?.some((tag) => tag?.toLowerCase().indexOf(searchTerm) !== -1)
        }));
    }
    
    return (
        <div style={{width: "70%", minWidth: "280px", paddingBottom: "20px", margin: "10px auto"}}>
            {/* <Stack direction="row" alignItems="center"><Typography variant="h5">Culinary Delights</Typography>&nbsp;({filtered.length})</Stack>
            <TextField style={{width: "280px", backgroundColor: "white", margin: "10px 0"}}
                label="Search by Title/Location/City/Tag"
                type="search" size="small"
                onChange={(e) => handleSearch(e)}
                onBlur={(e) => handleSearch(e)}
            /> */}
            <ImageList sx={{ width: "100%", minWidth: "280px", margin: "0 auto"}} cols={isDesktop?2:1}>
                {filtered?.map((item) => (
                        <ImageListItem key={item.title} style={{width: "100%", aspectRatio: "4/3", position: 'relative'}}>
                            <img 
                                srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                width={"100%"}
                            />
                            {/* <Stack direction="row" spacing={1} style={{position: 'absolute', top: 0, right: 0, margin: '2px'}}>
                                {item.tags?.map((tag) => (
                                    <Chip key={tag} label={tag} size="small" style={{backgroundColor: "white", opacity: "80%"}}/>
                                ))}
                            </Stack> */}
                            <ImageListItemBar
                                subtitle={
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:'5px 0'}}>
                                        <Typography style={{float: "left"}}>{item.title}</Typography>
                                        {item.location?<a href={item.location} target={item.location.includes("http")?"_blank":"_self"}><IconButton style={{color: 'white', float: "right"}}><LocationOn/></IconButton></a>:null}
                                        {item.link?<a href={item.link} target={item.link.includes("http")?"_blank":"_self"}><IconButton style={{color: 'white', float: "right"}}><LinkRounded/></IconButton></a>:null}
                                    </div>
                                }
                            />
                        </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Articles
