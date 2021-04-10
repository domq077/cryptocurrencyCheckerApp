import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';

const CurrencyList = () => {
    const { error, isLoaded, currency } = useContext(CurrencyContext);
    const [value, setValue] = useState('');

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className="currency-list">
                <div>
                <input type="text"
                    className="currency-list__searchField"
                    onChange={e => setValue(e.target.value)} 
                    placeholder="Cryptocurrency name..."
                />
                </div>
                <ul>
                    {currency.filter((curr) => {
                        if (value == '') {
                            return curr;
                        } else if (curr.name.toLowerCase().includes(value.toLowerCase())) {
                            return curr;
                        }
                    })
                    .map(curr => {
                        return (
                            <li className="currency-list__item" key={curr.id}>
                                <img className="currency-list__img"
                                    src={curr.image} alt={curr.name}/>
                                <div>{curr.symbol.toUpperCase()}</div>
                                <div>{curr.name}</div>
                                <div>{curr.current_price}$</div>
                                <Link to={`/details/${curr.id}`}>
                                    <button className="currency-list__btn">Details</button>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
      }
}
 
export default CurrencyList;