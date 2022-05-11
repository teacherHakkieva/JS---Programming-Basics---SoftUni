function numbersDivisibleBy9(input) {
    let sum = 0;
    let min = Number(input[0]);
    let max = Number(input[1]);
    let outputNumbers = '';
    for (let i = min; i <= max; i++) {
        if (i % 9 === 0) {
            sum += i;
            outputNumbers += `${i} \n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers);
}
numbersDivisibleBy9(['100', '200']);
