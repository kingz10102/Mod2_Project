import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';

// import './App.css';

// instead of using props, it will be deconstructered inside function with collected data
let StatusBlocks = ({ data: {confirmed, deaths, recovered, lastUpdate } }) => {
   if (!confirmed){    /*if no data i confirmed */
    return "Feteching data..."   /*loading between update of block cards */
   }
    return(
        <div className='cards-container'>
            {/* providing material UI to style statusblocks */}
            <Grid container spacing={4} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        {/* Typography just like h or p tag, material ui tag */}
                        <Typography color="textPrimary" gutterBottom>Cases</Typography>  
                        <Typography variant="h4">LIVE DATA</Typography>  
                        <Typography color="textSecondary">LIVE DATE</Typography>
                        <Typography>Number of live cases of COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        {/* Typography just like h or p tag, material ui tag */}
                        <Typography color="textPrimary" gutterBottom>Deaths</Typography>  
                        <Typography variant="h4">LIVE STAT</Typography>  
                        <Typography color="textSecondary">LIVE DATE</Typography>
                        <Typography>Number of live deaths of COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        {/* Typography just like h or p tag, material ui tag */}
                        <Typography color="textPrimary" gutterBottom>Recoveries</Typography>  
                        <Typography variant="h4">LIVE STAT</Typography>  
                        <Typography color="textSecondary">LIVE DATE</Typography>
                        <Typography>Number of live recoveries of COVID19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatusBlocks