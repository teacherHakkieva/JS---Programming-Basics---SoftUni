function exam5(input) {
    let wantMoney = Number(input[0]);
    let b=wantMoney;
    let index = 1;
    let command = input[index];
    let sum = 0;
    while (command !== 'closed') {
        switch (command) {
            case 'haircut':
                index++
                command = input[index++];
                if (command === 'mens') {
                    sum = 15;
                } else if (command === 'ladies') {
                    sum = 20;
                } else if (command === 'kids') {
                    sum = 10;
                }
                wantMoney -= sum;
                sum = 0;

                command = input[index];
                break;
            case 'color':
                index++
                command = input[index++];
                if (command === 'touch up') {
                    sum = 20;
                } else if (command === 'full color') {
                    sum = 30;
                }
                wantMoney -= sum;
                sum = 0;
                command = input[index];
                break;
            default:
                break;
        }
        if (wantMoney <= 0) {
            console.log(`You have reached your target for the day!`);
            let moneyDay = b - wantMoney;
            console.log(`Earned money: ${moneyDay}lv.`);
            return;
        }

    }
    console.log(`Target not reached! You need ${wantMoney}lv. more.`);
   
    let moneyDay = b - wantMoney;
    console.log(`Earned money: ${moneyDay}lv.`);
}
exam5(['300',
    'haircut',
    'ladies',
    'haircut',
    'kids',
    'color',
    'touch up',
    'closed',
])