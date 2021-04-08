import React, { useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';

const CurrencyList = () => {
    const { currency } = useContext(CurrencyContext);

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
 
export default CurrencyList;