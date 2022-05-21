function examp5(input) {
    let budget = Number(input[0]);
    let sumProducts = 0;
    let index = 1;
    let command = input[index];
    let productCounter = 0;
    while (command !== 'Stop') {
        let productName = input[index++];
        let productPrice = Number(input[index++]);
        productCounter++;
        if (productCounter % 3 === 0) {
            productPrice = productPrice / 2;

        }
        sumProducts += productPrice
        budget = budget - productPrice;

        if (budget < 0) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }
     
        command=input[index];

    }
    if(command === 'Stop'){
    console.log(`You bought ${productCounter} products for ${sumProducts.toFixed(2)} leva.`);
    }
}
examp5(['153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglasses',
    '30',
    'Stop'
])