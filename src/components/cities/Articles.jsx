import { useState } from "react";
import useMediaQuery from "../common/useMediaQuery";
import { Chip, ImageList, ImageListItem, ImageListItemBar, Pagination, Stack, TextField, Typography } from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";
import articles from "./articles.json";


function Articles() {
    const twoColumns = useMediaQuery({query: '(min-width: 768px)'});

    const [filtered, setFiltered] = useState(articles);
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFiltered(articles.filter((article) => {
            return article.title.toLowerCase().indexOf(searchTerm) !== -1 
            || article.location?.toLowerCase().indexOf(searchTerm)!== -1
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
    
    return (
        <div className="gallery">
            <Typography variant="h5" component="h2">Cities and Landmarks ({filtered.length})</Typography>
            <TextField
                label="Search by Title/Location/Tag"
                type="search"
                onChange={(e) => handleSearch(e)}
                onBlur={(e) => handleSearch(e)}
            />
            {filtered.length >= itemsPerPage &&
            <Pagination count={count} page={page} onChange={handlePage}
                shape="rounded" hideFirstButton hideLastButton
            />}
            <ImageList variant="masonry" cols={twoColumns ? 2 : 1}>
                {filtered?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => (
                    <a key={item.title} href={item.link} target={item.link.includes("http")?"_blank":"_self"}>
                        <ImageListItem style={{width: "100%", position: 'relative'}}>
                            <img
                                src={item.img}
                                alt={item.title}
                                width="100%"
                                loading="lazy"
                                style={{minHeight: "150px"}}
                            />
                            <Stack direction="row" spacing={1} style={{position: 'absolute', top: 0, right: 0, margin: "2px"}}>
                                {item.tags?.map((tag) => (
                                    <Chip key={tag} label={tag} size="small" style={{backgroundColor: "white", opacity: "80%"}}/>
                                ))}
                            </Stack>
                            <ImageListItemBar
                                title={<Typography variant="body1"><b>{item.title}</b></Typography>}
                                subtitle={item.location?<Chip icon={<LocationOn style={{color: 'white'}}/>} label={<b>{item.location}</b>} style={{color: 'white', left: 0}}/>:<Chip></Chip>}
                            />
                        </ImageListItem>
                    </a>
                ))}
            </ImageList>
            {filtered.length >= itemsPerPage &&
            <Pagination count={count} page={page} onChange={handlePage} 
                shape="rounded" hideFirstButton hideLastButton
            />}
        </div>
    )
}

export default Articles
