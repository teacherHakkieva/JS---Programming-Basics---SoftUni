function examp6(input) {
    let day = Number(input[0]);
    let hour = Number(input[1]);
    let payTicket = 0;
    let sumDay = 0;
    let totalSum = 0;
    for (let i = 1; i <= day; i++) {
        for (let j = 1; j <= hour; j++) {
            if (i % 2 == 1 && j % 2 == 0) {
                payTicket = 1.25;
                sumDay += payTicket;
            } else if (i % 2 == 1 && j % 2 == 1) {
                payTicket = 1.00
                sumDay += payTicket
            }
            if (i % 2 == 0 && j % 2 == 1) {
                payTicket = 2.50;
                sumDay += payTicket;
            } else if (i % 2 == 0 && j % 2 == 0) {
                payTicket = 1.00
                sumDay += payTicket
            }
        }
        console.log(`Day: ${i} - ${sumDay.toFixed(2)} leva`);
        totalSum += sumDay;
        sumDay=0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
examp6(['5', '2'])