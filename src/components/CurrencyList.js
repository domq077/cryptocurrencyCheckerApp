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
                            <li key={curr.id}>
                                <img src={curr.image} alt={curr.name}/>
                                <div>{curr.symbol}</div>
                                <div>{curr.name}</div>
                                <div>{curr.current_price}$</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
      }
}
 
export default CurrencyList;