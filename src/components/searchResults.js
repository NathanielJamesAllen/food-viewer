import React from 'react'
import {Grid, Typography, Card, CardContent, CardActionArea, CardMedia, CardActions, Button, Rating, TextField} from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import NetworkWifi1BarIcon from '@mui/icons-material/NetworkWifi1Bar';
import NetworkWifi2BarIcon from '@mui/icons-material/NetworkWifi2Bar';
import NetworkWifi3BarIcon from '@mui/icons-material/NetworkWifi3Bar';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import { useNavigate } from 'react-router-dom';


const searchResults = ({food, title, setRestaurantId}) => {
    let navigate = useNavigate();


    const goToDetails = (restaurantId) => {
        setRestaurantId(restaurantId)
        navigate("/detail");
    }

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
                                                    
                                                    <Rating name="half-rating-read" defaultValue={value.rating} precision={0.5}  readOnly /> 
                                                   
                                                        

                                                </Typography>
                                                <Typography color="gray" variant="h8">
                                                    Phone   
                                                </Typography>
                                                <Typography>
                                                    {value.phone} <br/>
                                                   <a href={value.url}>Website</a>
                                                   <br/>
                                                   <TextField>
                                                        if ({value.review_count < 100}){
                                                            <NetworkWifi1BarIcon value = {value.review_count}/>
                                                            
                                                        }
                                                        elif ({value.review_count < 250}){
                                                            <NetworkWifi2BarIcon value = {value.review_count}/>

                                                        }
                                                        elif ({value.review_count < 500}){
                                                            <NetworkWifi3BarIcon value = {value.review_count}/>

                                                        }
                                                        else ({value.review_count >= 500}){
                                                            <SignalWifi4BarIcon value = {value.review_count}/>

                                                        }
                                                   </TextField>
                                                   <TextField>
                                                        if({value.transactions === ['delivery']}){
                                                            <DeliveryDiningIcon  value = {value.transactions}/>

                                                        }
                                                        elif({value.transactions === ['pickup']}){
                                                            <TakeoutDiningIcon value =  {value.transactions}/>

                                                        }
                                                        else({value.transactions === ['pickup', 'delivery']}){
                                                            <>
                                                            <TakeoutDiningIcon value =  {value.transactions}/>
                                                            <DeliveryDiningIcon  value = {value.transactions}/>
                                                            </>
                                                            
                                                        }
                                                         
                                                        
                                                        <br/>
                                                        <u>{value.transactions} </u> only

                                                   </TextField>
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                                <CardActions>
                                                    <Button onClick={(e) => goToDetails(value.id)} size = "small">Details</Button>
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