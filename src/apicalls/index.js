// Instead of App.js provide a folder and file for api call

import axios from 'axios'

let url =  'https://covid19.mathdro.id/api';



export const fetchData = async (country) => {
   let modifiedUrl = url;

   if(country) {
       modifiedUrl = `${url}/countries/${country}`
   }
    try {          /*try and catch is like conditional in some sorts that does a trial and error */
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(modifiedUrl);   /*await--> pauses the function execution and resume after the data comes in */
        
    
    return { confirmed, recovered, deaths, lastUpdate };   /*returns a data call*/
    } catch(err){
    console.log(err)
    }
}
// using a export function to fetch the daily data from api, this is used the same as the above function in wich the entire api is fetched with try and catch conditionals. 
export const collectDailyData = async () => {
    try{
    const { data } = await axios.get(`${url}/daily`);
    
const modifiedData =data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
}));

return modifiedData
} catch (err){
console.log(err)
    
}

}

export const collectCountries = async () => {
    try {
        const { data: { countries }}= await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (err) {
        console.log(err)
    }
}
