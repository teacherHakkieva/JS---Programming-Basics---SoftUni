function examp5(input) {
    let buget = Number(input[0]);
    let index = 1;
    let product = input[index];
    index++;
    let priceProduct = Number(input[index]);
    index++;
    let countProduct = 0;
    let sum = 0;
    while (product !== 'Stop') {
        countProduct++;
        if (countProduct === 3) {
            priceProduct = priceProduct / 2;
        }
        if (buget < priceProduct) {
            console.log("You don't have enough money!");
            let left = Math.abs(priceProduct- buget);
            console.log(`You need ${left.toFixed(2)} leva!`);
            return;
        }              
        buget =buget - priceProduct;
        sum =sum+ priceProduct;
        
        product = input[index];
        index++;
        priceProduct = Number(input[index]);
        index++;
    }
    console.log(`You bought ${countProduct} products for ${sum.toFixed(2)} leva.`);
}
examp5([54,
    'Thermal underwear',
    24,
    'Sunscreen',
    45
])
