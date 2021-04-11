import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ItemDeatils = ({ match }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({
        image: false,
        market_data: false
    });
    const history = useHistory();

    // useEffect(() => {
    //     fetchItem();
    // }, [])

    // const fetchItem = async () => {
    //     const fetchItem = await fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&developer_data=false&sparkline=true`);
    //     const item = await fetchItem.json();
    //     setItem(item);
    //     console.log(item)
    // };

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&developer_data=false&sparkline=true`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                    console.log(item)
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
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <h1>Name: {item.name}</h1>
                <img src={item.image.large}/>
                <p>Symbol: {item.symbol}</p>
                <p>Genesis date: {item.genesis_date}</p>
                <p>Price change in 24h: {item.market_data.price_change_24h}</p>
                <button onClick={() => history.goBack()}>Back to list</button>
            </div>
        );
      }
}
 
export default ItemDeatils;