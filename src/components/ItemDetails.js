import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ItemDeatils = ({ match }) => {
    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState([]);
    const history = useHistory();

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&developer_data=false&sparkline=true`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item)
    };

    return (
        <div>
            <h1>Name: {item.name}</h1>
            <p>Symbol: {item.symbol}</p>
            <p>Genesis date: {item.genesis_date}</p>
            <button onClick={() => history.goBack()}>Back to list</button>
        </div>
    );
}
 
export default ItemDeatils;