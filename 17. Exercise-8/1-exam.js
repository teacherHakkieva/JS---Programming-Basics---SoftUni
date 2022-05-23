function examp1(input) {
    let priceVideoCart = Number(input[0]);
    let priceAdapter =Number(input[1]);
    let powerConsumption = Number(input[2]);
    let profitDay =Number(input[3]);
    let allParts=1000;

    let sumCart = priceVideoCart*13;
    let sumAdapter = priceAdapter*13;
    let moneySpend = sumCart+sumAdapter+allParts;
    console.log(`${moneySpend}`);
    let profitOfCartDay = profitDay-powerConsumption;
    let allProfit = 13*profitOfCartDay;
    let day=moneySpend/allProfit;
    console.log(`${Math.ceil(day)}`);


}
examp1(['800',
    '10',
    '0.32',
    '6.4'   ])