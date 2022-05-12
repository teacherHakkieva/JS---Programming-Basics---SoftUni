function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toysPrice = Number(input[2]);
    let toyCounter = 0;
    let saveMoney = 0;
    let money = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCounter++;
        } else {
            saveMoney += money;
            money += 10;
            saveMoney -= 1;
        }
    }
    saveMoney += toyCounter * toysPrice;
    let diff = Math.abs(saveMoney - washingMachinePrice)
    if (saveMoney >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);

