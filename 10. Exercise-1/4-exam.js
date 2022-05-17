function exam4(input) {
    let countComputer = Number(input[0]);
    let index = 1
    let num = Number(input[index]);
    let sale = 0;
    let allSale = 0;
    let countSale = 0;
    let countReting = 0;

    for (let index = 1; index <= countComputer; index++) {
        num = Number(input[index]);
        sale = 0;
        let edinitsi = num / 10;
        let desetitsi = Math.trunc(edinitsi)
        edinitsi = num - desetitsi * 10;
        if (edinitsi == 2) {
            sale = 0;
            countReting += 2;
        } else if (edinitsi == 3) {
            sale = desetitsi * (50 / 100);
            countSale++;
            countReting += 3;
        } else if (edinitsi == 4) {
            sale = desetitsi * (70 / 100);
            countSale++;
            countReting += 4;
        } else if (edinitsi == 5) {
            sale = desetitsi * (85 / 100);
            countSale++;
            countReting += 5;
        } else if (edinitsi == 6) {
            sale = desetitsi;
            countSale++;
            countReting += 6;
        }

        allSale = allSale + sale;

    }
    console.log(allSale.toFixed(2));

    console.log((countReting / countComputer).toFixed(2));
}
exam4(['5',
    '122',
    '156',
    '202',
    '214',
    '185',
]);