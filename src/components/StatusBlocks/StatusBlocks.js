import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';
// import './App.css';

let StatusBlocks = (props) => {
    console.log(props)
    return(
        <div className='cards-container'>
            {/* providing material UI to style statusblocks */}
            <Grid container spacing={4} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography>Cases</Typography>  
                        <Typography>LIVE STAT</Typography>  
                        <Typography>LIVE DATA</Typography>
                        <Typography>Number of live cases of COVID19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatusBlocks