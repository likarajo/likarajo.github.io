import { Breadcrumbs, Link, Typography } from "@mui/material"
import { useEffect } from "react";
import "../profile.css";

const galleries = [
    {
        title: "Travel Photography",
        href: "/travel/",
        sentence: "Cities and landscapes from around the world.",
        category: "Photography"
    },
    {
        title: "Urban Exploration",
        href: "/travel/cities/",
        sentence: "Architecture, streets, and city life.",
        category: "Photography"
    },
    {
        title: "Nature & Landscapes",
        href: "/travel/nature/",
        sentence: "Mountains, water, and natural scenery.",
        category: "Photography"
    },
    {
        title: "Food & Culinary",
        href: "/leisure/culinary/",
        sentence: "Recipes and culinary experiments.",
        category: "Lifestyle"
    },
]

function Notes() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const photoGalleries = galleries.filter(g => g.category === "Photography");
    const lifestyleGalleries = galleries.filter(g => g.category === "Lifestyle");

    return (
        <main className="profile" id="notes">
            <Breadcrumbs className="crumbs" separator="›">
                <Link color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>
                <Typography>Gallery</Typography>
            </Breadcrumbs>
            <h1>Gallery</h1>
            <p className="lead">Photography, travel, and personal projects.</p>

            <section>
                <h2>Photography</h2>
                <ul className="piece-list">
                    {photoGalleries.map((item) => (
                        <li key={item.href}>
                            <a className="text-link" href={item.href}>{item.title}</a>
                            <p>{item.sentence}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Lifestyle</h2>
                <ul className="piece-list">
                    {lifestyleGalleries.map((item) => (
                        <li key={item.href}>
                            <a className="text-link" href={item.href}>{item.title}</a>
                            <p>{item.sentence}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Notes
