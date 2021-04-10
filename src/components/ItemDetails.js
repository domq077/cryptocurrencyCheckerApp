import React, { useState, useEffect } from 'react';

const ItemDeatils = ({ match }) => {
    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState([]);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&developer_data=false&sparkline=true`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item)
    };

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.symbol}</p>
        </div>
    );
}
 
export default ItemDeatils;