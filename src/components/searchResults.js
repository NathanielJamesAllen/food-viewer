import React from 'react'
import {Grid, Typography, Card, CardContent, CardActionArea, CardMedia, CardActions, Button} from '@mui/material'

const searchResults = ({food, title}) => {
    return(
        <>

        {
           (food.length > 0) ? ( 
           <Typography variant="h3">{title}</Typography>
           ): (
            <></>
           )
        }

         <Grid container spacing={2} sx={{pt: 2}}>
                    {
                        food.map(
                            (value, index) => {
                                return (
                                    <Grid key={index} item xs={6} md={2} >
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                component="img"
                                                height="140"
                                                image={value.image_url}
                                                alt="green iguana"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {value.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {value.location.address1} <br/>
                                                    {value.location.city}, {value.location.state}
                                                </Typography>
                                                <Typography>
                                                    {value.rating}/5 Stars ({value.review_count}) 
                                                </Typography>
                                                <Typography color="gray" variant="h8">
                                                    Phone   
                                                </Typography>
                                                <Typography>
                                                    {value.phone} <br/>
                                                   <a href={value.url}>Website</a>
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                                <CardActions>
                                                    <Button size = "small">Share</Button>
                                                </CardActions>
                                        </Card>
                                    </Grid>
                                )

                            }

                        )
                    }


            </Grid>
        
        
        </>
    )

}

export default searchResults