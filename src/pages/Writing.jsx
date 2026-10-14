import { Breadcrumbs, Link, Typography } from "@mui/material"
import { useEffect } from "react";
import "../profile.css";

const pieces = [
    {
        title: "A 16-bit RISC processor on an FPGA",
        year: "2014",
        sentence: "A 16-bit RISC design on an FPGA, first runner-up in the IETE Technical Paper Contest.",
        href: "https://likarajoblogs.wordpress.com/2018/06/08/risc-using-harvard/",
    },
    {
        title: "COVID-19 sentiment analysis",
        year: "2020",
        sentence: "A write-up of a model that classifies the sentiment of COVID-19 tweets.",
        href: "https://www.linkedin.com/pulse/covid-19-sentiment-analysis-rajarshi-chattopadhyay/",
    },
    {
        title: "Design patterns for safe natural-language-to-SQL agents",
        year: "2026",
        sentence: "How a public agent turns a plain-language question into a checked query, and refuses a question the table cannot answer.",
        href: "https://github.com/likarajo/ai-agent-chatbot/blob/main/docs/article-draft.md",
    },
]

function Writing() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <main className="profile" id="writing">
            <Breadcrumbs className="crumbs" separator="›">
                <Link color="inherit" style={{textDecoration: "none"}} href="/"><b>Home</b></Link>
                <Typography>Writing</Typography>
            </Breadcrumbs>
            <h1>Writing</h1>
            <ul className="piece-list">
                {pieces.map((piece) => (
                    <li key={piece.href}>
                        <a className="text-link" href={piece.href} target="_blank" rel="noreferrer">{piece.title}</a>
                        <p className="piece-year">{piece.year}</p>
                        <p>{piece.sentence}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Writing
