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
            <div className="item">
                <div>
                    <img src={item.image.large}/>
                </div>
                <div>
                    <h1><span className="item__details">Name:</span> {item.name}</h1>
                    <p><span className="item__details">Symbol:</span> {item.symbol}</p>
                    <p>Genesis date: {item.genesis_date}</p>
                </div>
                <div>
                    <p><span className="item__details">Current price:</span> {item.market_data.current_price.usd}$</p>
                    <p><span className="item__details">Price change in last 24h:</span> {item.market_data.price_change_24h}$</p>
                    <p><span className="item__details">High value in 24h:</span> {item.market_data.high_24h.usd}$</p>
                    <p><span className="item__details">Low value in 24h:</span> {item.market_data.low_24h.usd}$</p>
                    <button onClick={() => history.goBack()}>Back to list</button>
                </div>
            </div>
        );
      }
}
 
export default ItemDeatils;