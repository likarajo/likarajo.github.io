import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Chip, ImageList, ImageListItem, ImageListItemBar, Stack, TextField, Typography } from "@mui/material";
import articles from "./articles.json";
import { LocationCity, LocationOn } from "@mui/icons-material";

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
        <div style={{width: "60%", minWidth: "280px", paddingBottom: "20px", margin: "10px auto"}}>
            <Stack direction="row" alignItems="center"><Typography variant="h5">Culinary Delights</Typography>&nbsp;({filtered.length})</Stack>
            <TextField style={{width: "280px", backgroundColor: "white", margin: "10px 0"}}
                label="Search by Title/Location/City/Tag"
                type="search" size="small"
                onChange={(e) => handleSearch(e)}
                onBlur={(e) => handleSearch(e)}
            />
            <ImageList variant="masonry" sx={{ width: "100%", minWidth: "280px", margin: "0 auto"}} cols={isDesktop?2:1}>
                {filtered?.map((item) => (
                    <a key={item.title} href={item.link} target={item.link.includes("http")?"_blank":"_self"}>
                        <ImageListItem style={{width: "100%", aspectRatio: "4/3"}}>
                            <img 
                                srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                width={"100%"}
                            />
                            <ImageListItemBar
                                title={<Typography variant={isDesktop?"h6":"span"}><b>{item.title}</b></Typography>}
                                subtitle={
                                    <div>
                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:'5px 0'}}>
                                            {item.location?<Chip icon={<LocationOn style={{color: 'white'}}/>} label={<b>{item.location}</b>} style={{color: 'white', float: "left"}}/>:null}
                                            {item.city?<Chip icon={<LocationCity style={{color: 'white'}}/>} label={item.city} style={{color: 'white', float: "right"}}/>:null}
                                        </div>
                                        <Stack direction="row" spacing={1}>
                                            {item.tags?.map((tag) => (
                                                <Chip key={tag} label={tag} size="small" style={{backgroundColor: "white"}}/>
                                            ))}
                                        </Stack>
                                    </div>
                                }
                            />
                        </ImageListItem>
                    </a>
                ))}
            </ImageList>
        </div>
    )
}

export default Articles
