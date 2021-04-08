import React, { createContext, useEffect, useState } from 'react';

export const CurrencyContext = createContext();

const CurrencyContextProvider = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCurrency(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <CurrencyContext.Provider value={{ isLoaded, error, currency}}>
            {props.children}
        </CurrencyContext.Provider>
    );
}
 
export default CurrencyContextProvider;