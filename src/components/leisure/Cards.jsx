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
                    <Typography variant="h5" gutterBottom>Culinary Delights</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '20px 0'}}>
                        <CardMedia component="img" image="images/leisure/culinary.jpg" alt="travel" /> 
                    </Card>
                    <Typography>
                        Preparing or tasting the flavors of different cultures and 
                        indulging in culinary experiences awaken various senses. 
                        Join me as I explore different cuisines and share the essence of each culture through its food.
                    </Typography>
                    <AppButton variant="contained" href="/#/leisure/culinary" style={{margin: '20px 0'}}>Read More</AppButton>
                </div>
            </div>
        :
            <div style={{ justifyContent: 'center', margin: '20px auto', width:'45%', minWidth:'280px'}}>
                <div style={{width: '100%', margin: '20px 0'}}>
                    <Typography variant="h5" gutterBottom>Culinary Delights</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '10px 0'}}>
                        <CardMedia component="img" image="images/leisure/culinary.jpg" alt="travel" /> 
                    </Card>
                    <Typography>
                        Preparing or tasting the flavors of different cultures and 
                        indulging in culinary experiences awaken various senses. 
                        Join me as I explore different cuisines and share the essence of each culture through its food.
                    </Typography>
                    <AppButton variant="contained" href="/#/leisure/culinary" style={{margin: '10px 0'}}>Read More</AppButton>
                </div>
            </div>
        }
        </div>    
    )
}

export default Cards