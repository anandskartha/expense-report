import React, {useEffect, useState} from 'react';
import axios from 'axios';

function CurrencyExchangeRate(props) {
    let [currency, setCurrency] = useState([]);
    useEffect(() => {
        axios.get('https://api.exchangeratesapi.io/latest?base=CAD').then((response) => {
            setCurrency(response.data.rates);
        });
    }, []);
    
    return (
        <select onChange={(e) => props.currencyChanged(e.target.value)}>
            {Object.entries(currency).map(([key, value]) => {
                return (<option key={key} value={value}>{key}</option>);
            })}
        </select>
    )
}

export default CurrencyExchangeRate;
