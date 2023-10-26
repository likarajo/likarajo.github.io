import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Card, CardMedia, Typography } from "@mui/material";
import AppButton from "../common/AppButton";

function Cards() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const tabletSize = useMediaQuery({query: '(min-width: 768px)'});
    const tabletSmallSize = useMediaQuery({query: '(min-width: 481px)'});
    const phoneSize = useMediaQuery({query: '(max-width: 480px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    const [isTablet, setIsTablet] = useState(tabletSize);
    const [isTabletSmall, setIsTabletSmall] = useState(tabletSmallSize);
    const [isPhone, setIsPhone] = useState(phoneSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
        setIsTablet(tabletSize);
        setIsTabletSmall(tabletSmallSize);
        setIsPhone(phoneSize);
    });

    return (
        <div style={{paddingTop: isDesktop?'100px':'20px'}}>
        {isDesktop ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', width:'70%', gap: '10%', minWidth:'600px'}}>
                <div style={{width: '45%'}}>
                    <Typography variant="h5" gutterBottom>Exploring Cities</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '20px 0'}}>
                        <CardMedia component="img" image="images/travel/cities.jpg" alt="cities" /> 
                    </Card>
                    <Typography>
                        Through discovering the hidden gems, experiencing  the local culture, 
                        and immersing in the sights and sounds of each city, 
                        let me take you on a journey to find the best spots that create unforgettable memories.
                    </Typography>
                    <AppButton variant="contained" href="/#/travel/cities" style={{margin: '20px 0'}}>Read More</AppButton>
                </div>
                <div style={{width: '45%'}}>
                    <Typography variant="h5" gutterBottom>Unforgettable Nature</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '20px 0'}}>
                        <CardMedia component="img" image="images/travel/nature.jpg" alt="nature" /> 
                    </Card>
                    <Typography>
                        From breathtaking mountains to serene beaches, 
                        join me as I capture nature's beauty in various parts of the world. 
                        Experience the awe-inspiring landscapes and let them inspire your own adventures.
                    </Typography>
                    <AppButton variant="contained" href="/#/travel/nature" style={{margin: '20px 0'}}>Read More</AppButton>
                </div>
            </div>
        :
            <div style={{ justifyContent: 'center', margin: '20px auto', width:'45%', minWidth:'280px'}}>
                <div style={{width: '100%', margin: '20px 0'}}>
                    <Typography variant="h5" gutterBottom>Exploring Cities</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '10px 0'}}>
                        <CardMedia component="img" image="images/travel/cities.jpg" alt="cities" /> 
                    </Card>
                    <Typography>
                        Through discovering the hidden gems, experiencing  the local culture, 
                        and immersing in the sights and sounds of each city, 
                        let me take you on a journey to find the best spots that create unforgettable memories.
                    </Typography>
                    <AppButton variant="contained" href="/#/travel/cities" style={{margin: '10px 0'}}>Read More</AppButton>
                </div>
                <div style={{width: '100%', margin: '20px 0'}}>
                    <Typography variant="h5" gutterBottom>Unforgettable Nature</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '10px 0'}}>
                        <CardMedia component="img" image="images/travel/nature.jpg" alt="nature" /> 
                    </Card>
                    <Typography>
                        From breathtaking mountains to serene beaches, 
                        join me as I capture nature's beauty in various parts of the world. 
                        Experience the awe-inspiring landscapes and let them inspire your own adventures.
                    </Typography>
                    <AppButton variant="contained" href="/#/travel/nature" style={{margin: '10px 0'}}>Read More</AppButton>
                </div>
            </div>
        }
        </div>    
    )
}

export default Cards