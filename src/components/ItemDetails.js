import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Chart from './Chart';
import ChartData from '../logic/ChartData';
import Loader from './Loader';

const ItemDeatils = ({ match }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({
        market_data: {
            sparkline_7d: {
                price: false
            }
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
                <div className="item__infos">
                    <div>
                        <img className="item__img" src={item?.image?.large}/>
                        <p className="item__info"><span className="item__details">Name:</span> {item.name}</p>
                    </div>
                    <div>
                        <p className="item__info"><span className="item__details">Symbol:</span> {item?.symbol?.toUpperCase()}</p>
                        <p className="item__info"><span className="item__details">Genesis date:</span> {item.genesis_date}</p>
                        <p className="item__info"><span className="item__details">Current price:</span> {item?.market_data?.current_price?.usd}$</p>
                        <p className="item__info"><span className="item__details">Price change in last 24h:</span> {item?.market_data?.price_change_24h}$</p>
                        <p className="item__info"><span className="item__details">High value in 24h:</span> {item?.market_data?.high_24h?.usd}$</p>
                        <p className="item__info"><span className="item__details">Low value in 24h:</span> {item?.market_data?.low_24h?.usd}$</p>
                    </div>
                </div>
                <div className="item__chart">
                    <Chart priceHistoryObj={ChartData(item.market_data.sparkline_7d.price)} />
                </div>
                <button
                        className="btn"
                        onClick={() => history.goBack()}
                    >
                        Back to list
                </button>
            </div>
        );
    }
}
 
export default ItemDeatils;