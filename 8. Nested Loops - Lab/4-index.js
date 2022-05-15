function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let final = Number(input[2]);
    let count = 0;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            if (i + j === final) {
                console.log(`Combination N:${count} (${i} + ${j} = ${final})`);
                return;
            }
        }
    }
    console.log(`${count} combinations - neither equals ${final}`);
} 
sumOfTwoNumbers(["23",
"24",
"20"])




