import { Typography, Grid, Button, Card, CardContent } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'


const Search = ({searchResults}) => {
    const people = ["Search", "James", "Thomas", "Isaiah", "Joshua", "Nanette"]
    return (
        <>
         <Grid container spacing={2} sx={{pt: 2}}>
                    {
                        searchResults.map(
                            (value) => {
                                return (
                                    <Grid item xs={6} md={2} >
                                        <Card>
                                            <CardContent>
                                                {value.name}
                                            </CardContent>
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



export default Search