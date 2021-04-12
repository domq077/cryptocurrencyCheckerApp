import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
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
    const date = []    
    const getDate = () => {
        for(let i = 1; i <= 169; i++) {
            let temp = new Date(Date.now() - ( 24 * 60 * 60 * 1000 + i*3600*1000)).toLocaleString();
            date.push(temp)
        } 
    }

    getDate()

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&developer_data=false&sparkline=true`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                    console.log(date);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    // const data = [{name: 'Page A', uv: [200, 300, 400]}];
    // const renderLineChart = (
    //     <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    //         <Line type="monotone" dataKey="uv" stroke="#000" />
    //         <CartesianGrid stroke="#000" strokeDasharray="5 5" />
    //         <XAxis dataKey="name" />
    //         <YAxis />
    //         <Tooltip />
    //     </LineChart>
    // );

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <Loader />;
      } else {
        return (
            <div className="item">
                <div>
                    <img className="item__img" src={item.image.large}/>
                    <p className="item__info"><span className="item__details">Name:</span> {item.name}</p>
                    <p className="item__info"><span className="item__details">Symbol:</span> {item.symbol?.toUpperCase()}</p>
                    <p className="item__info"><span className="item__details">Genesis date:</span> {item.genesis_date}</p>
                </div>
                <div>
                    <p className="item__info"><span className="item__details">Current price:</span> {item.market_data.current_price.usd}$</p>
                    <p className="item__info"><span className="item__details">Price change in last 24h:</span> {item.market_data.price_change_24h}$</p>
                    <p className="item__info"><span className="item__details">High value in 24h:</span> {item.market_data.high_24h.usd}$</p>
                    <p className="item__info"><span className="item__details">Low value in 24h:</span> {item.market_data.low_24h.usd}$</p>
                    <button
                        className="btn btn--large"
                        onClick={() => history.goBack()}
                    >
                        Back to list
                    </button>
                </div>
                <div>
                    {/* {renderLineChart} */}
                </div>
            </div>
        );
      }
}
 
export default ItemDeatils;