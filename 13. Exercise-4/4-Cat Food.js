function examp4(input) {
    let countCat = Number(input[0]);
    let index = 1;
    let command = Number(input[index]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let sumFood = 0;
    for (let i = 1; i <= countCat; i++) {
        if (command < 200) {
            group1++;
        } else if (command < 300) {
            group2++;
        } else if (command < 400) {
            group3++;
        }
        sumFood += command;
        index++;
        command = Number(input[index]);
    }
    let allsum = sumFood / 1000;
    let price = allsum * 12.45;
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${price.toFixed(2)} lv.`);
}
examp4(['10',
    '256',
    '348',
    '198',
    '322',
    '186',
    '294',
    '321',
    '100',
    '200',
    '300'
])