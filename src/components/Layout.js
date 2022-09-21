import { Typography, Box, AppBar, Toolbar, IconButton, Button} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import TestGrid from '../pages/TestGrid'
import Search from '../pages/Search'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const Layout = () => {
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
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>



        <Typography>I'm the Layout</Typography>
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
