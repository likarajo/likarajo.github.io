import { Card, CardMedia, Typography } from "@mui/material";
import AppButton from "../common/AppButton";

function Cards() {
    return (
        <div className="feature-split">
            <article>
                <Typography variant="h5" component="h2" gutterBottom>Exploring Cities</Typography>
                <Card className="feature-card">
                    <CardMedia component="img" image="images/travel/cities.jpg" alt="City streets and landmarks" />
                </Card>
                <Typography>
                    Through discovering the hidden gems, experiencing the local culture,
                    and immersing in the sights and sounds of each city,
                    let me take you on a journey to find the best spots that create unforgettable memories.
                </Typography>
                <AppButton variant="contained" href="/travel/cities/">Read More</AppButton>
            </article>
            <article>
                <Typography variant="h5" component="h2" gutterBottom>Unforgettable Nature</Typography>
                <Card className="feature-card">
                    <CardMedia component="img" image="images/travel/nature.jpg" alt="Mountains and open landscape" />
                </Card>
                <Typography>
                    From breathtaking mountains to serene beaches,
                    join me as I capture nature&apos;s beauty in various parts of the world.
                    Experience the awe-inspiring landscapes and let them inspire your own adventures.
                </Typography>
                <AppButton variant="contained" href="/travel/nature/">Read More</AppButton>
            </article>
        </div>
    )
}

export default Cards
