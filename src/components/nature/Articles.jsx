import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Chip, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from "@mui/material";
import articles from "./articles.json";
import { LocationOn } from "@mui/icons-material";

function Articles() {
    
    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });
    
    return (
        <ImageList variant="masonry" sx={{ width: "60%", minWidth: "280px", margin: "0 auto", paddingBottom: "20px" }} cols={isDesktop?2:1}>
            {articles?.map((item) => (
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
                                <div style={{margin:'5px 0'}}>
                                    {item.location?<Chip icon={<LocationOn style={{color: 'white'}}/>} label={<b>{item.location}</b>} style={{color: 'white', left: 0}}/>:<span></span>}
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
    )
}

export default Articles
