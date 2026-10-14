import { Card, CardMedia, Typography } from "@mui/material";
import AppButton from "../common/AppButton";

function Cards() {
    return (
        <div className="feature-split">
            <article>
                <Typography variant="h5" component="h2" gutterBottom>Culinary Delights</Typography>
                <Card className="feature-card">
                    <CardMedia component="img" image="images/leisure/culinary.jpg" alt="A prepared dish" />
                </Card>
                <Typography>
                    Preparing or tasting the flavors of different cultures and
                    indulging in culinary experiences awaken various senses.
                    Join me as I explore different cuisines and share the essence of each culture through its food.
                </Typography>
                <AppButton variant="contained" href="/leisure/culinary/">Read More</AppButton>
            </article>
            <article>
                <Typography variant="h5" component="h2" gutterBottom>Blogs</Typography>
                <Card className="feature-card">
                    <CardMedia component="img" image="images/leisure/blogs.jpg" alt="Notes and writing" />
                </Card>
                <Typography>
                    I like to express my ideas and thoughts that stem from my life experiences
                    and expertise as I believe that it is a powerful tool for building a community
                    and connecting with like-minded individuals who share similar interests.
                </Typography>
                <AppButton variant="contained" href="/leisure/blogs/">Read More</AppButton>
            </article>
        </div>
    )
}

export default Cards
