function examp6(input) {
    index = 0;
    let countLocation = Number(input[index]);
    let sumGoldDays = 0;
    let averageGoldDay = 0;
    for (let location = 1; location <= countLocation; location++) {
        index++;
        let expAveraheGoldDay = Number(input[index]);
        index++;
        let countDayLocanion = Number(input[index]);
        sumGoldDays = 0;
        averageGoldDay = 0;
        for (let i = 1; i <= countDayLocanion; i++) {
            index++;
            let goldDay = Number(input[index]);
            sumGoldDays += goldDay;
            goldDay = Number(input[index]);
        }
        averageGoldDay = sumGoldDays / countDayLocanion;
        if (averageGoldDay > expAveraheGoldDay) {
            console.log(`Good job! Average gold per day: ${averageGoldDay.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expAveraheGoldDay - averageGoldDay).toFixed(2)} gold.`);
        }
    }
}
examp6(['2',
    '10', '3', '10', '10', '11',
    '20', '2', '20', '10']);
examp6(['1',
    '5', '3', '10', '1', '3']);
