import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';

const ItemDeatils = ({ match }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({
        image: false,
        market_data: {
            current_price: false,
            high_24h: false,
            low_24h: false
        }
    });
    const history = useHistory();
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&developer_data=false&sparkline=true`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                    console.log(item);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <Loader />;
      } else {
        return (
            <div>
                <h1>Name: {item.name}</h1>
                <img src={item.image.large}/>
                <p>Symbol: {item.symbol}</p>
                <p>Genesis date: {item.genesis_date}</p>
                <p>Current price: {item.market_data.current_price.usd}$</p>
                <p>Price change in last 24h: {item.market_data.price_change_24h}$</p>
                <p>High value in 24h: {item.market_data.high_24h.usd}$</p>
                <p>Low value in 24h: {item.market_data.low_24h.usd}$</p>
                <button onClick={() => history.goBack()}>Back to list</button>
            </div>
        );
      }
}
 
export default ItemDeatils;