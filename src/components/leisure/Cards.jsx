import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Card, CardMedia, Typography } from "@mui/material";
import AppButton from "../common/AppButton";

function Cards() {

    const desktopSize = useMediaQuery({query: '(min-width: 1025px)'});
    const [isDesktop, setIsDesktop] = useState(desktopSize);
    window.addEventListener('resize', () => {
        setIsDesktop(desktopSize);
    });

    return (
        <div style={{paddingTop: isDesktop?'50px':'20px'}}>
        {isDesktop ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', width:'70%', gap: '10%', minWidth:'600px'}}>
                <div style={{width: '45%'}}>
                    <Typography variant="h5" gutterBottom>Culinary Delights</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '20px 0'}}>
                        <CardMedia component="img" image="images/leisure/culinary.jpg" alt="culinary" /> 
                    </Card>
                    <Typography>
                        Preparing or tasting the flavors of different cultures and 
                        indulging in culinary experiences awaken various senses. 
                        Join me as I explore different cuisines and share the essence of each culture through its food.
                    </Typography>
                    <AppButton variant="contained" href="/#/leisure/culinary" style={{margin: '20px 0'}}>Read More</AppButton>
                </div>
                <div style={{width: '45%'}}>
                    <Typography variant="h5" gutterBottom>Blogs</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '20px 0'}}>
                        <CardMedia component="img" image="images/leisure/blogs.jpg" alt="blogs" /> 
                    </Card>
                    <Typography>
                        I like to express my ideas and thoughts that stem from my life experiences 
                        and expertise as I believe that it is a powerful tool for building a community 
                        and connecting with like-minded individuals who share similar interests.
                    </Typography>
                    <AppButton variant="contained" href="/#/leisure/blogs" style={{margin: '20px 0'}}>Read More</AppButton>
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
                <div style={{width: '100%', margin: '20px 0'}}>
                    <Typography variant="h5" gutterBottom>Blogs</Typography>
                    <Card style={{width: '100%', aspectRatio: '2/1', borderRadius: 10, margin: '10px 0'}}>
                        <CardMedia component="img" image="images/leisure/blogs.jpg" alt="travel" /> 
                    </Card>
                    <Typography>
                        I like to express my ideas and thoughts that stem from my life experiences 
                        and expertise as I believe that it is a powerful tool for building a community 
                        and connecting with like-minded individuals who share similar interests.
                    </Typography>
                    <AppButton variant="contained" href="https://likarajoblogs.wordpress.com/" target="_blank" style={{margin: '10px 0'}}>Read More</AppButton>
                </div>
            </div>
        }
        </div>    
    )
}

export default Cards