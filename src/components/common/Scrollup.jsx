import { Card, IconButton } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState } from "react";

function Scrollup() {

    const [show, setShow] = useState(false)

    window.addEventListener('scroll', handleScroll);

    function handleScroll(){
        let scrollPosition = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollPosition > 200)
            setShow(true)
        else
            setShow(false)
    }

    return (
        show &&
        <Card variant="outlined" style={{position:'fixed', right:'28px', bottom:'55px'}}>
            <IconButton style={{zIndex:5}} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                <ArrowUpwardIcon fontSize="large" />
            </IconButton>
        </Card>
    )
}

export default Scrollup
