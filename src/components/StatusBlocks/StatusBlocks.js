import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';
import CountUp from 'react-countup'; /*react installmmeny for count up data*/
import styles from './StatusBlocks.module.css';
import cx from 'classnames'   
// import './App.css';

// instead of using props, it will be deconstructered inside function with collected data
let StatusBlocks = ({ data: {confirmed, deaths, recovered, lastUpdate } }) => {
   if (!confirmed){    /*if no data i confirmed */
    return "Feteching data..."   /*loading between update of block cards */
   }
    return(
        <div className={styles.wrapper}>
            {/* providing material UI to style statusblocks */}
            <Grid container spacing={4} justify="center">
                <Grid item component={Card} className={cx(styles.card, styles.cases)}>
                    <CardContent>
                        {/* Typography just like h or p tag, material ui tag */}
                        <Typography color="textPrimary" gutterBottom>Cases</Typography>  
                        <Typography variant="h4">
                            <CountUp
                            start={0}
                            end={confirmed.value}  /*current day stat */
                            separator= ","    /*separation of decimal points */
                            duration={3.5}  /*how long its takes countup # to be complete upon refresh */
                            /> 
                        </Typography>  
                        {/* To provide a real live date implemented new Date() object to the lastUpdate data from api  */}
                        <Typography 
                        color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography>Number of live cases of COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        {/* Typography just like h or p tag, material ui tag */}
                        <Typography color="textPrimary" gutterBottom>Deaths</Typography>  
                        <Typography variant="h4">
                        <CountUp
                            start={0}
                            end={deaths.value}  /*current day stat */
                            separator= ","    /*separation of decimal points */
                            duration={3.5}  /*how long its takes countup # to be complete upon refresh */
                            />
                        </Typography>  
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography>Number of live deaths of COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        {/* Typography just like h or p tag, material ui tag */}
                        <Typography color="textPrimary" gutterBottom>Recoveries</Typography>  
                        <Typography variant="h4">
                        <CountUp
                            start={0}
                            end={recovered.value}  /*current day stat */
                            separator= ","    /*separation of decimal points */
                            duration={3.5}  /*how long its takes countup # to be complete upon refresh */
                            />
                            </Typography>  
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography>Number of live recoveries of COVID19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatusBlocks