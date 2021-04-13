const ChartData = (priceHistory) => {
    const priceHistoryObj = [];

    for(let i = 0; i <= 168; i++) {
                    let temp = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000) + (i*3600*1000)).toLocaleString();
                    priceHistoryObj.push({name: temp, price: priceHistory[i]});
                }
    
    return priceHistoryObj

}
 
export default ChartData;