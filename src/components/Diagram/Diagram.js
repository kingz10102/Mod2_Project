import React, { useState, useEffect} from 'react';
import {collectDailyData} from '../../apicalls';
import { Pie } from 'react-chartjs-2'
import styles from './Diagram.module.css';


let Diagram = ({country, data:{confirmed, deaths, recovered}}) => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await collectDailyData());
        }
        // console.log(dailyData);   ----> used to debug
        fetchAPI();
    }, []);   /*the empty array provides a one time shown in close basically a stop point */
// function for chart diagram

const pieChar = (
  confirmed 
    ? (
        <Pie
            data={{
                labels: ['Cases', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'Person(s)',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)', 
                        'rgba(0, 255, 0, 0.5)', 
                        'rgba(255, 0, 0, 0.5)'],
                        data:[confirmed.value, recovered.value, deaths.value]
                
                }]
            }}
            options={{
                legend: { display: false},
                title: { display: true, text: `Current state in ${country}`},
            }}
        />
    ) : null
);

return(
    <div className={styles.container}>
      {pieChar} 
    </div>   
    )
}

export default Diagram;