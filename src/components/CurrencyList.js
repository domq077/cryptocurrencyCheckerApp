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
            <div className="currency-list">
                <ul>
                    {currency.map(curr => {
                        return (
                            <li key={curr.id}>
                                <img className="currency-list__img"
                                    src={curr.image} alt={curr.name}/>
                                <div>{curr.symbol.toUpperCase()}</div>
                                <div>{curr.name}</div>
                                <div>{curr.current_price}$</div>
                                <button>Details</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
      }
}
 
export default CurrencyList;