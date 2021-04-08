import React, { useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';

const CurrencyList = () => {
    const { error, isLoaded, currency } = useContext(CurrencyContext);

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <ul>
                    {currency.map(curr => {
                        return (
                            <li>
                                <div>{curr.name}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
      }
}
 
export default CurrencyList;