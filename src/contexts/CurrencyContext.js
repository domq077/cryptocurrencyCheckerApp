import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

const CurrencyContextProvider = (props) => {
    const [currency, setCurrency] = useState([
        {name: 'bitcoin', value: '50 000$', id: 1},
        {name: 'ethereum', value: '30 000$', id: 2}
    ]);

    return (
        <CurrencyContext.Provider value={{ currency }}>
            {props.children}
        </CurrencyContext.Provider>
    );
}
 
export default CurrencyContextProvider;