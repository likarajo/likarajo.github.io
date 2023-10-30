import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Chip, ImageList, ImageListItem, ImageListItemBar, Pagination, Stack, TextField, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import articles from "./articles.json";


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
            || article.tags?.some((tag) => tag.toLowerCase().indexOf(searchTerm) !== -1)
        }));
    }

    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
    const count = Math.ceil(filtered?.length / itemsPerPage);
    const handlePage = (event, value) => {
        setPage(value);
        window.scrollTo(0,0);
    };

    return (
        <div style={{width: "60%", minWidth: "280px", paddingBottom: "20px", margin: "10px auto"}}>
            <Stack direction="row" alignItems="center"><Typography variant="h5">Blogs</Typography>&nbsp;({filtered.length})</Stack>
            <TextField style={{width: "280px", backgroundColor: "white", margin: "10px 0"}}
                label="Search by Title/Tag"
                type="search" size="small"
                onChange={(e) => handleSearch(e)}
                onBlur={(e) => handleSearch(e)}
            />
            {filtered.length >= itemsPerPage &&
            <Pagination count={count} page={page} onChange={handlePage} 
                shape="rounded" hideFirstButton hideLastButton size="small"
                style={{margin: "20px auto"}}
            />}
            <ImageList variant="masonry" sx={{ width: "100%", minWidth: "280px", margin: "0 auto" }} cols={isDesktop?2:1}>
                {filtered?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => (
                    <a key={item.title} href={item.link} target={item.link.includes("http")?"_blank":"_self"}>
                        <ImageListItem style={{width: "100%", position: "relative"}}>
                            <LazyLoadImage
                                src={item.img}
                                alt={item.title}
                                width={"100%"}
                            />
                            <Stack direction="row" alignItems="center" spacing={1} style={{position: "absolute", top: 0, right: 0, margin: "2px"}}>
                                {item.tags.map((tag) => (
                                    <Chip key={tag} label={tag} size="small" style={{backgroundColor: "white", opacity: "80%"}}/>
                                ))}
                            </Stack>
                            <ImageListItemBar
                                title={<Typography variant={isDesktop?"h6":"span"}><b>{item.title}</b></Typography>}
                                subtitle={<Chip></Chip>}
                            />
                        </ImageListItem>
                    </a>
                ))}
            </ImageList>
            {filtered.length >= itemsPerPage &&
            <Pagination count={count} page={page} onChange={handlePage} 
                shape="rounded" hideFirstButton hideLastButton size="small"
                style={{margin: "20px auto"}}
            />}
        </div>
    )
}

export default Articles
