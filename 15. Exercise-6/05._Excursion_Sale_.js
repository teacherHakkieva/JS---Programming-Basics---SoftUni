function examp5(input) {
    let countSea = Number(input[0]);
    let countMountain = Number(input[1]);
    let index = 2;
    let command = input[index];
    let sum = 0
    while (command !== 'Stop') {
        if (command == 'sea') {
            if (countSea > 0) {
                countSea--;
                sum += 680;
            }
        } if (command == 'mountain') {
            if (countMountain > 0) {
                countMountain--;
                sum += 499;
            }
        }
        if (countSea === 0 && countMountain === 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }
        index++;
        command = input[index];

    }
    console.log(`Profit: ${sum} leva.`);
}
examp5(['2', '2',
    'sea',
    'mountain',
    'sea',
    'sea',
    'mountain'
])
examp5(['6', '3',
    'sea',
    'mountain',
    'mountain',
    'mountain',
    'sea',
    'Stop'
])