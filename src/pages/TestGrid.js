import { Typography, Grid, Button, Card, CardContent, Paper } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'


const TestGrid = () => {
    const people = ["Kenny", "James", "Thomas", "Isaiah", "Joshua", "Nanette"]
    return (
        <>
        <Paper>
        <Grid container spacing={2}>


            {
                people.map(
                    (value) => {
                        return (
                            <Grid item xs={6} md={2} >
                                <Card>
                                    <CardContent>
                                        Hi
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                    }

                )
            }


            
            

        </Grid>
        </Paper>
        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to="/search" variant="outlined">Search</Button>
        </>

    )
}



export default TestGrid