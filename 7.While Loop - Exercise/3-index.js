function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let counter = 0;
    let spendCounter = 0;
    let isSaveMoney = true;

    while (money < needMoney) {
        counter++;
        let type = input[index];
        index++
        let tempMoney = Number(input[index]);
        index++;

        if (type === 'save') {
            spendCounter=0;
            money += tempMoney;
        } else {
            spendCounter++;
            money -= tempMoney;
            if (money < 0) {
                money = 0;

            }
        }
        if (spendCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(counter);
            isSaveMoney = false;
            break;
        }
    } 
    if (isSaveMoney) {
        console.log(`You saved the money for ${counter} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);

vacation(["110", "60", "spend", "10", "spend", "10", "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

vacation(["2000", "1000", "spend", "1200", "save", "2000"])