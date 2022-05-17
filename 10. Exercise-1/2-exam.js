function exam2(input) {
    let priceBachParty = Number(input[0]);
    let countLoveMassages = Number(input[1]);
    let countWaxRose = Number(input[2]);
    let countKaychains = Number(input[3]);
    let countCartoons = Number(input[4]);
    let countLucky = Number(input[5]);

    let sum = countLoveMassages * 0.60 + countWaxRose * 7.20 + countKaychains * 3.60 + countCartoons * 18.20 + countLucky * 22;
    let countArticul = countLoveMassages + countWaxRose + countKaychains + countCartoons + countLucky;
    if (countArticul >= 25) {
        let sumMinus = sum * .35;
        sum = sum - sumMinus;
    }
    let priceHosting = sum * 0.10;
    let totalPrice = Math.abs(sum - priceHosting - priceBachParty);

    if (totalPrice >= priceBachParty) {

        console.log(`Yes! ${totalPrice.toFixed(2)} lv left.`);
    } else {

        console.log(`Not enough money! ${totalPrice.toFixed(2)} lv needed.`);
    }
}
exam2(['1000',
    '20',
    '25',
    '30',
    '50',
    '10']);