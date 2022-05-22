function examp5(input) {
    index = 0;
    command = input[index];
    let adultsCount = 0;
    let kidsCount = 0;
    let priceToys = 5;
    let pricePullover = 15;
    let allpriceToys=0;
    let allPricePullover=0;
    while (command !== 'Christmas') {
        command = Number(input[index]);
        if (command <= 16) {
            kidsCount++;
            allpriceToys+=priceToys;
        } else if (command > 16) {
            adultsCount++;
            allPricePullover+=pricePullover;
        }
        command=input[index++]
    }
    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${allpriceToys}`);
    console.log(`Money for sweaters: ${allPricePullover}`);


}
examp5(['16',
    '16',
    '16',
    '16',
    '16',
    'Christmas'
])