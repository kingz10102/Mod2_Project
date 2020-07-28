// Instead of App.js provide a folder and file for api call

import axios from 'axios'

let url =  'https://covid19.mathdro.id/api';

export let fetchData = async () => {
    try {          /*try and catch is like conditional in some sorts that does a trial and error */
        const { data } = await axios.get(url);   /*await--> pauses the function execution and resume after the data comes in */
        
        // using a variable recastData to pull the exact data needed in a object form
        const recastData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate

        }
        return recastData;   /*returns a data call*/
    } catch(err){
    
    }
}