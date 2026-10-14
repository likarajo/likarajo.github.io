import { Breadcrumbs, Link, Typography } from "@mui/material"
import { useEffect } from "react";
import "../profile.css";

const galleries = [
    { title: "Travel", href: "/travel/", sentence: "Cities and landscapes, with a short note on each." },
    { title: "Cities", href: "/travel/cities/", sentence: "Streets, landmarks, and places worth going back to." },
    { title: "Nature", href: "/travel/nature/", sentence: "Mountains, water, and other photographs from the road." },
    { title: "Culinary", href: "/leisure/culinary/", sentence: "Dishes cooked and eaten along the way." },
    { title: "Photo essays", href: "/leisure/blogs/", sentence: "Older posts, kept as a photo gallery." },
    { title: "Leisure", href: "/leisure/", sentence: "Social accounts and music, plus the culinary notes." },
]

function Notes() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <main className="profile" id="notes">
            <Breadcrumbs className="crumbs" separator="›">
                <Link color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>
                <Typography>Notes</Typography>
            </Breadcrumbs>
            <h1>Notes</h1>
            <p>Photographs and older posts.</p>
            <ul className="piece-list">
                {galleries.map((item) => (
                    <li key={item.href}>
                        <a className="text-link" href={item.href}>{item.title}</a>
                        <p>{item.sentence}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Notes
