import { Card, IconButton } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";

function Scrollup() {

    const [show, setShow] = useState(false)

    // Subscribe after render so the page can be rendered to static HTML.
    useEffect(() => {
        function handleScroll(){
            let scrollPosition = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
            setShow(scrollPosition > 200)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        show &&
        <Card className="scroll-up" variant="outlined">
            <IconButton style={{zIndex:5}} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                <ArrowUpwardIcon fontSize="large" />
            </IconButton>
        </Card>
    )
}

export default Scrollup