import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Search from '../pages/Search'
import Detail from '../pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import yelp from '../api/yelp'


const Layout = () => {
    const [searchText, setSearchText] = useState("(Enter both the zip code and cuisine )")
    const [zipText, setZipText] = useState("23322")
    const [results, setResults] = useState([])
    const [restaurantId, setRestaurantId] = useState(['nothing to see here'])
    //const [coords, setCoords] = useState([37.7384247, -79.3465447])
    //let mySearchTest = "I'm here."

    function setCurrentPosition(position) {
        console.log(position.coords.latitude, position.coords.longitude)
        //setCoords([position.coords.latitude, position.coords.longitude])
    }

    function positionError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
            default:
                console.error("An unknown error occurred.");
                break;
        }
    }

    const searchApi = async (zip, term) => {
        try {
            const response = await yelp(zip, term)
            console.log(response.data.businesses)
            setResults(response.data.businesses)
            const response2 = await fetch(`/api/yelp?location=${zip}&term=${term}`)
            //const response2 = await fetch("/api/yelp");
            const data = await response2.json()
            console.log("hi", data)
            setResults(data.businesses)
        } 
        catch {
            console.log('I am in the caught error')
        }

        //const response3 = await fetch(`api/yelpBusinessDetail`)
        //const data3 = await response3.json()
        //console.log("hello", data3)
        //setResults(data3)
        //response.data.businesses
    }

    const doSearch = (e) => {
        setSearchText(e.target.value)
        searchApi(zipText, e.target.value)
    }

    const zipSearch = (zip) => {
        setZipText(zip.target.value);
        searchApi(zip.target.value, searchText);
    };

    useEffect(() => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError, {
                enableHighAccuracy: false,
                timeout: 15000,
                maximumAge: 0
            });
        }
        //searchApi("23322", "Mexican Food")
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            <Paper sx={{ backgroundColor: "#eeeeee", pb: 2 }}>
                <BrowserRouter>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <TextField
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                doSearch(e)
                                            }


                                        }
                                        }
                                        label="zip code"
                                        variant='outlined'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )

                                        }}

                                    />
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <TextField onKeyPress={(zip) => {
                                        if (zip.key === "Enter") {
                                            zipSearch(zip);
                                        }
                                    }}
                                        label="cuisine"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>

                    <Typography variant="h6">Your search results for: {searchText} </Typography>
                    <Routes>
                        <Route exact path="/" element={<Search searchResults={results} setRestaurantId={setRestaurantId} />} />
                        <Route exact path="/search" element={<Search searchResults={results} setRestaurantId={setRestaurantId} />} />
                        <Route exact path="detail" element={<Detail restaurantId={restaurantId} />} />
                    </Routes>

                </BrowserRouter>
            </Paper>
        </>

    )
}


export default Layout
