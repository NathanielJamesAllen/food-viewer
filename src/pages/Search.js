//import { Typography, Grid, Button, Card, CardContent } from '@mui/material';
import React from 'react';
//import {Link} from 'react-router-dom'
import SearchResults from '../components/searchResults';


const Search = ({searchResults, setRestaurantId}) => {
    //const people = ["Search", "James", "Thomas", "Isaiah", "Joshua", "Nanette"]
    const cheapfood = searchResults.filter((value) =>  value.price === "$")
    const medfood = searchResults.filter((value) =>  value.price === "$$")
    const expfood = searchResults.filter((value) =>  value.price === "$$$")
    return (
        <>
        <SearchResults food={cheapfood} title={"Cheap Food"} setRestaurantId={setRestaurantId}/>
        <SearchResults food={medfood} title={"Medium Food"} setRestaurantId={setRestaurantId}/>
        <SearchResults food={expfood} title={"Expensive Food"} setRestaurantId={setRestaurantId}/>
       
            

        </>

    )
}



export default Search