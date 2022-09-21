import { Typography, Box, AppBar, Toolbar, IconButton, Button, TextField, InputAdornment} from '@mui/material';
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import TestGrid from '../pages/TestGrid'
import Search from '../pages/Search'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';



const Layout = () => {
    const [searchText, setSearchText] = useState("I'm here. Good")
    return (
        <>
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
                    onChange={
                        (e) => {
                            setSearchText(e.target.value)

                        }
                    } 
                    label="Search" 
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
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>



        <Typography variant="h2">{searchText}</Typography>
        <Routes>
            <Route exact path="/" element={<TestGrid/>}/>
            <Route exact path="/testgrid" element={<TestGrid/>}/>
            <Route exact path="/search" element={<Search/>}/>
        </Routes>
        
        </BrowserRouter>
        </>

    )
}



export default Layout
