function examp2(input) {
    let countProces = Number(input[0]);
    let countEmployes = Number(input[1]);
    let workDays= Number(input[2]);

    let allWorkHour= countEmployes*workDays*8;
    let workProcessor = Math.floor(allWorkHour/3);

    let profit = (Math.abs(countProces-workProcessor)*110.10)
    if (countProces<workProcessor) {
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    }else{
        console.log(`Losses: -> ${profit.toFixed(2)} BGN`);
    }

}
examp2(['500',
    '8',
    '20'
     ]);
     examp2(['150',
    '7',
    '18'
     ]);
