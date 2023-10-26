import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Chip, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from "@mui/material";
import articles from "./articles.json";

function Articles() {
    
    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });
    
    return (
        <ImageList variant="masonry" sx={{ width: "60%", minWidth: "280px", margin: "0 auto", paddingBottom: "20px" }} cols={isDesktop?2:1}>
            {articles.sort((a,b) => a.title - b.title).map((item) => (
                <a key={item.title} href={item.link} target="_blank">
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
                                <Stack direction="row" alignItems="center" spacing={1} style={{margin:"5px 0"}}>
                                    {item.tags.map((tag) => (
                                        <Chip key={tag} label={tag} size="small" style={{backgroundColor: "white"}}/>
                                    ))}
                                </Stack>
                            }
                        />
                    </ImageListItem>
                </a>
            ))}
        </ImageList>
    )
}

export default Articles
