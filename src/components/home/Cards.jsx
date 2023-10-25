import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Card, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Cards() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const tabletSize = useMediaQuery({query: '(min-width: 768px)'});
    const tabletSmallSize = useMediaQuery({query: '(min-width: 481px)'});
    const phoneSize = useMediaQuery({query: '(max-width: 480px)'});
    
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    const [isTablet, setIsTablet] = useState(tabletSize);
    const [isTabletSmall, setIsTabletSmall] = useState(tabletSmallSize);
    const [isPhone, setIsPhone] = useState(phoneSize);
    window.addEventListener('resize', () => {
        setOpen(false);
        setIsDesktop(desktopSize);
        setIsTablet(tabletSize);
        setIsTabletSmall(tabletSmallSize);
        setIsPhone(phoneSize);
    });

    return (
        <>
        {isDesktop ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', width:'66%', gap: '3%', minWidth:'400px', marginTop:'20px'}}>
                <Card style={{width: '33%', aspectRatio: '3/4'}}>
                    <a href="/#/travel">
                        <div style={{position: 'relative'}}>
                            <CardMedia component="img" image="images/home/travel.jpg" alt="travel" style={{position: 'relative'}} />
                            <div style={{position: "absolute", color: "white", bottom: 0, left: 10}}>
                                <Typography variant="h4" gutterBottom>Travel</Typography>
                            </div>
                        </div>
                    </a>
                </Card>
                <Card style={{width: '33%', aspectRatio: '3/4'}}>
                    <a href="/#/leisure">
                        <div style={{position: 'relative'}}>
                            <CardMedia component="img" image="images/home/leisure.jpg" alt="leisure" style={{position: 'relative'}} />
                            <div style={{position: "absolute", color: "white", bottom: 0, left: 10}}>
                                <Typography variant="h4" gutterBottom>Leisure</Typography>
                            </div>
                        </div>
                    </a>
                </Card>
                <Card style={{width: '33%', aspectRatio: '3/4'}}>
                    <a href="/#/profession">
                        <div style={{position: 'relative'}}>
                            <CardMedia component="img" image="images/home/profession.jpg" alt="profession" style={{position: 'relative'}} />
                            <div style={{position: "absolute", color: "white", bottom: 0, left: 10}}>
                                <Typography variant="h4" gutterBottom>Profession</Typography>
                            </div>
                        </div>
                    </a>
                </Card>
            </div>
        :
            <div style={{ justifyContent: 'center', alignItems: 'center', margin: '20px auto', width:'40%', minWidth:'300px', maxWidth:'700px', position:'relative'}}>
                <Card style={{width: '100%', aspectRatio: '4/3', margin: '20px 0'}} href={"/#/travel"}>
                    <a href="/#/travel">
                        <div style={{position: 'relative'}}>
                            <CardMedia component="img" image="images/home/travel.jpg" alt="travel" style={{position: 'relative'}} />
                            <div style={{position: "absolute", color: "white", top: "45%", left: 10}}>
                                <Typography variant="h4" gutterBottom>Travel</Typography>
                            </div>
                        </div>
                    </a>
                </Card>
                <Card style={{width: '100%', aspectRatio: '4/3', margin: '20px 0'}}>
                    <a href="/#/leisure">
                        <div style={{position: 'relative'}}>
                            <CardMedia component="img" image="images/home/leisure.jpg" alt="leisure" style={{position: 'relative'}} />
                            <div style={{position: "absolute", color: "white", top: "45%", left: 10}}>
                                <Typography variant="h4" gutterBottom>Leisure</Typography>
                            </div>
                        </div>
                    </a>
                </Card>
                <Card style={{width: '100%', aspectRatio: '4/3', margin: '20px 0'}}>
                    <a href="/#/profession">
                        <div style={{position: 'relative'}}>
                            <CardMedia component="img" image="images/home/profession.jpg" alt="profession" style={{position: 'relative'}} />
                            <div style={{position: "absolute", color: "white", top: "45%", left: 10}}>
                                <Typography variant="h4" gutterBottom>Profession</Typography>
                            </div>
                        </div>
                    </a>
                </Card>
                <br/>
                <Card variant="outlined" style={{position:'fixed', right:'28px', bottom:'55px'}}>
                    <IconButton style={{zIndex:5}} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                        <ArrowUpwardIcon fontSize="large" />
                    </IconButton>
                </Card>
            </div>
        }
        </>    
    )
}

export default Cards