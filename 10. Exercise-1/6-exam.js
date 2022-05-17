function exam6(input) {
    let topOne = Number(input[0]);
    let topTwo = Number(input[1]);
    let topThree = Number(input[2]);

    for (let one = 1; one <= topOne; one++) {
        if (one % 2 == 0) {

            for (let two = 2; two <= topTwo; two++) {
                if (two == 2 || two == 3 || two == 5 || two == 7) {
                    for (let three = 1; three <= topThree; three++) {
                        if (three % 2 == 0) {
                            console.log(`${one} ${two} ${three}`);
                        }
                    }
                }
            }
        }
    }
}

exam6(['3',
    '9',
    '5'
]);