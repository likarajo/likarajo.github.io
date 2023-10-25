import { Card, Typography } from "@mui/material"

function About() {
    return (
        <Card variant="outlined" style={{ padding: '30px 20px', margin: '0 auto', width:'40%', minWidth:'290px', maxWidth:'700px'}}>
            <Typography>
                I'm a software developer by profession, and I love traveling whenever I can. 
                Whether it's learning about technology, exploring cities, hiking through beautiful landscapes, trying various cuisines, 
                or immersing myself in different cultures, I like documenting my experiences to share my inspiration and journey. 
                Through that, I want to help others find value in their own journeys.
            </Typography>
        </Card>
    )
}

export default About