import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './NationSelector.module.css';
import { collectCountries } from '../../apicalls';

let NationSelector = ({handleCountryChange}) => {
    const [collectedCountries, setCollectedCountries] = useState([]);
// providing callbacks with the use of useEffect hooks 
    useEffect(()=> {
        const fetchAPI = async() => {
            setCollectedCountries(await collectCountries());
        }
        fetchAPI();
    }, [setCollectedCountries]);

    console.log(collectedCountries)
    return(
        <FormControl className={styles.dropbox}>
            <NativeSelect deafultValue = "" onChange={(event)=> handleCountryChange(event.target.value)}>
                {/* will feth 110 nations from api */}
                <option value='worldwide' className={styles.dropbox}>
                    WorldWide
                </option>
                {/* populated dropdownbox with 180+ countries */}
                {collectedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
       
    )
}

export default NationSelector;